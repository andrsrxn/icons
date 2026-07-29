/**
 * migrate-flag-icons.js
 *
 * Migrates all .tsx flag icon components in src/react/flags/:
 *
 * 1. Replaces the React SVGProps import with the custom flag icon types.
 * 2. Updates each component signature to use FlagIcon and FlagIconProps.
 *
 * Usage:
 *   node scripts/migrate-flag-icons.js
 */
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

  // 1. Replace the React SVG props import with the custom flag icon types

  content = content.replace(
    /import\s+type\s+\{\s*SVGProps\s*\}\s+from\s+['"]react['"]/u,
    "import type { FlagIcon, FlagIconProps } from '../types'"
  )

  // 2. Replace the component signature

  content = content.replace(
    /export const (FlagIcon[A-Za-z0-9]+) = \(\{ className, \.\.\.props \}: SVGProps<SVGSVGElement>\) =>/u,
    'export const $1: FlagIcon = ({ className, ...props }: FlagIconProps) =>'
  )

  // Write changes

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf-8')

    filesChanged++

    console.log(`Updated: ${file}`)
  }
}

// Summary

console.log('\nSummary:')
console.log(`   Files scanned:  ${files.length}`)
console.log(`   Files changed:  ${filesChanged}`)
