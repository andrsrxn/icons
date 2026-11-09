/** biome-ignore-all lint/suspicious/noConditionalExpect: only check if it has it */
import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { IconActivity } from '../src/ui/activity'
import { IconAlarm } from '../src/ui/alarm'
import { IconCheck } from '../src/ui/check'
import { IconHeart } from '../src/ui/heart'
import { IconSearch } from '../src/ui/search'

const uiIcons = [
  { name: 'IconActivity', Component: IconActivity, slot: 'activity' },
  { name: 'IconSearch', Component: IconSearch, slot: 'search' },
  { name: 'IconHeart', Component: IconHeart, slot: 'heart' },
  { name: 'IconAlarm', Component: IconAlarm, slot: 'alarm' },
  { name: 'IconCheck', Component: IconCheck, slot: 'check' },
] as const

describe('UI Icons', () => {
  describe.each(uiIcons)('$name', ({ Component, slot }) => {
    it('renders an svg element', () => {
      const { container } = render(<Component />)
      expect(container.querySelector('svg')).toBeInTheDocument()
    })

    it('forwards arbitrary svg props', () => {
      const { container } = render(<Component data-testid='test-icon' style={{ color: 'red' }} />)
      const svg = container.querySelector('svg') as SVGSVGElement
      expect(svg.getAttribute('data-testid')).toBe('test-icon')
      expect(svg.style.color).toBe('red')
    })

    it('defaults to size 24', () => {
      const { container } = render(<Component />)
      const svg = container.querySelector('svg') as SVGSVGElement
      expect(svg.getAttribute('width')).toBe('24')
      expect(svg.getAttribute('height')).toBe('24')
    })

    it('accepts a numeric size', () => {
      const { container } = render(<Component size={32} />)
      const svg = container.querySelector('svg') as SVGSVGElement
      expect(svg.getAttribute('width')).toBe('32')
      expect(svg.getAttribute('height')).toBe('32')
    })

    it('accepts a string size', () => {
      const { container } = render(<Component size='2rem' />)
      const svg = container.querySelector('svg') as SVGSVGElement
      expect(svg.getAttribute('width')).toBe('2rem')
      expect(svg.getAttribute('height')).toBe('2rem')
    })

    it('defaults strokeWidth to 1.5 on the root only', () => {
      const { container } = render(<Component />)
      const svg = container.querySelector('svg') as SVGSVGElement
      expect(svg.getAttribute('stroke-width')).toBe('1.5')
      for (const el of container.querySelectorAll('svg *')) {
        expect(el.hasAttribute('stroke-width')).toBe(false)
      }
    })

    it('applies a custom numeric strokeWidth to the root only', () => {
      const { container } = render(<Component strokeWidth={3} />)
      const svg = container.querySelector('svg') as SVGSVGElement
      expect(svg.getAttribute('stroke-width')).toBe('3')
      for (const el of container.querySelectorAll('svg *')) {
        expect(el.hasAttribute('stroke-width')).toBe(false)
      }
    })

    it('accepts a custom string strokeWidth', () => {
      const { container } = render(<Component strokeWidth='2.5' />)
      const svg = container.querySelector('svg') as SVGSVGElement
      expect(svg.getAttribute('stroke-width')).toBe('2.5')
    })

    it('color is controlled via CSS color, not a dedicated prop', () => {
      const { container } = render(<Component style={{ color: 'rebeccapurple' }} />)
      const svg = container.querySelector('svg') as SVGSVGElement
      expect(svg.style.color).toBe('rebeccapurple')
    })

    it('sets round strokeLinecap/strokeLinejoin when the icon uses a stroke', () => {
      const { container } = render(<Component />)
      const svg = container.querySelector('svg') as SVGSVGElement
      const usesStroke = container.querySelector('svg [stroke]') !== null
      if (usesStroke) {
        expect(svg.getAttribute('stroke-linecap')).toBe('round')
        expect(svg.getAttribute('stroke-linejoin')).toBe('round')
      }
    })

    it('includes the "icon-ui" className', () => {
      const { container } = render(<Component />)
      const svg = container.querySelector('svg') as SVGSVGElement
      expect(svg.classList.contains('icon-ui')).toBe(true)
    })

    it('merges a custom className alongside "icon-ui"', () => {
      const { container } = render(<Component className='custom-class' />)
      const svg = container.querySelector('svg') as SVGSVGElement
      expect(svg.classList.contains('icon-ui')).toBe(true)
      expect(svg.classList.contains('custom-class')).toBe(true)
    })

    it(`has data-slot="icon-ui-${slot}"`, () => {
      const { container } = render(<Component />)
      const svg = container.querySelector('svg') as SVGSVGElement
      expect(svg.getAttribute('data-slot')).toBe(`icon-ui-${slot}`)
    })

    it('is hidden from assistive tech by default (aria-hidden omitted elsewhere)', () => {
      const { container } = render(<Component />)
      const svg = container.querySelector('svg') as SVGSVGElement
      expect(svg.getAttribute('aria-hidden')).toBe('true')
      expect(svg.hasAttribute('role')).toBe(false)
      expect(svg.hasAttribute('aria-label')).toBe(false)
    })

    it('becomes accessible when given an aria-label, dropping aria-hidden entirely', () => {
      const { container } = render(<Component aria-label='Notifications' />)
      const svg = container.querySelector('svg') as SVGSVGElement
      expect(svg.getAttribute('role')).toBe('img')
      expect(svg.hasAttribute('aria-hidden')).toBe(false)
      expect(svg.getAttribute('aria-label')).toBe('Notifications')
    })

    it('is not focusable', () => {
      const { container } = render(<Component />)
      const svg = container.querySelector('svg') as SVGSVGElement
      expect(svg.getAttribute('focusable')).toBe('false')
    })

    it('every stroke or fill resolves to currentColor', () => {
      const { container } = render(<Component />)
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
      const { container } = render(<Component />)
      const duotoneShapes = container.querySelectorAll('svg [opacity=".2"]')
      for (const shape of duotoneShapes) {
        expect(shape.hasAttribute('fill')).toBe(true)
        expect(shape.hasAttribute('stroke')).toBe(false)
      }
    })
  })
})
