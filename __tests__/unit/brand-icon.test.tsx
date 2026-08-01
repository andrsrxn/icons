import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { IconBrandGitHub } from '../../src/react/brands/github'
import { IconBrandReact } from '../../src/react/brands/react'
import { IconBrandVercel } from '../../src/react/brands/vercel'
import { IconBrandTypeScript } from '../../src/react/brands/typescript'
import { IconBrandFigma } from '../../src/react/brands/figma'

const brandIcons = [
  { name: 'IconBrandGitHub', Component: IconBrandGitHub, label: 'GitHub' },
  { name: 'IconBrandReact', Component: IconBrandReact, label: 'React' },
  { name: 'IconBrandVercel', Component: IconBrandVercel, label: 'Vercel' },
  { name: 'IconBrandTypeScript', Component: IconBrandTypeScript, label: 'TypeScript' },
  { name: 'IconBrandFigma', Component: IconBrandFigma, label: 'Figma' },
] as const

describe('Brand Icons', () => {
  describe.each(brandIcons)('$name', ({ Component, label }) => {
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
      const { container } = render(<Component size={48} />)
      const svg = container.querySelector('svg') as SVGSVGElement
      expect(svg.getAttribute('width')).toBe('48')
      expect(svg.getAttribute('height')).toBe('48')
    })

    it('accepts a custom string size', () => {
      const { container } = render(<Component size='3em' />)
      const svg = container.querySelector('svg') as SVGSVGElement
      expect(svg.getAttribute('width')).toBe('3em')
      expect(svg.getAttribute('height')).toBe('3em')
    })

    it('includes the "ui-icon-brand" className', () => {
      const { container } = render(<Component />)
      const svg = container.querySelector('svg') as SVGSVGElement
      expect(svg.classList.contains('ui-icon-brand')).toBe(true)
    })

    it('merges custom classNames', () => {
      const { container } = render(<Component className='my-brand' />)
      const svg = container.querySelector('svg') as SVGSVGElement
      expect(svg.classList.contains('ui-icon-brand')).toBe(true)
      expect(svg.classList.contains('my-brand')).toBe(true)
    })

    it(`has aria-label="${label}"`, () => {
      const { container } = render(<Component />)
      const svg = container.querySelector('svg') as SVGSVGElement
      expect(svg.getAttribute('aria-label')).toBe(label)
    })

    it('has role="img"', () => {
      const { container } = render(<Component />)
      const svg = container.querySelector('svg') as SVGSVGElement
      expect(svg.getAttribute('role')).toBe('img')
    })

    it('forwards additional SVG props', () => {
      const { container } = render(<Component data-testid='brand-icon' style={{ opacity: 0.5 }} />)
      const svg = container.querySelector('svg') as SVGSVGElement
      expect(svg.getAttribute('data-testid')).toBe('brand-icon')
      expect(svg.style.opacity).toBe('0.5')
    })
  })
})
