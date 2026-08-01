import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'

const pkg = JSON.parse(readFileSync(resolve(import.meta.dirname, '../../package.json'), 'utf-8'))

describe('package.json', () => {
  it('has main, module, and types fields', () => {
    expect(pkg.main).toBeDefined()
    expect(pkg.module).toBeDefined()
    expect(pkg.types).toBeDefined()
  })

  it('has the "exports" field', () => {
    expect(pkg.exports).toBeDefined()
    expect(typeof pkg.exports).toBe('object')
  })

  describe('exports map', () => {
    it('has a root export "."', () => {
      expect(pkg.exports['.']).toBeDefined()
      expect(pkg.exports['.'].types).toBeDefined()
      expect(pkg.exports['.'].import).toBeDefined()
      expect(pkg.exports['.'].require).toBeDefined()
    })

    it('has a "./brands" export', () => {
      expect(pkg.exports['./brands']).toBeDefined()
      expect(pkg.exports['./brands'].types).toBeDefined()
      expect(pkg.exports['./brands'].import).toBeDefined()
      expect(pkg.exports['./brands'].require).toBeDefined()
    })

    it('has a "./flags" export', () => {
      expect(pkg.exports['./flags']).toBeDefined()
      expect(pkg.exports['./flags'].types).toBeDefined()
      expect(pkg.exports['./flags'].import).toBeDefined()
      expect(pkg.exports['./flags'].require).toBeDefined()
    })

    it('has a "./styles.css" export', () => {
      expect(pkg.exports['./styles.css']).toBeDefined()
    })

    it('has a "./types" export for type-only consumers', () => {
      expect(pkg.exports['./types']).toBeDefined()
      expect(pkg.exports['./types'].types).toBeDefined()
    })

    it('has a "./brands/types" export for type-only consumers', () => {
      expect(pkg.exports['./brands/types']).toBeDefined()
      expect(pkg.exports['./brands/types'].types).toBeDefined()
    })

    it('has a "./flags/types" export for type-only consumers', () => {
      expect(pkg.exports['./flags/types']).toBeDefined()
      expect(pkg.exports['./flags/types'].types).toBeDefined()
    })

    it('has wildcard exports for tree-shaking individual icons', () => {
      expect(pkg.exports['./brands/*']).toBeDefined()
      expect(pkg.exports['./flags/*']).toBeDefined()
      expect(pkg.exports['./*']).toBeDefined()
    })
  })

  it('declares react and react-dom as peer dependencies', () => {
    expect(pkg.peerDependencies).toBeDefined()
    expect(pkg.peerDependencies.react).toBeDefined()
    expect(pkg.peerDependencies['react-dom']).toBeDefined()
  })

  it('specifies the correct files for publishing', () => {
    expect(pkg.files).toContain('dist')
    expect(pkg.files).toContain('LICENSE')
    expect(pkg.files).toContain('README.md')
    expect(pkg.files).toContain('CHANGELOG.md')
  })

  it('marks only CSS files as side effects', () => {
    expect(pkg.sideEffects).toEqual(['dist/**/*.css'])
  })
})
