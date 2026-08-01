import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { IconFlagUS } from '../../src/react/flags/us'
import { IconFlagMX } from '../../src/react/flags/mx'
import { IconFlagGB } from '../../src/react/flags/gb'
import { IconFlagJP } from '../../src/react/flags/jp'
import { IconFlagDE } from '../../src/react/flags/de'

const flagIcons = [
  { name: 'IconFlagUS', Component: IconFlagUS, title: 'US' },
  { name: 'IconFlagMX', Component: IconFlagMX, title: 'MX' },
  { name: 'IconFlagGB', Component: IconFlagGB, title: 'GB' },
  { name: 'IconFlagJP', Component: IconFlagJP, title: 'JP' },
  { name: 'IconFlagDE', Component: IconFlagDE, title: 'DE' },
] as const

describe('Flag Icons', () => {
  describe.each(flagIcons)('$name', ({ Component, title }) => {
    it('renders an SVG element', () => {
      const { container } = render(<Component />)
      const svg = container.querySelector('svg')
      expect(svg).toBeDefined()
    })

    it('applies default width of 24 when no size is provided', () => {
      const { container } = render(<Component />)
      const svg = container.querySelector('svg') as SVGSVGElement
      expect(svg.getAttribute('width')).toBe('24')
    })

    it('uses the size prop for width (flags default width = size ?? 24)', () => {
      const { container } = render(<Component size={40} />)
      const svg = container.querySelector('svg') as SVGSVGElement
      expect(svg.getAttribute('width')).toBe('40')
      expect(svg.getAttribute('height')).toBe('40')
    })

    it('accepts a custom string size', () => {
      const { container } = render(<Component size='2rem' />)
      const svg = container.querySelector('svg') as SVGSVGElement
      expect(svg.getAttribute('width')).toBe('2rem')
      expect(svg.getAttribute('height')).toBe('2rem')
    })

    it('includes the "ui-icon-flag" className', () => {
      const { container } = render(<Component />)
      const svg = container.querySelector('svg') as SVGSVGElement
      expect(svg.classList.contains('ui-icon-flag')).toBe(true)
    })

    it('merges custom classNames', () => {
      const { container } = render(<Component className='my-flag' />)
      const svg = container.querySelector('svg') as SVGSVGElement
      expect(svg.classList.contains('ui-icon-flag')).toBe(true)
      expect(svg.classList.contains('my-flag')).toBe(true)
    })

    it('has role="img"', () => {
      const { container } = render(<Component />)
      const svg = container.querySelector('svg') as SVGSVGElement
      expect(svg.getAttribute('role')).toBe('img')
    })

    it(`has a <title> element with "${title}"`, () => {
      const { container } = render(<Component />)
      const titleEl = container.querySelector('svg title')
      expect(titleEl).toBeDefined()
      expect(titleEl?.textContent).toBe(title)
    })

    it('forwards additional SVG props', () => {
      const { container } = render(
        <Component data-testid='flag-icon' style={{ border: '1px solid red' }} />
      )
      const svg = container.querySelector('svg') as SVGSVGElement
      expect(svg.getAttribute('data-testid')).toBe('flag-icon')
      expect(svg.style.border).toBe('1px solid red')
    })
  })
})
