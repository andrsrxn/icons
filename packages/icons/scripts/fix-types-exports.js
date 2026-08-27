/**
 * Converts bundled type exports:
 *
 *   interface Foo {}
 *   type Bar = ...
 *   export { Foo, Bar }
 *
 * into:
 *
 *   export interface Foo {}
 *   export type Bar = ...
 *
 * Only runs on dist/ui/types.d.ts and dist/flags/types.d.ts.
 */
/** biome-ignore-all lint/performance/useTopLevelRegex: not necessary */

/* eslint-disable no-console */

import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'

const FILES = [path.resolve('./dist/ui/types.d.ts'), path.resolve('./dist/flags/types.d.ts')]

function transformTypes(content) {
  const exportMatch = content.match(/export\s*\{\s*([^}]+)\s*\};?/u)

  if (!exportMatch) {
    return content
  }

  const exportedNames = exportMatch[1]
    .split(',')
    .map(name => name.trim())
    .filter(Boolean)

  let result = content

  for (const name of exportedNames) {
    result = result.replace(
      new RegExp(`(^|\\n)(\\s*)interface\\s+${name}\\b`, 'u'),
      `$1$2export interface ${name}`
    )

    result = result.replace(
      new RegExp(`(^|\\n)(\\s*)type\\s+${name}\\b`, 'u'),
      `$1$2export type ${name}`
    )
  }

  result = result.replace(/\n?export\s*\{\s*[^}]+\s*\};?\s*$/u, '\n')

  return result
}

for (const file of FILES) {
  if (!fs.existsSync(file)) {
    continue
  }

  const source = fs.readFileSync(file, 'utf8')
  const transformed = transformTypes(source)

  if (source !== transformed) {
    fs.writeFileSync(file, transformed, 'utf8')
    console.log(`Fixed exports: ${path.relative(process.cwd(), file)}`)
  }
}
