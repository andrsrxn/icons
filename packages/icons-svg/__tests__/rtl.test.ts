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
import arrowStart from '../dist/ui/arrow-start.js'
import chevronStart from '../dist/ui/chevron-start.js'
import externalLink from '../dist/ui/external-link.js'
import heart from '../dist/ui/heart.js'
import redo from '../dist/ui/redo.js'
import search from '../dist/ui/search.js'
import undo from '../dist/ui/undo.js'

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
