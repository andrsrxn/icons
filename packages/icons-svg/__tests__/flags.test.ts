/** biome-ignore-all lint/style/useNamedCaptureGroup: unnecessary */
import { beforeEach, describe, expect, it } from 'vitest'

const us =
  '<svg xmlns="http://www.w3.org/2000/svg" width="21" height="15" fill="none" viewBox="0 0 21 15" data-slot=\'icon-flag-us\' class=\'icon-flag\' role=\'img\' aria-label=\'US\' focusable=\'false\'><defs><linearGradient id="us-b" x1="10.5" x2="10.5" y1="0" y2="15" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="us-c" x1="10.5" x2="10.5" y1="0" y2="15" gradientUnits="userSpaceOnUse"><stop stop-color="#d02f44"/><stop offset="1" stop-color="#b12537"/></linearGradient><linearGradient id="us-d" x1="4.5" x2="4.5" y1="0" y2="7" gradientUnits="userSpaceOnUse"><stop stop-color="#46467f"/><stop offset="1" stop-color="#3c3c6d"/></linearGradient><linearGradient id="us-e" x1="4.5" x2="4.5" y1="1" y2="6" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><clipPath id="us-a"><path fill="#fff" d="M0 0h21v15H0z"/></clipPath></defs><g clip-path="url(#us-a)"><path fill="url(#us-b)" d="M21 0H0v15h21z"/><path fill="url(#us-c)" fill-rule="evenodd" d="M0 0h21v1H0zm0 2h21v1H0zm0 2h21v1H0zm0 2h21v1H0zm0 2h21v1H0zm0 2h21v1H0zm0 2h21v1H0zm0 2h21v1H0z" clip-rule="evenodd"/><path fill="url(#us-d)" d="M9 0H0v7h9z"/><path fill="url(#us-e)" fill-rule="evenodd" d="M1.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m-5 1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m1 1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m-2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m-2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m-2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m1 1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m1 1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m-2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m-2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m-2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1" clip-rule="evenodd"/></g></svg>'
const mx =
  '<svg xmlns="http://www.w3.org/2000/svg" width="21" height="15" fill="none" viewBox="0 0 21 15" data-slot=\'icon-flag-mx\' class=\'icon-flag\' role=\'img\' aria-label=\'MX\' focusable=\'false\'><defs><linearGradient id="mx-b" x1="10.5" x2="10.5" y1="0" y2="15" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="mx-c" x1="15.5" x2="15.5" y1="0" y2="15" gradientUnits="userSpaceOnUse"><stop stop-color="#e3283e"/><stop offset="1" stop-color="#cc162c"/></linearGradient><linearGradient id="mx-d" x1="3.5" x2="3.5" y1="0" y2="15" gradientUnits="userSpaceOnUse"><stop stop-color="#128a60"/><stop offset="1" stop-color="#0b6848"/></linearGradient><linearGradient id="mx-e" x1="10.5" x2="10.5" y1="0" y2="15" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><clipPath id="mx-a"><path fill="#fff" d="M0 0h21v15H0z"/></clipPath></defs><g clip-path="url(#mx-a)"><path fill="url(#mx-b)" d="M21 0H0v15h21z"/><path fill="url(#mx-c)" d="M21 0H10v15h11z"/><path fill="url(#mx-d)" d="M7 0H0v15h7z"/><path fill="url(#mx-e)" d="M14 0H7v15h7z"/><path fill="#8c9157" d="M8 7c0 .9.48 1.72 1.25 2.16a.5.5 0 0 0 .5-.86A1.5 1.5 0 0 1 9 7a.5.5 0 0 0-1 0m3.85 2.1A2.5 2.5 0 0 0 13 7a.5.5 0 0 0-1 0c0 .52-.26 1-.7 1.26a.5.5 0 0 0 .55.85"/><path fill="#c59262" d="M10.5 8c.55 0 1-.67 1-1.5s-.45-1.5-1-1.5-1 .67-1 1.5.45 1.5 1 1.5"/></g></svg>'
const jp =
  '<svg xmlns="http://www.w3.org/2000/svg" width="21" height="15" fill="none" viewBox="0 0 21 15" data-slot=\'icon-flag-jp\' class=\'icon-flag\' role=\'img\' aria-label=\'JP\' focusable=\'false\'><defs><linearGradient id="jp-b" x1="10.5" x2="10.5" y1="0" y2="15" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="jp-c" x1="10.5" x2="10.5" y1="3" y2="12" gradientUnits="userSpaceOnUse"><stop stop-color="#d81441"/><stop offset="1" stop-color="#bb0831"/></linearGradient><clipPath id="jp-a"><path fill="#fff" d="M0 0h21v15H0z"/></clipPath></defs><g clip-path="url(#jp-a)"><path fill="url(#jp-b)" d="M21 0H0v15h21z"/><path fill="url(#jp-c)" d="M10.5 12a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9"/></g></svg>'
const gb =
  '<svg xmlns="http://www.w3.org/2000/svg" width="21" height="15" fill="none" viewBox="0 0 21 15" data-slot=\'icon-flag-gb\' class=\'icon-flag\' role=\'img\' aria-label=\'GB\' focusable=\'false\'><defs><linearGradient id="gb-b" x1="10.5" x2="10.5" y1="0" y2="15" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="gb-c" x1="10.5" x2="10.5" y1="0" y2="15" gradientUnits="userSpaceOnUse"><stop stop-color="#0a17a7"/><stop offset="1" stop-color="#030e88"/></linearGradient><linearGradient id="gb-d" x1="10.5" x2="10.5" y1="-1.44" y2="16.44" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="gb-e" x1="10.5" x2="10.5" y1="0" y2="15" gradientUnits="userSpaceOnUse"><stop stop-color="#e6273e"/><stop offset="1" stop-color="#cf152b"/></linearGradient><clipPath id="gb-a"><path fill="#fff" d="M0 0h21v15H0z"/></clipPath></defs><g clip-path="url(#gb-a)"><path fill="url(#gb-b)" d="M21 0H0v15h21z"/><path fill="url(#gb-c)" d="M21 0H0v15h21z"/><path fill="url(#gb-d)" fill-rule="evenodd" d="M5 10H0V5h5L-2.08.22l1.12-1.66L8 4.61V-1h5v5.6l8.96-6.04L23.08.22 15.99 5h5v5h-5l7.09 4.78-1.12 1.66L13 10.39V16H8v-5.6l-8.96 6.04-1.12-1.66z" clip-rule="evenodd"/><path fill="#db1f35" d="m14.14 4.96 9.5-6.25a.25.25 0 1 0-.28-.42l-9.5 6.25a.25.25 0 1 0 .28.42m.73 5.52 8.51 5.74a.25.25 0 0 0 .28-.41l-8.51-5.74a.25.25 0 1 0-.28.41M6.14 4.53l-8.88-6a.25.25 0 0 0-.28.42l8.88 5.99a.25.25 0 0 0 .28-.41M6.83 10l-9.85 6.52a.25.25 0 1 0 .28.42l9.84-6.53a.25.25 0 1 0-.27-.41"/><path fill="url(#gb-e)" fill-rule="evenodd" d="M0 9h9v6h3V9h9V6h-9V0H9v6H0z" clip-rule="evenodd"/></g></svg>'

const de =
  '<svg xmlns="http://www.w3.org/2000/svg" width="21" height="15" fill="none" viewBox="0 0 21 15" data-slot=\'icon-flag-de\' class=\'icon-flag\' role=\'img\' aria-label=\'DE\' focusable=\'false\'><defs><linearGradient id="de-b" x1="10.5" x2="10.5" y1="0" y2="15" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="de-c" x1="10.5" x2="10.5" y1="0" y2="5" gradientUnits="userSpaceOnUse"><stop stop-color="#262626"/><stop offset="1" stop-color="#0d0d0d"/></linearGradient><linearGradient id="de-d" x1="10.5" x2="10.5" y1="5" y2="10" gradientUnits="userSpaceOnUse"><stop stop-color="#f01515"/><stop offset="1" stop-color="#de0000"/></linearGradient><linearGradient id="de-e" x1="10.5" x2="10.5" y1="10" y2="15" gradientUnits="userSpaceOnUse"><stop stop-color="#ffd521"/><stop offset="1" stop-color="#ffcf00"/></linearGradient><clipPath id="de-a"><path fill="#fff" d="M0 0h21v15H0z"/></clipPath></defs><g clip-path="url(#de-a)"><path fill="url(#de-b)" d="M21 0H0v15h21z"/><path fill="url(#de-c)" d="M21 0H0v5h21z"/><path fill="url(#de-d)" d="M21 5H0v5h21z"/><path fill="url(#de-e)" d="M21 10H0v5h21z"/></g></svg>'

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

      const refs = [...svg.outerHTML.matchAll(/url\(#([^)]+)\)/gu)].map(m => m[1])
      expect(refs.length).toBeGreaterThan(0)
      for (const ref of refs) {
        expect(ref).toMatch(prefixPattern)
      }
    })
  })
})
