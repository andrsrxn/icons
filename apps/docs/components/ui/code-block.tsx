'use client'

import { type ComponentProps, type CSSProperties, useEffect, useMemo, useState } from 'react'
import type { BundledLanguage } from 'shiki'
import { codeToHtml } from 'shiki'
import { ButtonCopy } from '@/components/shared/button-copy'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'

// ─── Types ───────────────────────────────────────────────────────────────────

export interface CodeBlockFile {
  filename: string
  code: string
  language?: BundledLanguage
  panelClassName?: string
  paneStyle?: CSSProperties
  highlightLines?: number[]
  highlightClassName?: string
  showLineNumbers?: boolean
}

export type CodeBlockProps = ComponentProps<'div'> & {
  code?: string
  language?: BundledLanguage
  filename?: string
  files?: CodeBlockFile[]
  panelClassName?: string
  paneStyle?: CSSProperties
  highlightLines?: number[]
  highlightClassName?: string
  showLineNumbers?: boolean
}

const codeBlockMatch = /<code[^>]*>([\s\S]*?)<\/code>/

// Internal Helpers
function splitShikiLines(html: string): string[] {
  const match = html.match(codeBlockMatch)

  if (!match) {
    return [html]
  }

  // Split on newlines; last element after trailing newline may be empty
  const lines = match[1]?.split('\n') ?? []

  if (lines.at(-1) === '') {
    lines.pop()
  }

  return lines
}

async function highlight(code: string, lang: BundledLanguage = 'tsx'): Promise<string> {
  try {
    return await codeToHtml(code, {
      lang,
      theme: 'github-dark',
    })
  } catch {
    // Fallback: wrap in plain-text pre/code so the UI never breaks
    const escaped = code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

    return `<pre><code>${escaped}</code></pre>`
  }
}

// Copy Button

function CodeBlockCopyButton({ className, ...props }: ComponentProps<typeof ButtonCopy>) {
  return (
    <ButtonCopy
      data-slot='code-block-copy'
      aria-label='Copy code'
      title='Copy'
      variant='ghost'
      size='icon-xs'
      className={cn('dark', className)}
      {...props}
    />
  )
}

// Single

interface CodeBlockPaneProps {
  code: string
  language?: BundledLanguage
  showCopy?: boolean
  className?: string
  style?: CSSProperties
  highlightLines?: number[]
  highlightClassName?: string
  showLineNumbers?: boolean
}

function CodeBlockPane({
  code,
  language = 'tsx',
  showCopy = true,
  className,
  style,
  highlightLines,
  highlightClassName = 'bg-amber-600/40 dark:bg-amber-400/40',
  showLineNumbers = false,
}: CodeBlockPaneProps) {
  const [html, setHtml] = useState<string>('')

  useEffect(() => {
    let cancelled = false

    highlight(code, language).then(result => {
      if (!cancelled) {
        setHtml(result)
      }
    })

    return () => {
      cancelled = true
    }
  }, [code, language])

  const hasHighlights = highlightLines && highlightLines.length > 0
  const useLineView = hasHighlights || showLineNumbers

  // Pre-compute Shiki's background so we can match the container
  const lines = useMemo(() => (html ? splitShikiLines(html) : []), [html])

  return (
    <div data-slot='code-block-pane' className={cn('cn-code-block-pane', className)} style={style}>
      <ScrollArea className='*:data-[slot=scroll-area-viewport]:h-auto! w-full'>
        {showCopy && <CodeBlockCopyButton value={code} className='absolute top-2 right-2 z-10' />}
        {html ? (
          useLineView ? (
            <>
              <pre className='shiki bg-transparent! p-0 font-mono text-sm leading-relaxed'>
                <code className='block w-max min-w-full'>
                  {lines.map((line, i) => {
                    const lineNumber = i + 1
                    const isHighlighted = highlightLines?.includes(lineNumber) ?? false

                    return (
                      <div
                        // biome-ignore lint/suspicious/noArrayIndexKey: wont change
                        key={i}
                        className={cn(
                          'flex items-stretch px-4 py-[0.5px]',
                          isHighlighted && highlightClassName
                        )}>
                        {showLineNumbers && (
                          <span className='text-muted-foreground/50 mr-4 w-4 shrink-0 text-right font-mono text-xs leading-relaxed select-none'>
                            {lineNumber}
                          </span>
                        )}
                        {/* Line tokens are trusted Shiki HTML output */}
                        <span
                          className='flex-1'
                          // biome-ignore lint/security/noDangerouslySetInnerHtml: necessary to render
                          // biome-ignore lint/style/useNamingConvention: not applicable
                          dangerouslySetInnerHTML={{ __html: line || '&nbsp;' }}
                        />
                      </div>
                    )
                  })}
                </code>
              </pre>
              <ScrollBar orientation='horizontal' />
            </>
          ) : (
            <>
              <div
                className={cn(
                  'cn-code-block-highlight [&>pre]:p-4 [&>pre]:text-sm [&>pre]:leading-relaxed',
                  ' [&>pre]:font-mono [&>pre]:whitespace-pre [&>pre]:bg-transparent!'
                )}

                // biome-ignore lint/security/noDangerouslySetInnerHtml: necessary to render
                // biome-ignore lint/style/useNamingConvention: not applicable
                dangerouslySetInnerHTML={{ __html: html }}
              />
              <ScrollBar orientation='horizontal' />
            </>
          )
        ) : (
          <pre className='p-4 font-mono text-sm leading-relaxed opacity-0'>{code}</pre>
        )}
      </ScrollArea>
    </div>
  )
}

function CodeBlock({
  code,
  language = 'tsx',
  filename,
  files,
  className,
  panelClassName,
  paneStyle,
  highlightLines,
  highlightClassName,
  showLineNumbers,
  ...props
}: CodeBlockProps) {
  // Normalise to a files array so the rest of the component is uniform
  const normalizedFiles: CodeBlockFile[] = useMemo(() => {
    if (files && files.length > 0) {
      return files
    }

    if (code !== undefined) {
      return [
        {
          filename: filename ? `${filename}` : `index.${language}`,
          code,
          language,
          panelClassName,
          paneStyle,
          highlightLines,
          highlightClassName,
          showLineNumbers,
        },
      ]
    }

    return []
  }, [
    files,
    code,
    language,
    filename,
    panelClassName,
    paneStyle,
    highlightLines,
    highlightClassName,
    showLineNumbers,
  ])

  const isMulti = normalizedFiles.length > 1
  const [activeTab, setActiveTab] = useState(normalizedFiles[0]?.filename ?? '')

  // Keep activeTab in sync if files list changes
  useEffect(() => {
    if (normalizedFiles.length > 0 && !normalizedFiles.some(f => f.filename === activeTab)) {
      setActiveTab(normalizedFiles[0]?.filename ?? '')
    }
  }, [normalizedFiles, activeTab])

  const activeFile = normalizedFiles.find(f => f.filename === activeTab) ?? normalizedFiles[0]

  if (normalizedFiles.length === 0) {
    return null
  }

  return (
    <div
      data-slot='code-block'
      className={cn(
        'cn-code-block bg-accent dark border-border overflow-clip overflow-x-auto rounded-xl border text-sm',
        className
      )}
      {...props}>
      {/* Header */}
      <div
        data-slot='code-block-header'
        className='cn-code-block-header bg-card border-border flex items-center justify-between gap-2 border-b'>
        {isMulti ? (
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className='cn-code-block-tabs flex-1'>
            <TabsList
              variant='line'
              className='cn-code-block-tabs-list group-data-horizontal/tabs:h-auto'>
              {normalizedFiles.map(file => (
                <TabsTrigger
                  key={file.filename}
                  value={file.filename}
                  className='cn-code-block-tab h-auto px-3 py-2 text-xs font-medium'>
                  {file.filename}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        ) : (
          <span
            data-slot='code-block-filename'
            className='cn-code-block-filename text-muted-foreground px-3 py-2 text-xs font-medium'>
            {normalizedFiles[0]?.filename ?? ''}
          </span>
        )}

        {activeFile && (
          <CodeBlockCopyButton value={activeFile.code} className='mr-1 text-foreground shrink-0' />
        )}
      </div>

      {/* Code pane – no copy button inside since header already has one */}
      {activeFile && (
        <CodeBlockPane
          key={activeFile.filename}
          code={activeFile.code}
          language={activeFile.language}
          showCopy={false}
          className={activeFile.panelClassName}
          style={activeFile.paneStyle}
          highlightLines={activeFile.highlightLines}
          highlightClassName={activeFile.highlightClassName}
          showLineNumbers={activeFile.showLineNumbers}
        />
      )}
    </div>
  )
}

export { CodeBlock, CodeBlockCopyButton, CodeBlockPane }
