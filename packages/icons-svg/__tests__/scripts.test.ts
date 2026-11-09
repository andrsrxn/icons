import { describe, expect, it } from 'vitest'
import { consolidateStrokeAttrs, injectStaticAttrs } from '../scripts/build.js'

describe('consolidateStrokeAttrs', () => {
  it('extracts the actual stroke-width value from the source, not a hardcoded default', () => {
    const svg = '<svg><path stroke-width="2"/></svg>'
    const { attrs } = consolidateStrokeAttrs(svg)

    expect(attrs).toContain("stroke-width='2'")
  })

  it('falls back to 1.5 only when stroke-width is genuinely absent', () => {
    const svg = '<svg><path d="M0 0"/></svg>'
    const { attrs } = consolidateStrokeAttrs(svg)

    expect(attrs).toBe('')
  })

  it('takes the first occurrence when multiple elements have different stroke-width values', () => {
    const svg = '<svg><path stroke-width="2"/><path stroke-width="3"/></svg>'
    const { attrs } = consolidateStrokeAttrs(svg)

    expect(attrs).toContain("stroke-width='2'")
    expect(attrs).not.toContain("stroke-width='3'")
  })

  it('strips stroke-width from every element in the markup', () => {
    const svg = '<svg stroke-width="2"><path stroke-width="2"/><path stroke-width="2"/></svg>'
    const { svg: result } = consolidateStrokeAttrs(svg)

    expect(result).not.toContain('stroke-width')
  })

  it('adds round stroke-linecap/stroke-linejoin when either is present in the source', () => {
    const svg = '<svg><path stroke-linecap="round"/></svg>'
    const { attrs } = consolidateStrokeAttrs(svg)

    expect(attrs).toContain("stroke-linecap='round' stroke-linejoin='round'")
  })

  it('adds linecap/linejoin even when only stroke-linejoin is present in the source', () => {
    const svg = '<svg><path stroke-linejoin="round"/></svg>'
    const { attrs } = consolidateStrokeAttrs(svg)

    expect(attrs).toContain("stroke-linecap='round' stroke-linejoin='round'")
  })

  it('strips stroke-linecap and stroke-linejoin from every element', () => {
    const svg = '<svg><path stroke-linecap="round" stroke-linejoin="round"/></svg>'
    const { svg: result } = consolidateStrokeAttrs(svg)

    expect(result).not.toContain('stroke-linecap')
    expect(result).not.toContain('stroke-linejoin')
  })

  it('combines stroke-width and linecap/linejoin into one space-joined string', () => {
    const svg = '<svg><path stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
    const { attrs } = consolidateStrokeAttrs(svg)

    expect(attrs).toBe("stroke-width='2' stroke-linecap='round' stroke-linejoin='round'")
  })

  it('returns an empty attrs string and an unmodified svg when neither is present', () => {
    const svg = '<svg fill="currentColor"><path opacity=".2"/></svg>'
    const { svg: result, attrs } = consolidateStrokeAttrs(svg)

    expect(attrs).toBe('')
    expect(result).toBe(svg)
  })

  it('leaves unrelated attributes untouched', () => {
    const svg = '<svg viewBox="0 0 24 24"><path d="M0 0" stroke-width="2" fill="none"/></svg>'
    const { svg: result } = consolidateStrokeAttrs(svg)

    expect(result).toContain('viewBox="0 0 24 24"')
    expect(result).toContain('d="M0 0"')
    expect(result).toContain('fill="none"')
  })
})

describe('injectStaticAttrs', () => {
  it('appends attrs into the root <svg> tag', () => {
    const svg = '<svg viewBox="0 0 24 24"><path/></svg>'
    const result = injectStaticAttrs(svg, "data-slot='icon-ui-rocket' class='icon-ui'")

    expect(result).toContain(
      "<svg viewBox=\"0 0 24 24\" data-slot='icon-ui-rocket' class='icon-ui'>"
    )
  })

  it('preserves every existing attribute on the root tag', () => {
    const svg = '<svg viewBox="0 0 24 24" fill="none"><path/></svg>'
    const result = injectStaticAttrs(svg, "data-slot='icon-ui-rocket'")

    expect(result).toContain('viewBox="0 0 24 24"')
    expect(result).toContain('fill="none"')
  })

  it('only modifies the root tag, not identically-named attributes on children', () => {
    const svg = '<svg viewBox="0 0 24 24"><rect class="inner"/></svg>'
    const result = injectStaticAttrs(svg, "class='icon-ui'")

    expect(result).toContain('<svg viewBox="0 0 24 24" class=\'icon-ui\'>')
    expect(result).toContain('<rect class="inner"/>')
  })

  it('leaves a trailing space when attrs is an empty string', () => {
    const svg = '<svg viewBox="0 0 24 24"><path/></svg>'
    const result = injectStaticAttrs(svg, '')

    expect(result).toBe('<svg viewBox="0 0 24 24" ><path/></svg>')
  })
})
