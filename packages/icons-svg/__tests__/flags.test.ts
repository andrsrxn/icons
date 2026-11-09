import { beforeEach, describe, expect, it } from 'vitest'
import de from '../dist/flags/de.js'
import gb from '../dist/flags/gb.js'
import jp from '../dist/flags/jp.js'
import mx from '../dist/flags/mx.js'
import us from '../dist/flags/us.js'

const flagIcons = [
  { code: 'us', content: us, label: 'US' },
  { code: 'mx', content: mx, label: 'MX' },
  { code: 'gb', content: gb, label: 'GB' },
  { code: 'jp', content: jp, label: 'JP' },
  { code: 'de', content: de, label: 'DE' },
] as const

describe('Flag icons', () => {
  describe.each(flagIcons)('$code', ({ content, code, label }) => {
    let container: HTMLDivElement

    beforeEach(() => {
      container = document.createElement('div')
      container.innerHTML = content
      document.body.append(container)
    })

    it('is a plain string, not a URL or data URI', () => {
      expect(content.trim().startsWith('<svg')).toBe(true)
    })

    it('renders an svg element', () => {
      const svg = container.querySelector('svg')
      expect(svg).toBeInTheDocument()
    })

    it(`has data-slot="icon-flag-${code}"`, () => {
      const svg = container.querySelector('svg') as SVGSVGElement
      expect(svg.getAttribute('data-slot')).toBe(`icon-flag-${code}`)
    })

    it('has the "icon-flag" class', () => {
      const svg = container.querySelector('svg') as SVGSVGElement
      expect(svg.classList.contains('icon-flag')).toBe(true)
    })

    it(`is labelled "${label}" and exposed to assistive tech`, () => {
      const svg = container.querySelector('svg') as SVGSVGElement
      expect(svg.getAttribute('role')).toBe('img')
      expect(svg.getAttribute('aria-label')).toBe(label)
    })

    it('is not focusable', () => {
      const svg = container.querySelector('svg') as SVGSVGElement
      expect(svg.getAttribute('focusable')).toBe('false')
    })

    it('has a fixed 21x15 size (no prop to change it)', () => {
      const svg = container.querySelector('svg') as SVGSVGElement
      expect(svg.getAttribute('width')).toBe('21')
      expect(svg.getAttribute('height')).toBe('15')
    })

    it('has no built-in inline style', () => {
      const svg = container.querySelector('svg') as SVGSVGElement
      expect(svg.hasAttribute('style')).toBe(false)
    })

    it('every internal id and url() reference is prefixed with the icon code', () => {
      const svg = container.querySelector('svg') as SVGSVGElement
      const prefixPattern = new RegExp(`^${code}-`)

      for (const el of svg.querySelectorAll('[id]')) {
        expect(el.getAttribute('id')).toMatch(prefixPattern)
      }

      const refs = [...svg.outerHTML.matchAll(/url\(#([^)]+)\)/g)].map(m => m[1])
      expect(refs.length).toBeGreaterThan(0)
      for (const ref of refs) {
        expect(ref).toMatch(prefixPattern)
      }
    })
  })
})
