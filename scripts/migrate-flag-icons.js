/**
 * migrate-flag-icons.js
 *
 * Migrates all .tsx flag icon components in src/react/flags/:
 *
 * 1. Replaces the React SVGProps import with custom flag icon types.
 * 2. Updates component signature to support `size`, `width = size ?? 24`, and `height = size ?? 'auto'`.
 * 3. Binds ROOT <svg> width and height to `{width}` and `{height}` without touching internal shapes.
 *
 * Usage:
 *   node scripts/migrate-flag-icons.js
 */
/** biome-ignore-all lint/performance/useTopLevelRegex: not necessary */
/** biome-ignore-all lint/nursery/useNamedCaptureGroup: not necessary */
/** biome-ignore-all lint/suspicious/noConsole: not necessary */

import fs from 'node:fs'
import path from 'node:path'

// Config

const FLAGS_DIR = path.resolve(import.meta.dirname, '..', 'src', 'react', 'flags')

// Main transform

const files = fs
  .readdirSync(FLAGS_DIR)
  .filter(file => file.endsWith('.tsx'))
  .sort()

let filesChanged = 0

for (const file of files) {
  const filePath = path.join(FLAGS_DIR, file)

  const original = fs.readFileSync(filePath, 'utf-8')
  let content = original

  // 1. Normalizar Imports de tipos
  content = content.replace('../types', './types')
  content = content.replace(
    /import\s+type\s+\{\s*SVGProps\s*\}\s+from\s+['"]react['"]/gu,
    "import type { FlagIcon, FlagIconProps } from './types'"
  )

  // 2. Actualizar la firma (Corregida la captura de $2 para evitar '}' duplicada)
  content = content.replace(
    /export\s+const\s+(IconFlag\w+|FlagIcon\w+)(?::\s*FlagIcon)?\s*=\s*\(\{\s*className,[\s\S]*?(\.\.\.props)\s*\}\s*:\s*(?:SVGProps<SVGSVGElement>|FlagIconProps)\)\s*=>/gu,
    `export const $1: FlagIcon = ({\n  className,\n  size,\n  width = size ?? 24,\n  height = size ?? 'auto',\n  $2\n}: FlagIconProps) =>`
  )

  // 3. Reemplazar width y height SOLAMENTE en la etiqueta de apertura del <svg> raíz
  content = content.replace(/<svg\b([\s\S]*?)>/u, svgTagMatch => {
    return svgTagMatch
      .replace(/\bwidth=(?:'[^']+'|"[^"]+"|\{[^}]+\})/u, 'width={width}')
      .replace(/\bheight=(?:'[^']+'|"[^"]+"|\{[^}]+\})/u, 'height={height}')
  })

  // if (content !== original) {
  fs.writeFileSync(filePath, content, 'utf-8')
  filesChanged++
  console.log(`Updated: ${file}`)
  // }
}

// Summary

console.log('\nSummary:')
console.log(`   Files scanned:  ${files.length}`)
console.log(`   Files changed:  ${filesChanged}`)
