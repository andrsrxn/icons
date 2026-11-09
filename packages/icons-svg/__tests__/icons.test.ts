/** biome-ignore-all lint/suspicious/noConditionalExpect: only test if it has it */

import { beforeEach, describe, expect, it } from 'vitest'

const search =
  '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke-width=\'1.5\' stroke-linecap=\'round\' stroke-linejoin=\'round\' data-slot=\'icon-ui-search\' class=\'icon-ui\' aria-hidden=\'true\' focusable=\'false\'><path opacity=".2" d="M17.8 10.26a7.61 7.61 0 1 1-15.23 0 7.61 7.61 0 0 1 15.22 0" fill="currentColor"/><path d="m15.68 15.63 5.7 5.7" stroke="currentColor"/><path d="M17.8 10.26a7.6 7.6 0 0 1-7.62 7.6 7.61 7.61 0 1 1 7.61-7.6" stroke="currentColor"/></svg>'
const rocket =
  '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke-width=\'1.5\' stroke-linecap=\'round\' stroke-linejoin=\'round\' data-slot=\'icon-ui-rocket\' class=\'icon-ui\' aria-hidden=\'true\' focusable=\'false\'><path opacity=".2" d="M12.77 8.49a2 2 0 1 0 2.83 2.82 2 2 0 0 0-2.83-2.82" fill="currentColor"/><path opacity=".2" d="m8.52 3.9 1.76.41a1 1 0 0 1 .48 1.68l-5 5a1 1 0 0 1-1.39.04L2.48 9.3a1 1 0 0 1 .1-1.55l5.13-3.7a1 1 0 0 1 .8-.16" fill="currentColor"/><path opacity=".2" d="m20.1 15.48-.38-1.7a1 1 0 0 0-1.68-.48l-5 5a1 1 0 0 0-.03 1.37l1.66 1.82a1 1 0 0 0 1.55-.08l3.71-5.13a1 1 0 0 0 .17-.8" fill="currentColor"/><path d="M15.52 3.33c3.55-1.32 5.32-1.99 6.23-1.08s.25 2.69-1.08 6.23l-.43 1.16c-.23.6-.34.9-.52 1.18s-.4.5-.86.96l-5.2 5.2c-1.33 1.33-2 2-2.82 2-.83 0-1.5-.67-2.83-2l-.98-.99c-1.33-1.33-2-2-2-2.82 0-.83.67-1.5 2-2.83l5.2-5.2c.46-.46.68-.69.96-.86s.57-.29 1.18-.51z" stroke="currentColor"/><path d="m12 5.26-.56-.23c-1.52-.62-2.28-.92-3.06-.83s-1.44.59-2.76 1.56l-2.2 1.62c-1.08.8-1.61 1.2-1.6 1.72.03.53.6.88 1.72 1.6l1.86 1.15" stroke="currentColor"/><path d="m18.8 12.07.22.55c.61 1.52.92 2.28.82 3.05-.1.78-.59 1.44-1.56 2.75l-1.63 2.21c-.8 1.08-1.19 1.61-1.72 1.6-.53-.03-.88-.6-1.59-1.73l-1.24-2" stroke="currentColor"/><path d="M12.77 8.49a2 2 0 0 0 0 2.82 2 2 0 1 0 0-2.82" stroke="currentColor"/><path d="m2.19 21.9 3.31-3.32" stroke="currentColor"/><path d="m6.44 21.96 1.39-1.39" stroke="currentColor"/><path d="m2.1 17.9 1.4-1.4" stroke="currentColor"/></svg>'
const heart =
  '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke-width=\'1.5\' stroke-linecap=\'round\' stroke-linejoin=\'round\' data-slot=\'icon-ui-heart\' class=\'icon-ui\' aria-hidden=\'true\' focusable=\'false\'><path opacity=".2" d="M17.25 3.35c-1.8 0-3.27.9-4.23 1.8-.55.52-.82.78-1.02.78s-.47-.26-1.02-.78a6.3 6.3 0 0 0-4.23-1.8C3.4 3.35.88 7.17 1.96 11.2c.98 3.67 6.36 6.72 9.25 9.4.4.38.6.57.79.57s.4-.19.8-.56c2.88-2.69 8.26-5.74 9.24-9.41 1.08-4.04-1.44-7.86-4.79-7.86" fill="currentColor"/><path d="M17.25 3.35c-1.8 0-3.27.9-4.23 1.8h0c-.55.52-.82.78-1.02.78s-.47-.26-1.02-.78a6.3 6.3 0 0 0-4.23-1.8C3.4 3.35.88 7.17 1.96 11.2c.98 3.67 6.36 6.72 9.25 9.4.4.38.6.57.79.57s.4-.19.8-.56c2.88-2.69 8.26-5.74 9.24-9.41 1.08-4.04-1.44-7.86-4.79-7.86" stroke="currentColor"/></svg>'
const check =
  '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke-width=\'1.5\' stroke-linecap=\'round\' stroke-linejoin=\'round\' data-slot=\'icon-ui-check\' class=\'icon-ui\' aria-hidden=\'true\' focusable=\'false\'><path d="m3.75 12.95 2.2 2.7c1.44 1.75 2.15 2.63 3.1 2.63s1.67-.88 3.1-2.65l8.1-10" stroke="currentColor"/></svg>'
const alarm =
  '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke-width=\'1.5\' stroke-linecap=\'round\' stroke-linejoin=\'round\' data-slot=\'icon-ui-alarm\' class=\'icon-ui\' aria-hidden=\'true\' focusable=\'false\'><circle opacity=".2" cx="12" cy="12.64" r="9.76" fill="currentColor"/><circle cx="12" cy="12.64" r="9.76" stroke="currentColor"/><path d="M22.6 5.16 18.91 1.5" stroke="currentColor"/><path d="M1.41 5.16 5.07 1.5" stroke="currentColor"/><path d="m2.17 21.59 2.4-2.4" stroke="currentColor"/><path d="m21.77 21.53-2.34-2.34" stroke="currentColor"/><path d="m15.84 16.24-2.7-1.8c-.87-.59-1.3-.88-1.54-1.32s-.24-.96-.24-2.01V7.22" stroke="currentColor"/></svg>'
const activity =
  '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke-width=\'1.5\' stroke-linecap=\'round\' stroke-linejoin=\'round\' data-slot=\'icon-ui-activity\' class=\'icon-ui\' aria-hidden=\'true\' focusable=\'false\'><path d="M1.8 12.05h1.6c.66 0 1 0 1.26-.18.25-.18.37-.5.6-1.13L6.93 6.3c.98-2.64 1.47-3.96 2.22-3.9s1.04 1.43 1.61 4.18l2.3 10.95c.55 2.63.82 3.94 1.56 4s1.24-1.17 2.25-3.66l1.84-4.56c.24-.6.37-.91.62-1.08s.58-.17 1.23-.17h1.75" stroke="currentColor"/></svg>'

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
