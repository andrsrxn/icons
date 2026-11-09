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
 *  3. Icons that should flip render an SVG whose `data-slot` attribute is covered
 *     by those CSS rules.
 *  4. Icons that should NOT flip render an SVG whose `data-slot` is NOT covered
 *     by those CSS rules.
 *
 * This tests both the CSS authorship and the component rendering in a single,
 * deterministic pass — no browser or CSS engine needed.
 */
import fs from 'node:fs'
import path from 'node:path'
import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { IconArrowStart } from '../src/ui/arrow-start'
import { IconChevronStart } from '../src/ui/chevron-start'
import { IconExternalLink } from '../src/ui/external-link'
import { IconHeart } from '../src/ui/heart'
import { IconRedo } from '../src/ui/redo'
import { IconSearch } from '../src/ui/search'
import { IconUndo } from '../src/ui/undo'

const rtlCss = fs.readFileSync(path.resolve(import.meta.dirname, '../src/rtl.css'), 'utf-8')

/** Extract all data-slot values whose selector starts with [dir='<dir>'] */
function extractSlots(css: string, dir: 'rtl' | 'ltr'): Set<string> {
  // Strip CSS block comments before parsing so they don't interfere with matching.
  const stripped = css.replace(/\/\*[\s\S]*?\*\//g, '')
  const slots = new Set<string>()
  // Match rule blocks: <selectors> { <declarations> }
  const ruleBlockRe = /([^{]+)\{[^}]*\}/g
  let m: RegExpExecArray | null
  while ((m = ruleBlockRe.exec(stripped)) !== null) {
    const selectorList = m[1]!
    // Split on comma to get individual selectors
    for (const selector of selectorList.split(',')) {
      const trimmed = selector.trim()
      if (!trimmed.startsWith(`[dir='${dir}']`)) continue
      const slotMatch = /\[data-slot='([^']+)'\]/.exec(trimmed)
      if (slotMatch) slots.add(slotMatch[1]!)
    }
  }
  return slots
}

const rtlSlots = extractSlots(rtlCss, 'rtl')
const ltrSlots = extractSlots(rtlCss, 'ltr')

function getSlot(container: HTMLElement): string {
  const svg = container.querySelector('svg')
  if (!svg) throw new Error('No <svg> found in rendered output')
  const slot = svg.getAttribute('data-slot')
  if (!slot) throw new Error('<svg> has no data-slot attribute')
  return slot
}

describe('consistency', () => {
  it('every rtl flip slot has a matching ltr reset slot', () => {
    const rtlSlots = extractSlots(rtlCss, 'rtl')
    const ltrSlots = extractSlots(rtlCss, 'ltr')
    const missing = [...rtlSlots].filter(slot => !ltrSlots.has(slot))

    expect(missing).toEqual([])
  })

  it('every ltr reset slot has a matching rtl flip slot', () => {
    const rtlSlots = extractSlots(rtlCss, 'rtl')
    const ltrSlots = extractSlots(rtlCss, 'ltr')
    const missing = [...ltrSlots].filter(slot => !rtlSlots.has(slot))

    expect(missing).toEqual([])
  })
})

const flippableIcons = [
  { name: 'IconArrowStart', Component: IconArrowStart },
  { name: 'IconChevronStart', Component: IconChevronStart },
  { name: 'IconExternalLink', Component: IconExternalLink },
  { name: 'IconUndo', Component: IconUndo },
  { name: 'IconRedo', Component: IconRedo },
] as const

describe.each(flippableIcons)('$name (listed in rtl.css)', ({ Component }) => {
  it('renders a data-slot that is covered by the RTL CSS rule', () => {
    const { container } = render(
      <div dir='rtl'>
        <Component />
      </div>
    )
    const slot = getSlot(container)
    expect(
      rtlSlots.has(slot),
      `Expected data-slot "${slot}" to be listed under [dir='rtl'] in rtl.css`
    ).toBe(true)
  })

  it('renders a data-slot that is covered by the LTR reset rule', () => {
    // Ensures the LTR-inside-RTL reset exists for every flippable icon.
    const { container } = render(
      <div dir='ltr'>
        <Component />
      </div>
    )
    const slot = getSlot(container)
    expect(
      ltrSlots.has(slot),
      `Expected data-slot "${slot}" to be listed under [dir='ltr'] in rtl.css (LTR reset)`
    ).toBe(true)
  })
})

const nonFlippableIcons = [
  { name: 'IconHeart', Component: IconHeart },
  { name: 'IconSearch', Component: IconSearch },
] as const

describe.each(nonFlippableIcons)('$name (not listed in rtl.css)', ({ Component }) => {
  it('renders a data-slot that is NOT covered by the RTL CSS rule', () => {
    const { container } = render(
      <div dir='rtl'>
        <Component />
      </div>
    )
    const slot = getSlot(container)
    expect(
      rtlSlots.has(slot),
      `Expected data-slot "${slot}" NOT to be listed under [dir='rtl'] in rtl.css`
    ).toBe(false)
  })
})
