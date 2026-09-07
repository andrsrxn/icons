import { createHighlighter } from 'shiki'
import bash from 'shiki/langs/bash.mjs'
import tsx from 'shiki/langs/tsx.mjs'
import typescript from 'shiki/langs/typescript.mjs'
import githubDark from 'shiki/themes/github-dark.mjs'

let highlighterPromise: ReturnType<typeof createHighlighter> | null = null

// biome-ignore lint/suspicious/useAwait: to return a promise
export async function getHighlighterInstance() {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighter({
      // Explicitly declaration forces Next.js to bundle these files
      themes: [githubDark],
      langs: [tsx, typescript, bash],
    })
  }
  return highlighterPromise
}

export async function highlightCode(code: string, lang: string) {
  const highlighter = await getHighlighterInstance()
  return highlighter.codeToHtml(code, {
    lang,
    theme: githubDark,
  })
}
