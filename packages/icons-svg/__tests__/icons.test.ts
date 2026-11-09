import { beforeEach, describe, expect, it } from 'vitest'
import activity from '../dist/ui/activity.js'
import alarm from '../dist/ui/alarm.js'
import check from '../dist/ui/check.js'
import heart from '../dist/ui/heart.js'
import rocket from '../dist/ui/rocket.js'
import search from '../dist/ui/search.js'

const uiIcons = [
  { name: 'rocket', content: rocket },
  { name: 'activity', content: activity },
  { name: 'search', content: search },
  { name: 'heart', content: heart },
  { name: 'alarm', content: alarm },
  { name: 'check', content: check },
] as const

describe('UI icons', () => {
  describe.each(uiIcons)('$name', ({ content, name }) => {
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

    it(`has data-slot="icon-ui-${name}"`, () => {
      const svg = container.querySelector('svg') as SVGSVGElement
      expect(svg.getAttribute('data-slot')).toBe(`icon-ui-${name}`)
    })

    it('has the "icon-ui" class', () => {
      const svg = container.querySelector('svg') as SVGSVGElement
      expect(svg.classList.contains('icon-ui')).toBe(true)
    })

    it('is hidden from assistive tech by default', () => {
      const svg = container.querySelector('svg') as SVGSVGElement
      expect(svg.getAttribute('aria-hidden')).toBe('true')
      expect(svg.hasAttribute('role')).toBe(false)
      expect(svg.hasAttribute('aria-label')).toBe(false)
    })

    it('is not focusable', () => {
      const svg = container.querySelector('svg') as SVGSVGElement
      expect(svg.getAttribute('focusable')).toBe('false')
    })

    it('has a fixed 24x24 size (no prop to change it)', () => {
      const svg = container.querySelector('svg') as SVGSVGElement
      expect(svg.getAttribute('width')).toBe('24')
      expect(svg.getAttribute('height')).toBe('24')
    })

    it('sets stroke-width on the root only, never on children', () => {
      const svg = container.querySelector('svg') as SVGSVGElement
      const usesStroke = container.querySelector('svg [stroke]') !== null
      if (usesStroke) {
        expect(svg.hasAttribute('stroke-width')).toBe(true)
      }
      for (const el of container.querySelectorAll('svg *')) {
        expect(el.hasAttribute('stroke-width')).toBe(false)
      }
    })

    it('sets round stroke-linecap/stroke-linejoin on the root when the icon uses a stroke', () => {
      const svg = container.querySelector('svg') as SVGSVGElement
      const usesStroke = container.querySelector('svg [stroke]') !== null
      if (usesStroke) {
        expect(svg.getAttribute('stroke-linecap')).toBe('round')
        expect(svg.getAttribute('stroke-linejoin')).toBe('round')
      }
      for (const el of container.querySelectorAll('svg *')) {
        expect(el.hasAttribute('stroke-linecap')).toBe(false)
        expect(el.hasAttribute('stroke-linejoin')).toBe(false)
      }
    })

    it('every stroke or fill resolves to currentColor', () => {
      for (const el of container.querySelectorAll('svg *')) {
        if (el.hasAttribute('stroke')) {
          expect(el.getAttribute('stroke')).toBe('currentColor')
        }
        if (el.hasAttribute('fill')) {
          expect(el.getAttribute('fill')).toBe('currentColor')
        }
      }
    })

    it('a duotone background shape (opacity .2) is filled, never stroked', () => {
      const duotoneShapes = container.querySelectorAll('svg [opacity=".2"]')
      for (const shape of duotoneShapes) {
        expect(shape.hasAttribute('fill')).toBe(true)
        expect(shape.hasAttribute('stroke')).toBe(false)
      }
    })
  })
})
