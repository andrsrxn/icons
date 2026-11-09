/**
 * RTL test strategy
 *
 * jsdom does not apply stylesheet rules to getComputedStyle — only inline styles
 * are reflected. Testing `transform` via getComputedStyle will always return '' or
 * 'none' regardless of what the CSS says.
 *
 * Instead we test the contract that the CSS expresses:
 *
 *  1. The CSS file contains a `[dir='rtl'] [data-slot='<icon>']` rule for every
 *     icon that should flip.
 *  2. The CSS file contains a `[dir='ltr'] [data-slot='<icon>']` reset rule for
 *     every icon that should flip (so nested LTR subtrees are restored correctly).
 *  3. Icons that should flip export SVG markup whose root element's `data-slot`
 *     attribute is covered by those CSS rules.
 *  4. Icons that should NOT flip export SVG markup whose `data-slot` is NOT
 *     covered by those CSS rules.
 *
 * This tests both the CSS authorship and the generated SVG strings in a single,
 * deterministic pass — no browser or CSS engine needed.
 */
/** biome-ignore-all lint/style/useNamedCaptureGroup: the regex is simple enough */
/** biome-ignore-all lint/style/noNonNullAssertion: we are confident the regex will match */

import fs from 'node:fs'
import path from 'node:path'
import { describe, expect, it } from 'vitest'

const arrowStart =
  '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke-width=\'1.5\' stroke-linecap=\'round\' stroke-linejoin=\'round\' data-slot=\'icon-ui-arrow-start\' class=\'icon-ui\' aria-hidden=\'true\' focusable=\'false\'><path d="m10.8 19.14-4.25-4.23c-1.33-1.34-2-2-2-2.83s.66-1.5 2-2.83L10.8 5" stroke="currentColor"/><path d="M19.72 12.07H4.78" stroke="currentColor"/></svg>'
const chevronStart =
  '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke-width=\'1.5\' stroke-linecap=\'round\' stroke-linejoin=\'round\' data-slot=\'icon-ui-chevron-start\' class=\'icon-ui\' aria-hidden=\'true\' focusable=\'false\'><path d="m15.26 4.54-4.63 4.62c-1.34 1.34-2 2-2 2.83-.01.83.66 1.5 2 2.83l4.63 4.64" stroke="currentColor"/></svg>'
const externalLink =
  '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke-width=\'1.5\' stroke-linecap=\'round\' stroke-linejoin=\'round\' data-slot=\'icon-ui-external-link\' class=\'icon-ui\' aria-hidden=\'true\' focusable=\'false\'><path opacity=".2" d="M2.64 13.46c0-3.65 0-5.48 1.1-6.64l.14-.13c1.16-1.11 2.98-1.11 6.64-1.11s5.49 0 6.65 1.1l.13.14c1.1 1.16 1.1 2.99 1.1 6.64 0 3.66 0 5.49-1.1 6.65l-.14.13c-1.15 1.1-2.98 1.1-6.64 1.1s-5.48 0-6.64-1.1l-.13-.13c-1.11-1.16-1.11-3-1.11-6.65" fill="currentColor"/><path d="M18.4 12.4v1.06c0 3.66 0 5.49-1.1 6.65l-.14.13c-1.15 1.1-2.98 1.1-6.64 1.1s-5.48 0-6.64-1.1l-.13-.13c-1.11-1.16-1.11-3-1.11-6.65s0-5.48 1.1-6.64l.14-.13c1.16-1.11 2.98-1.11 6.64-1.11h1.25" stroke="currentColor"/><path d="M14.71 2.67h2.6c1.88 0 2.83 0 3.41.58.6.59.6 1.53.6 3.42h0v2.6" stroke="currentColor"/><path d="m11.5 12.48 8.93-8.93" stroke="currentColor"/></svg>'
const heart =
  '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke-width=\'1.5\' stroke-linecap=\'round\' stroke-linejoin=\'round\' data-slot=\'icon-ui-heart\' class=\'icon-ui\' aria-hidden=\'true\' focusable=\'false\'><path opacity=".2" d="M17.25 3.35c-1.8 0-3.27.9-4.23 1.8-.55.52-.82.78-1.02.78s-.47-.26-1.03-.78a6.3 6.3 0 0 0-4.22-1.8C3.4 3.35.88 7.17 1.96 11.2c.73 2.72 3.87 5.1 6.63 7.25 1.81 1.41 2.72 2.12 3.41 2.12s1.6-.7 3.41-2.12c2.76-2.15 5.9-4.53 6.63-7.25 1.08-4.04-1.44-7.86-4.79-7.86" fill="currentColor"/><path d="M13.02 5.15c.96-.9 2.43-1.8 4.23-1.8 3.35 0 5.87 3.82 4.79 7.86-.73 2.72-3.87 5.1-6.63 7.25-1.81 1.41-2.72 2.12-3.41 2.12s-1.6-.7-3.41-2.12h0c-2.76-2.15-5.9-4.53-6.63-7.25C.88 7.17 3.4 3.35 6.75 3.35c1.8 0 3.27.9 4.22 1.8.56.52.83.78 1.03.78s.47-.26 1.02-.78" stroke="currentColor"/></svg>'
const redo =
  '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke-width=\'1.5\' stroke-linecap=\'round\' stroke-linejoin=\'round\' data-slot=\'icon-ui-redo\' class=\'icon-ui\' aria-hidden=\'true\' focusable=\'false\'><path d="M19.9 8.63h-9.85a5.69 5.69 0 0 0 0 11.37h.3" stroke="currentColor"/><path d="M16.48 4.07 18.2 5.8c1.34 1.34 2 2 2 2.83s-.66 1.5-2 2.83l-1.72 1.73" stroke="currentColor"/></svg>'
const search =
  '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke-width=\'1.5\' stroke-linecap=\'round\' stroke-linejoin=\'round\' data-slot=\'icon-ui-search\' class=\'icon-ui\' aria-hidden=\'true\' focusable=\'false\'><path opacity=".2" d="M17.8 10.26a7.61 7.61 0 1 1-15.23 0 7.61 7.61 0 0 1 15.22 0" fill="currentColor"/><path d="m15.68 15.63 5.7 5.7" stroke="currentColor"/><path d="M17.8 10.26a7.6 7.6 0 0 1-7.62 7.6 7.61 7.61 0 1 1 7.61-7.6" stroke="currentColor"/></svg>'
const undo =
  '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke-width=\'1.5\' stroke-linecap=\'round\' stroke-linejoin=\'round\' data-slot=\'icon-ui-undo\' class=\'icon-ui\' aria-hidden=\'true\' focusable=\'false\'><path d="M4.6 8.6h9.86a5.69 5.69 0 0 1 0 11.36h-.3" stroke="currentColor"/><path d="M8.03 4.04 6.3 5.76c-1.33 1.33-2 2-2 2.83s.67 1.5 2 2.83l1.73 1.73" stroke="currentColor"/></svg>'

const rtlCss = fs.readFileSync(path.resolve(import.meta.dirname, '../src/rtl.css'), 'utf-8')

/** Extract all data-slot values whose selector starts with [dir='<dir>'] */
function extractSlots(css: string, dir: 'rtl' | 'ltr'): Set<string> {
  // Strip CSS block comments before parsing so they don't interfere with matching.
  const stripped = css.replace(/\/\*[\s\S]*?\*\//gu, '')
  const slots = new Set<string>()
  const ruleBlockRe = /([^{]+)\{[^}]*\}/gu
  let m: RegExpExecArray | null
  // biome-ignore lint/suspicious/noAssignInExpressions: needed for RegExp exec in a while loop
  while ((m = ruleBlockRe.exec(stripped)) !== null) {
    const selectorList = m[1]!
    for (const selector of selectorList.split(',')) {
      const trimmed = selector.trim()
      if (!trimmed.startsWith(`[dir='${dir}']`)) {
        continue
      }
      const slotMatch = /\[data-slot='([^']+)'\]/u.exec(trimmed)
      if (slotMatch) {
        slots.add(slotMatch[1]!)
      }
    }
  }
  return slots
}

const rtlSlots = extractSlots(rtlCss, 'rtl')
const ltrSlots = extractSlots(rtlCss, 'ltr')

function getSlotFromSvgString(svgString: string): string {
  const m = /data-slot='([^']+)'/u.exec(svgString)
  if (!m) {
    throw new Error(`No data-slot attribute found in SVG string: ${svgString.slice(0, 120)}`)
  }
  return m[1]!
}

const flippableIcons = [
  { name: 'arrow-start', content: arrowStart },
  { name: 'chevron-start', content: chevronStart },
  { name: 'external-link', content: externalLink },
  { name: 'undo', content: undo },
  { name: 'redo', content: redo },
] as const

describe.each(flippableIcons)('$name (listed in rtl.css)', ({ content }) => {
  it('exports SVG with a data-slot covered by the RTL CSS rule', () => {
    const slot = getSlotFromSvgString(content)
    expect(
      rtlSlots.has(slot),
      `Expected data-slot "${slot}" to be listed under [dir='rtl'] in rtl.css`
    ).toBe(true)
  })

  it('exports SVG with a data-slot covered by the LTR reset rule', () => {
    // Ensures the LTR-inside-RTL reset exists for every flippable icon.
    const slot = getSlotFromSvgString(content)
    expect(
      ltrSlots.has(slot),
      `Expected data-slot "${slot}" to be listed under [dir='ltr'] in rtl.css (LTR reset)`
    ).toBe(true)
  })
})

const nonFlippableIcons = [
  { name: 'heart', content: heart },
  { name: 'search', content: search },
] as const

describe.each(nonFlippableIcons)('$name (not listed in rtl.css)', ({ content }) => {
  it('exports SVG with a data-slot NOT covered by the RTL CSS rule', () => {
    const slot = getSlotFromSvgString(content)
    expect(
      rtlSlots.has(slot),
      `Expected data-slot "${slot}" NOT to be listed under [dir='rtl'] in rtl.css`
    ).toBe(false)
  })
})
