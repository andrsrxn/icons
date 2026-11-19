/**
 * RTL test strategy
 *
 * jsdom does not apply stylesheet rules to getComputedStyle — only inline styles
 * are reflected. Testing `scale` via getComputedStyle will always return '' or
 * 'none' regardless of what the CSS says.
 *
 * Instead we test the contract that the CSS expresses:
 *
 * The new approach uses a CSS variable + a single :where(...) selector block:
 *
 *   [dir='rtl'] { --andrsrxn-icon-ui-scale: -1 1; }
 *   [dir='ltr'], .icon-ui-no-flip { --andrsrxn-icon-ui-scale: none; }
 *   :where([data-slot='icon-ui-...'], ...) { scale: var(--andrsrxn-icon-ui-scale, none); }
 *
 * So we test:
 *  1. The CSS file contains a [dir='rtl'] { --andrsrxn-icon-ui-scale: -1 1; } rule.
 *  2. The CSS file contains a [dir='ltr'] / .icon-ui-no-flip reset rule.
 *  3. Icons that should flip have their data-slot listed inside :where(...).
 *  4. Icons that should NOT flip have their data-slot absent from :where(...).
 *
 * This tests both the CSS authorship and the component rendering in a single,
 * deterministic pass — no browser or CSS engine needed.
 */
/** biome-ignore-all lint/style/useNamedCaptureGroup: the regex is simple enough */
/** biome-ignore-all lint/style/noNonNullAssertion: we are confident the regex will match */

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

const rtlCssPath = path.resolve(import.meta.dirname, '../../../packages/shared/src/rtl.css')
const rtlCss = fs.readFileSync(rtlCssPath, 'utf-8')

/**
 * Extract all data-slot values listed inside a :where(...) selector block.
 * The new RTL CSS uses a single :where(selectors) { scale: var(...) } rule
 * instead of per-icon [dir=...] rules.
 */
function extractWhereSlots(css: string): Set<string> {
  const stripped = css.replace(/\/\*[\s\S]*?\*\//gu, '')
  const slots = new Set<string>()
  // Match the :where( ... ) { ... } block — greedy inside parens
  const whereBlockRe = /:where\(([\s\S]*?)\)\s*\{[^}]*\}/gu
  let m: RegExpExecArray | null
  // biome-ignore lint/suspicious/noAssignInExpressions: needed for RegExp exec in a while loop
  while ((m = whereBlockRe.exec(stripped)) !== null) {
    const selectorList = m[1]!
    for (const selector of selectorList.split(',')) {
      const slotMatch = /\[data-slot='([^']+)'\]/u.exec(selector.trim())
      if (slotMatch) {
        slots.add(slotMatch[1]!)
      }
    }
  }
  return slots
}

/** Verify the CSS declares the RTL variable activation on [dir='rtl']. */
function cssActivatesRtlVariable(css: string): boolean {
  const stripped = css.replace(/\/\*[\s\S]*?\*\//gu, '')
  return /\[dir='rtl'\][^{]*\{[^}]*--andrsrxn-icon-ui-scale\s*:\s*-1\s+1/u.test(stripped)
}

/** Verify the CSS declares the LTR reset on [dir='ltr'] or .icon-ui-no-flip. */
function cssActivatesLtrReset(css: string): boolean {
  const stripped = css.replace(/\/\*[\s\S]*?\*\//gu, '')
  return /\[dir='ltr'\][^{]*\{[^}]*--andrsrxn-icon-ui-scale\s*:\s*none/u.test(stripped)
}

/** Verify the CSS declares the .icon-ui-no-flip class reset. */
function cssActivatesNoFlipReset(css: string): boolean {
  const stripped = css.replace(/\/\*[\s\S]*?\*\//gu, '')
  return /\.icon-ui-no-flip[^{]*\{[^}]*--andrsrxn-icon-ui-scale\s*:\s*none/u.test(stripped)
}

const whereSlots = extractWhereSlots(rtlCss)

function getSlot(container: HTMLElement): string {
  const svg = container.querySelector('svg')
  if (!svg) {
    throw new Error('No <svg> found in rendered output')
  }
  const slot = svg.getAttribute('data-slot')
  if (!slot) {
    throw new Error('<svg> has no data-slot attribute')
  }
  return slot
}

// ─── CSS structure tests ──────────────────────────────────────────────────────

describe('rtl.css — CSS variable mechanism', () => {
  it('sets --andrsrxn-icon-ui-scale to "-1 1" on [dir=\'rtl\']', () => {
    expect(cssActivatesRtlVariable(rtlCss)).toBe(true)
  })

  it('resets --andrsrxn-icon-ui-scale to "none" on [dir=\'ltr\']', () => {
    expect(cssActivatesLtrReset(rtlCss)).toBe(true)
  })

  it('resets --andrsrxn-icon-ui-scale to "none" on .icon-ui-no-flip', () => {
    expect(cssActivatesNoFlipReset(rtlCss)).toBe(true)
  })

  it('has at least one data-slot inside :where(...)', () => {
    expect(whereSlots.size).toBeGreaterThan(0)
  })
})

// ─── Flippable icons — must be inside :where(...) ────────────────────────────

const flippableIcons = [
  { name: 'IconArrowStart', Component: IconArrowStart },
  { name: 'IconChevronStart', Component: IconChevronStart },
  { name: 'IconExternalLink', Component: IconExternalLink },
  { name: 'IconUndo', Component: IconUndo },
  { name: 'IconRedo', Component: IconRedo },
] as const

describe.each(flippableIcons)('$name (should be listed in :where block)', ({ Component }) => {
  it('renders a data-slot that is covered by the :where(...) scale rule', () => {
    const { container } = render(
      <div dir='rtl'>
        <Component />
      </div>
    )
    const slot = getSlot(container)
    expect(
      whereSlots.has(slot),
      `Expected data-slot "${slot}" to be listed inside :where(...) in rtl.css`
    ).toBe(true)
  })
})

// ─── Non-flippable icons — must NOT be inside :where(...) ────────────────────

const nonFlippableIcons = [
  { name: 'IconHeart', Component: IconHeart },
  { name: 'IconSearch', Component: IconSearch },
] as const

describe.each(nonFlippableIcons)(
  '$name (should NOT be listed in :where block)',
  ({ Component }) => {
    it('renders a data-slot that is NOT covered by the :where(...) scale rule', () => {
      const { container } = render(
        <div dir='rtl'>
          <Component />
        </div>
      )
      const slot = getSlot(container)
      expect(
        whereSlots.has(slot),
        `Expected data-slot "${slot}" NOT to be listed inside :where(...) in rtl.css`
      ).toBe(false)
    })
  }
)
