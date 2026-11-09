import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { IconFlagDE } from '../src/flags/de'
import { IconFlagGB } from '../src/flags/gb'
import { IconFlagJP } from '../src/flags/jp'
import { IconFlagMX } from '../src/flags/mx'
import { IconFlagUS } from '../src/flags/us'

const flagIcons = [
  { name: 'IconFlagUS', Component: IconFlagUS, code: 'us', label: 'US' },
  { name: 'IconFlagMX', Component: IconFlagMX, code: 'mx', label: 'MX' },
  { name: 'IconFlagGB', Component: IconFlagGB, code: 'gb', label: 'GB' },
  { name: 'IconFlagJP', Component: IconFlagJP, code: 'jp', label: 'JP' },
  { name: 'IconFlagDE', Component: IconFlagDE, code: 'de', label: 'DE' },
] as const

describe('Flag Icons', () => {
  describe.each(flagIcons)('$name', ({ Component, code, label }) => {
    it('renders an svg element', () => {
      const { container } = render(<Component />)
      expect(container.querySelector('svg')).toBeInTheDocument()
    })

    it('forwards arbitrary svg props', () => {
      const { container } = render(
        <Component data-testid='flag-icon' style={{ border: '1px solid red' }} />
      )
      const svg = container.querySelector('svg') as SVGSVGElement
      expect(svg.getAttribute('data-testid')).toBe('flag-icon')
      expect(svg.style.border).toBe('1px solid red')
    })

    it('includes the "icon-flag" className', () => {
      const { container } = render(<Component />)
      const svg = container.querySelector('svg') as SVGSVGElement
      expect(svg.classList.contains('icon-flag')).toBe(true)
    })

    it('merges a custom className alongside "icon-flag"', () => {
      const { container } = render(<Component className='my-flag' />)
      const svg = container.querySelector('svg') as SVGSVGElement
      expect(svg.classList.contains('icon-flag')).toBe(true)
      expect(svg.classList.contains('my-flag')).toBe(true)
    })

    it(`has data-slot="icon-flag-${code}"`, () => {
      const { container } = render(<Component />)
      const svg = container.querySelector('svg') as SVGSVGElement
      expect(svg.getAttribute('data-slot')).toBe(`icon-flag-${code}`)
    })

    it('has no built-in inline style', () => {
      const { container } = render(<Component />)
      const svg = container.querySelector('svg') as SVGSVGElement
      expect(svg.hasAttribute('style')).toBe(false)
    })

    it('every internal id and url() reference is prefixed with the icon code', () => {
      const { container } = render(<Component />)
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

    // --- sizing: width defaults independently of height, preserving the
    // source viewBox's 3:2 ratio unless `size` forces both equally.

    it('defaults to width 24 with no explicit height attribute', () => {
      const { container } = render(<Component />)
      const svg = container.querySelector('svg') as SVGSVGElement
      expect(svg.getAttribute('width')).toBe('24')
      expect(svg.hasAttribute('height')).toBe(false)
    })

    it('sets width and height equally when size is a number', () => {
      const { container } = render(<Component size={40} />)
      const svg = container.querySelector('svg') as SVGSVGElement
      expect(svg.getAttribute('width')).toBe('40')
      expect(svg.getAttribute('height')).toBe('40')
    })

    it('accepts a string size', () => {
      const { container } = render(<Component size='2rem' />)
      const svg = container.querySelector('svg') as SVGSVGElement
      expect(svg.getAttribute('width')).toBe('2rem')
      expect(svg.getAttribute('height')).toBe('2rem')
    })

    it('width and height can be set independently, overriding size', () => {
      const { container } = render(<Component width={60} height={30} />)
      const svg = container.querySelector('svg') as SVGSVGElement
      expect(svg.getAttribute('width')).toBe('60')
      expect(svg.getAttribute('height')).toBe('30')
    })

    // --- cover / preserveAspectRatio

    it('has no preserveAspectRatio attribute by default', () => {
      const { container } = render(<Component />)
      const svg = container.querySelector('svg') as SVGSVGElement
      expect(svg.hasAttribute('preserveAspectRatio')).toBe(false)
    })

    it('forwards a custom preserveAspectRatio when cover is not set', () => {
      const { container } = render(<Component preserveAspectRatio='xMinYMin meet' />)
      const svg = container.querySelector('svg') as SVGSVGElement
      expect(svg.getAttribute('preserveAspectRatio')).toBe('xMinYMin meet')
    })

    it('cover forces "xMidYMid slice", overriding any passed preserveAspectRatio', () => {
      const { container } = render(<Component cover preserveAspectRatio='xMinYMin meet' />)
      const svg = container.querySelector('svg') as SVGSVGElement
      expect(svg.getAttribute('preserveAspectRatio')).toBe('xMidYMid slice')
    })

    // --- isLabelled / isHidden / isAccessible

    it(`is accessible by default, labelled "${label}"`, () => {
      const { container } = render(<Component />)
      const svg = container.querySelector('svg') as SVGSVGElement
      expect(svg.getAttribute('role')).toBe('img')
      expect(svg.getAttribute('aria-hidden')).toBe('false')
      expect(svg.getAttribute('aria-label')).toBe(label)
    })

    it('accepts a custom aria-label, overriding the default code', () => {
      const { container } = render(<Component aria-label='United States' />)
      const svg = container.querySelector('svg') as SVGSVGElement
      expect(svg.getAttribute('role')).toBe('img')
      expect(svg.getAttribute('aria-label')).toBe('United States')
    })

    it('becomes inaccessible when aria-label is empty or whitespace-only', () => {
      const { container } = render(<Component aria-label='   ' />)
      const svg = container.querySelector('svg') as SVGSVGElement
      expect(svg.hasAttribute('role')).toBe(false)
      expect(svg.hasAttribute('aria-label')).toBe(false)
      expect(svg.getAttribute('aria-hidden')).toBe('true')
    })

    it('becomes inaccessible when aria-hidden is explicitly true, even with a label', () => {
      const { container } = render(<Component aria-hidden />)
      const svg = container.querySelector('svg') as SVGSVGElement
      expect(svg.hasAttribute('role')).toBe(false)
      expect(svg.hasAttribute('aria-label')).toBe(false)
      expect(svg.getAttribute('aria-hidden')).toBe('true')
    })

    it('treats aria-hidden="true" as a string the same as the boolean', () => {
      const { container } = render(<Component aria-hidden='true' />)
      const svg = container.querySelector('svg') as SVGSVGElement
      expect(svg.getAttribute('aria-hidden')).toBe('true')
      expect(svg.hasAttribute('role')).toBe(false)
    })

    it('an explicit aria-hidden={false} stays accessible', () => {
      const { container } = render(<Component aria-hidden={false} />)
      const svg = container.querySelector('svg') as SVGSVGElement
      expect(svg.getAttribute('aria-hidden')).toBe('false')
      expect(svg.getAttribute('role')).toBe('img')
    })

    it('always renders a literal aria-hidden value, never omits it', () => {
      const { container } = render(<Component />)
      const svg = container.querySelector('svg') as SVGSVGElement
      expect(svg.hasAttribute('aria-hidden')).toBe(true)
    })
  })
})
