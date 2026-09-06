/**
 * Generates a single dist/catalog.json aggregating every icon's
 * .meta.json into one flat array. The metadata script is
 * the single source of truth for naming (including any special-casing
 * flags need), this script only aggregates.
 *
 * dist/catalog.json is a build output - it's never committed, always
 * regenerated fresh from the individual .meta.json files.
 *
 * Usage:
 *   node scripts/generate-catalog.js
 */
/** biome-ignore-all lint/suspicious/noConsole: no */

import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'

// Config
const __dirname = path.dirname(fileURLToPath(import.meta.url))

const GROUPS = {
  ui: path.resolve(__dirname, '../src/ui'),
  flags: path.resolve(__dirname, '../src/flags'),
}

const OUT_FILE = path.resolve(__dirname, '../dist/catalog.json')

// Helpers

export function findSvgFiles(files) {
  return files.filter(file => file.endsWith('.svg')).sort()
}

export function buildCatalogEntry(group, iconName, meta) {
  const entry = {
    name: iconName,
    group,
    ...meta,
  }

  return entry
}

// Main transform

function main() {
  for (const [group, dir] of Object.entries(GROUPS)) {
    if (!fs.existsSync(dir)) {
      console.error(`Directory not found (${group}): ${dir}`)
      process.exit(1)
    }
  }

  const catalog = []
  let missingMetaCount = 0

  for (const [group, dir] of Object.entries(GROUPS)) {
    const files = fs.readdirSync(dir)
    const svgFiles = findSvgFiles(files)

    for (const file of svgFiles) {
      const iconName = path.basename(file, '.svg')
      const metaPath = path.join(dir, `${iconName}.meta.json`)

      if (!fs.existsSync(metaPath)) {
        console.warn(` Missing metadata, skipped: ${group}/${iconName}`)
        missingMetaCount++
        continue
      }

      const meta = JSON.parse(fs.readFileSync(metaPath, 'utf-8'))

      catalog.push(buildCatalogEntry(group, iconName, meta))
    }
  }

  fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true })
  fs.writeFileSync(OUT_FILE, `${JSON.stringify(catalog)}\n`)

  // Summary

  console.log('\n Summary:')
  console.log(`   Icons cataloged:  ${catalog.length}`)
  console.log(`   Missing metadata: ${missingMetaCount}`)
  console.log(`   Output:           ${path.relative(process.cwd(), OUT_FILE)}`)

  // Caught by the completeness test too, but failing the build itself
  // means an incomplete catalog can't slip through if that test step
  // ever gets skipped or misconfigured.
  if (missingMetaCount > 0) {
    process.exitCode = 1
  }
}

if (process?.argv?.[1]?.endsWith('generate-catalog.js')) {
  main()
}
