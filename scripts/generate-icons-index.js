/**
 * generate-icons-index.js
 *
 * Generates an index.ts file for each icon directory (ui, brands, flags).
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
const BRANDS_DIR = path.resolve('./src/react/brands')
const FLAGS_DIR = path.resolve('./src/react/flags')

const DIRS = {
  brands: BRANDS_DIR,
  flags: FLAGS_DIR,
  ui: ICONS_DIR,
}

const IN_DIRS = Object.values(DIRS)

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

    // Filter for .tsx files
    const iconFiles = files.filter(file => file.endsWith('.tsx') && file !== 'index.tsx').sort()

    const exports = iconFiles.map(file => {
      const basename = path.basename(file, '.tsx')

      return `export * from './${basename}'`
    })

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

main()
