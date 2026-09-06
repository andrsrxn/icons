/**
 * Migrates metadata from dist/catalog.json back into each
 * individual .meta.json file.
 *
 * This is a one-time migration script.
 *
 * It uses:
 *   - catalog.name  -> icon filename
 *   - catalog.group -> source directory
 *
 * It writes:
 *   - categories
 *   - tags
 *   - rtl (only when present in the catalog)
 *
 * It intentionally does NOT write `name` or `group`.
 *
 * Usage:
 *   node scripts/migrate-catalog-to-meta.js
 */

/** biome-ignore-all lint/suspicious/noConsole: no */

import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const CATALOG_FILE = path.resolve(__dirname, '../dist/catalog.json')

const GROUPS = {
  ui: path.resolve(__dirname, '../src/ui'),
  flags: path.resolve(__dirname, '../src/flags'),
}

// biome-ignore lint/complexity/noExcessiveCognitiveComplexity: allowed
function main() {
  if (!fs.existsSync(CATALOG_FILE)) {
    console.error(`Catalog not found: ${CATALOG_FILE}`)
    process.exit(1)
  }

  const catalog = JSON.parse(fs.readFileSync(CATALOG_FILE, 'utf-8'))

  if (!Array.isArray(catalog)) {
    console.error('Invalid catalog: expected a JSON array.')
    process.exit(1)
  }

  let updatedCount = 0
  let missingMetaCount = 0
  let invalidEntryCount = 0

  for (const entry of catalog) {
    const { name, group, categories, tags } = entry

    if (!(name && group)) {
      console.warn(` Invalid catalog entry, skipped: ${JSON.stringify(entry)}`)
      invalidEntryCount++
      continue
    }

    const groupDir = GROUPS[group]

    if (!groupDir) {
      console.warn(` Unknown group, skipped: ${group}/${name}`)
      invalidEntryCount++
      continue
    }

    const metaPath = path.join(groupDir, `${name}.meta.json`)

    if (!fs.existsSync(metaPath)) {
      console.warn(` Missing metadata: ${group}/${name}`)
      missingMetaCount++
      continue
    }

    // const meta = JSON.parse(fs.readFileSync(metaPath, 'utf-8'))

    // Only copy metadata fields.
    // name and group are intentionally excluded.
    const updatedMeta = {
      // ...meta,
      categories: Array.isArray(categories) ? categories : [],
      tags: Array.isArray(tags) ? tags : [],
    }

    // rtl is an optional property.
    // Add it only when it exists in the catalog.
    if (Object.hasOwn(entry, 'rtl')) {
      updatedMeta.rtl = entry.rtl
    } else {
      // Remove a previous rtl value if one happens to exist.
      // biome-ignore lint/performance/noDelete: no
      delete updatedMeta.rtl
    }

    fs.writeFileSync(metaPath, `${JSON.stringify(updatedMeta, null, 2)}\n`, 'utf-8')
    console.log(` Updated: ${group}/${name}`)
    updatedCount++
  }

  console.log('\n Migration summary:')
  console.log(`   Metadata updated: ${updatedCount}`)
  console.log(`   Missing metadata: ${missingMetaCount}`)
  console.log(`   Invalid entries:  ${invalidEntryCount}`)
}

if (process.argv[1]?.endsWith('migrate-meta.js')) {
  main()
}
