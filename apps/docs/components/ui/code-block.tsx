import { CodeBlockContent } from '@/components/ui/code-block-content'
import { CodeBlockHeader } from '@/components/ui/code-block-header'
import { cn } from '@/lib/utils'

interface CodeBlockProps {
  code: string
  filename?: string
  className?: string
  'aria-label'?: string
}

export function CodeBlock({ code, filename, className, 'aria-label': ariaLabel }: CodeBlockProps) {
  return (
    // biome-ignore lint/a11y/useAriaPropsSupportedByRole: needed
    <div className={cn('rounded-lg overflow-hidden', className)} aria-label={ariaLabel}>
      <CodeBlockHeader code={code} filename={filename} />

      <CodeBlockContent code={code} />
    </div>
  )
}
