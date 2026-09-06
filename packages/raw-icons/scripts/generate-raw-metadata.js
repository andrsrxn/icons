/**
 * Generates a placeholder .meta.json file next to every raw icon SVG that
 * doesn't already have one (ui, flags). Existing .meta.json files are
 * never overwritten - this is safe to re-run any time new icons are
 * added, it will only ever fill in the gaps.
 *
 * Usage:
 *   node scripts/generate-icon-metadata.js
 */
/** biome-ignore-all lint/performance/useTopLevelRegex: unnecessary */
/** biome-ignore-all lint/suspicious/noConsole: used for logging */

import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'

// Config

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const UI_DIR = path.resolve(__dirname, '../src/ui')
const FLAGS_DIR = path.resolve(__dirname, '../src/flags')

const DIRS = {
  flags: FLAGS_DIR,
  ui: UI_DIR,
}

const IN_DIRS = Object.values(DIRS)

// Helpers

export function buildPlaceholderMeta() {
  return {
    categories: [],
    tags: [],
  }
}

export function findSvgFiles(files) {
  return files.filter(file => file.endsWith('.svg')).sort()
}

// Main transform

function main() {
  for (const dir of IN_DIRS) {
    if (!fs.existsSync(dir)) {
      console.error(`Directory not found: ${dir}`)
      process.exit(1)
    }
  }

  let generatedCount = 0
  let skippedCount = 0

  for (const [prefix, dir] of Object.entries(DIRS)) {
    const files = fs.readdirSync(dir)
    const svgFiles = findSvgFiles(files)

    for (const file of svgFiles) {
      const iconName = path.basename(file, '.svg')
      const metaPath = path.join(dir, `${iconName}.meta.json`)

      if (fs.existsSync(metaPath)) {
        skippedCount++
        continue
      }

      const meta = buildPlaceholderMeta(iconName, dir)
      fs.writeFileSync(metaPath, `${JSON.stringify(meta, null, 2)}\n`)
      console.log(` Generated: ${prefix}/${iconName}.meta.json`)

      generatedCount++
    }
  }

  // Summary

  console.log('\n Summary:')
  console.log(`   Metadata generated: ${generatedCount}`)
  console.log(`   Already existed:    ${skippedCount}`)
}

if (process?.argv?.[1]?.endsWith('generate-raw-metadata.js')) {
  main()
}
