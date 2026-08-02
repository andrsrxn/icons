/**
 * generate-icons-index.js
 *
 * Generates an index.ts file for each icon directory (ui, flags).
 * This allows all icons within a directory to be easily exported and imported.
 * It also exports the shared types in each generated index.
 *
 * Usage:
 *   node scripts/generate-icons-index.js
 */
/** biome-ignore-all lint/suspicious/noConsole: no */

import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'

// Config

const ICONS_DIR = path.resolve('./src/react/ui')
const FLAGS_DIR = path.resolve('./src/react/flags')

const DIRS = {
  flags: FLAGS_DIR,
  ui: ICONS_DIR,
}

const IN_DIRS = Object.values(DIRS)

// Helpers

export function generateExportLines(files) {
  return (
    files
      // 1. Filter for .tsx files and exclude the barrel file itself
      .filter(file => file.endsWith('.tsx') && file !== 'index.tsx')
      // 2. Sort alphabetically for a deterministic output
      .sort()
      // 3. Map to export statements
      .map(file => {
        const basename = path.basename(file, '.tsx')
        return `export * from './${basename}'`
      })
  )
}

// Main transform

function main() {
  for (const dir of IN_DIRS) {
    if (!fs.existsSync(dir)) {
      console.error(`Directory not found: ${dir}`)
      process.exit(1)
    }
  }

  let totalExports = 0
  let filesGenerated = 0

  for (const [prefix, dir] of Object.entries(DIRS)) {
    const files = fs.readdirSync(dir)
    const exports = generateExportLines(files)

    // exports.unshift("export type * from './types'")

    const outputFile = path.join(dir, 'index.ts')
    // biome-ignore lint/style/useTemplate: false positive
    fs.writeFileSync(outputFile, exports.join('\n') + '\n')
    console.log(` Updated: ${prefix}/index.ts`)

    totalExports += exports.length
    filesGenerated++
  }

  // Summary

  console.log('\n Summary:')
  console.log(`   Indexes generated: ${filesGenerated}`)
  console.log(`   Total exports:     ${totalExports}`)
}

// Testing purposes
if (process?.argv?.[1]?.endsWith('generate-icons.js')) {
  main()
}
