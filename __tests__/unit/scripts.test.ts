import { describe, it, expect } from 'vitest'
import {
  toPascalCase,
  svgAttrsToJsx,
  normalizeSvg,
  generateComponent,
} from '../../scripts/generate-icons.js'
import {
  extractSvg,
  injectWhiteBackground,
  svgToBase64,
  createPreviewJSDoc,
} from '../../scripts/inject-dts-previews.js'
import { generateExportLines } from '../../scripts/generate-icons-index.js'

// Tests for generate-icons.js
describe('Generator: toPascalCase', () => {
  it('converts file names correctly', () => {
    expect(toPascalCase('arrow-right')).toBe('ArrowRight')
    expect(toPascalCase('check')).toBe('Check')
    expect(toPascalCase('volume-2-max')).toBe('Volume2Max')
  })
})

describe('Generator: svgAttrsToJsx', () => {
  it('converts kebab-case attributes to camelCase', () => {
    const raw = '<svg stroke-width="2" stroke-linecap="round">'
    const result = svgAttrsToJsx(raw)

    expect(result).toContain('strokeWidth=')
    expect(result).toContain('strokeLinecap=')
  })

  it('ignores JSX exceptions (viewBox, xmlns)', () => {
    const raw = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">'
    const result = svgAttrsToJsx(raw)

    expect(result).toContain('viewBox="0 0 24 24"')
    expect(result).toContain('xmlns=')
  })
})

describe('Generator: normalizeSvg', () => {
  it('cleans original width/height and injects React props', () => {
    // Simulate a malicious raw SVG (with hardcoded width and invalid attributes)
    const rawSvg = '<svg width="50" height="auto" stroke-width="2" fill="none"><path/></svg>'

    const result = normalizeSvg(rawSvg, 'icon-test')

    // 1. Must have removed the original width and height
    expect(result).not.toContain('width="50"')
    expect(result).not.toContain('height="auto"')

    // 2. Must have injected the dynamic props
    expect(result).toContain('width={size}')
    expect(result).toContain('height={size}')
    expect(result).toContain("data-slot='icon-test'")
    expect(result).toContain('{...props}')

    // 3. Must have camelCased the internal attributes
    expect(result).toContain('strokeWidth=')
  })
})

describe('Generator: generateComponent', () => {
  it('assembles the final TSX file correctly', () => {
    const fakeFile = 'alert-triangle.svg'
    const fakeContent = '<svg><path d="M12 2"/></svg>'

    const result = generateComponent(fakeFile, fakeContent)

    expect(result).toContain("import type { Icon } from './types'")
    expect(result).toContain('export const IconAlertTriangle: Icon =')
    expect(result).toContain('<svg')
  })

  it('returns null if the file does not contain an <svg> tag', () => {
    const result = generateComponent('bad-file.svg', '<div>Not an icon</div>')
    expect(result).toBeNull()
  })
})

// Tests for inject-dts-previews.js
describe('DTS Injector: extractSvg', () => {
  it('extracts the exact SVG node from a raw XML string', () => {
    const rawContent =
      '<?xml version="1.0"?><svg viewBox="0 0 24 24"><path d="M0 0h24v24H0z"/></svg>'
    const result = extractSvg(rawContent)

    expect(result).toBe('<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0z"/></svg>')
  })

  it('returns null if no SVG tag is found in the source', () => {
    const invalidContent = '<div class="icon">Not an SVG</div>'
    const result = extractSvg(invalidContent)

    expect(result).toBeNull()
  })
})

describe('DTS Injector: injectWhiteBackground', () => {
  it('injects a white rect as the first child of the SVG element', () => {
    const baseSvg = '<svg viewBox="0 0 24 24" fill="none"><path d="M12 2"/></svg>'
    const result = injectWhiteBackground(baseSvg)

    // 1. Must contain the injected rectangle
    expect(result).toContain("<rect width='100%' height='100%' fill='white'/>")

    // 2. Must place it immediately after the opening <svg> tag
    expect(result).toContain('<svg viewBox="0 0 24 24" fill="none"><rect')
  })
})

describe('DTS Injector: svgToBase64', () => {
  it('converts an SVG string to a valid Base64 encoding', () => {
    const svg = '<svg></svg>'
    const result = svgToBase64(svg)

    // Buffer.from('<svg></svg>').toString('base64') === 'PHN2Zz48L3N2Zz4='
    expect(result).toBe('PHN2Zz48L3N2Zz4=')
  })
})

describe('DTS Injector: createPreviewJSDoc', () => {
  it('wraps the Base64 string in a markdown image JSDoc block', () => {
    const base64 = 'PHN2Zz48L3N2Zz4='
    const result = createPreviewJSDoc(base64)

    expect(result).toContain('/**')
    expect(result).toContain(`* @preview ![img](data:image/svg+xml;base64,${base64})`)
    expect(result).toContain('*/')
  })
})

// Tests for generate-index-icons.js

describe('Index Generator: generateExportLines', () => {
  it('generates export statements and strips the .tsx extension', () => {
    const rawFiles = ['activity.tsx', 'search.tsx', 'settings.tsx']
    const result = generateExportLines(rawFiles)

    expect(result).toEqual([
      "export * from './activity'",
      "export * from './search'",
      "export * from './settings'",
    ])
  })

  it('filters out the index.tsx file to prevent circular dependencies', () => {
    const rawFiles = ['activity.tsx', 'index.tsx', 'search.tsx']
    const result = generateExportLines(rawFiles)

    expect(result).not.toContain("export * from './index'")
    expect(result).toHaveLength(2)
  })

  it('ignores files that do not have a .tsx extension', () => {
    const rawFiles = ['activity.tsx', 'helper.ts', 'styles.css', 'search.tsx']
    const result = generateExportLines(rawFiles)

    expect(result).toEqual(["export * from './activity'", "export * from './search'"])
  })
})
