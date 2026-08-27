/** biome-ignore-all lint/style/noMagicNumbers: not necessary */
/** biome-ignore-all lint/performance/noDynamicNamespaceImportAccess: not necessary */

import fs from 'node:fs'
import path from 'node:path'
import { describe, expect, it } from 'vitest'
import { IconFlagGB } from '../../src/react/flags/gb'
import { IconFlagMX } from '../../src/react/flags/mx'
import { IconFlagUS } from '../../src/react/flags/us'
import { IconActivity } from '../../src/react/ui/activity'
import { IconSearch } from '../../src/react/ui/search'
import { IconSettings } from '../../src/react/ui/settings'

function getIconFiles(directory: string) {
  return fs
    .readdirSync(directory)
    .filter(file => file.endsWith('.tsx'))
    .map(file => file.replace(/\.tsx$/u, ''))
}

function getBarrelExports(indexPath: string) {
  const content = fs.readFileSync(indexPath, 'utf8')

  return [...content.matchAll(/export\s+\*\s+from\s+['"]\.\/([^'"]+)['"]/gu)].map(match => match[1])
}

function testBarrelExports(directory: string) {
  const indexPath = path.join(directory, 'index.ts')

  const files = getIconFiles(directory)
  const exports = getBarrelExports(indexPath).filter(name => name !== 'types')

  return {
    files,
    exports,
  }
}

describe('Package Exports', () => {
  it('exports representative UI icons', () => {
    expect(IconActivity).toBeTypeOf('function')
    expect(IconSearch).toBeTypeOf('function')
    expect(IconSettings).toBeTypeOf('function')
  })

  it('exports representative flag icons', () => {
    expect(IconFlagUS).toBeTypeOf('function')
    expect(IconFlagGB).toBeTypeOf('function')
    expect(IconFlagMX).toBeTypeOf('function')
  })

  it('exports every UI icon from the barrel', () => {
    const { files, exports } = testBarrelExports(path.resolve('src/react/ui'))
    expect(new Set(exports)).toEqual(new Set(files))
  })

  it('exports every Flag icon from the barrel', () => {
    const { files, exports } = testBarrelExports(path.resolve('src/react/flags'))
    expect(new Set(exports)).toEqual(new Set(files))
  })
})
