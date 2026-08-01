import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { IconActivity } from '../../src/react/ui/activity'
import { IconSearch } from '../../src/react/ui/search'
import { IconHeart } from '../../src/react/ui/heart'
import { IconAlarm } from '../../src/react/ui/alarm'
import { IconCheck } from '../../src/react/ui/check'

const uiIcons = [
  { name: 'IconActivity', Component: IconActivity, slot: 'activity' },
  { name: 'IconSearch', Component: IconSearch, slot: 'search' },
  { name: 'IconHeart', Component: IconHeart, slot: 'heart' },
  { name: 'IconAlarm', Component: IconAlarm, slot: 'alarm' },
  { name: 'IconCheck', Component: IconCheck, slot: 'check' },
] as const

describe('UI Icons', () => {
  describe.each(uiIcons)('$name', ({ Component, slot }) => {
    it('renders an SVG element', () => {
      const { container } = render(<Component />)
      const svg = container.querySelector('svg')
      expect(svg).toBeDefined()
    })

    it('applies default size of 24', () => {
      const { container } = render(<Component />)
      const svg = container.querySelector('svg') as SVGSVGElement
      expect(svg.getAttribute('width')).toBe('24')
      expect(svg.getAttribute('height')).toBe('24')
    })

    it('accepts a custom numeric size', () => {
      const { container } = render(<Component size={32} />)
      const svg = container.querySelector('svg') as SVGSVGElement
      expect(svg.getAttribute('width')).toBe('32')
      expect(svg.getAttribute('height')).toBe('32')
    })

    it('accepts a custom string size', () => {
      const { container } = render(<Component size='2rem' />)
      const svg = container.querySelector('svg') as SVGSVGElement
      expect(svg.getAttribute('width')).toBe('2rem')
      expect(svg.getAttribute('height')).toBe('2rem')
    })

    it('includes the "ui-icon" className', () => {
      const { container } = render(<Component />)
      const svg = container.querySelector('svg') as SVGSVGElement
      expect(svg.classList.contains('ui-icon')).toBe(true)
    })

    it('merges custom classNames', () => {
      const { container } = render(<Component className='custom-class' />)
      const svg = container.querySelector('svg') as SVGSVGElement
      expect(svg.classList.contains('ui-icon')).toBe(true)
      expect(svg.classList.contains('custom-class')).toBe(true)
    })

    it(`has data-slot="${slot}"`, () => {
      const { container } = render(<Component />)
      const svg = container.querySelector('svg') as SVGSVGElement
      expect(svg.getAttribute('data-slot')).toBe(slot)
    })

    it('is aria-hidden by default', () => {
      const { container } = render(<Component />)
      const svg = container.querySelector('svg') as SVGSVGElement
      expect(svg.getAttribute('aria-hidden')).toBe('true')
    })

    it('is not focusable', () => {
      const { container } = render(<Component />)
      const svg = container.querySelector('svg') as SVGSVGElement
      expect(svg.getAttribute('focusable')).toBe('false')
    })

    it('forwards additional SVG props', () => {
      const { container } = render(<Component data-testid='test-icon' style={{ color: 'red' }} />)
      const svg = container.querySelector('svg') as SVGSVGElement
      expect(svg.getAttribute('data-testid')).toBe('test-icon')
      expect(svg.style.color).toBe('red')
    })
  })
})
