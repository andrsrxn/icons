/**
 * Generates two build outputs:
 * 1. dist/catalog.json -> Lightweight metadata array.
 * 2. dist/catalog-with-svgs.json -> Complete array containing embedded inline SVGs.
 *
 * Usage:
 *   node scripts/generate-catalog.js
 */
/** biome-ignore-all lint/performance/useTopLevelRegex: not necessary */
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
const OUT_FULL_JSON_FILE = path.resolve(__dirname, '../dist/catalog-with-svgs.json')

// SVG elements that can represent graphical shapes.
const SVG_GRAPHICAL_ELEMENTS = /<(path|rect|circle|ellipse|line|polyline|polygon)\b([^>]*)>/gi

// Helpers
export function findSvgFiles(files) {
  return files.filter(file => file.endsWith('.svg')).sort()
}

export function buildCatalogEntry(group, iconName, meta) {
  return {
    name: iconName,
    group,
    ...meta,
  }
}

function getAttribute(attrs, name) {
  const match = attrs.match(new RegExp(`\\b${name}\\s*=\\s*(["'])(.*?)\\1`, 'i'))

  return match?.[2] ?? null
}

function hasAttribute(attrs, name) {
  return new RegExp(`\\b${name}\\s*=`, 'i').test(attrs)
}

function hasVisibleAttribute(attrs, name) {
  const value = getAttribute(attrs, name)

  return value !== null && value.toLowerCase() !== 'none'
}

function addUiElementIds(svg) {
  return svg.replace(SVG_GRAPHICAL_ELEMENTS, (match, element, attrs) => {
    // Never overwrite an existing ID.
    if (hasAttribute(attrs, 'id')) {
      return match
    }

    const hasStroke = hasVisibleAttribute(attrs, 'stroke')
    const hasFill = hasVisibleAttribute(attrs, 'fill')
    const hasOpacity = hasAttribute(attrs, 'opacity')

    // A visible stroke always represents the vector/foreground layer.
    if (hasStroke) {
      return `<${element} id="Vector"${attrs}>`
    }

    // A filled element with explicit opacity represents the secondary
    // duotone/fill layer.
    if (hasFill && hasOpacity) {
      return `<${element} id="Fill"${attrs}>`
    }

    // Any remaining graphical element is treated as vector content.
    return `<${element} id="Vector"${attrs}>`
  })
}

function namespaceFlagIds(svg, iconName) {
  return svg
    .replace(/\bid="([^"]+)"/g, `id="${iconName}-$1"`)
    .replace(/\burl\(#([^)]+)\)/g, `url(#${iconName}-$1)`)
    .replace(/\bhref="#([^"]+)"/g, `href="#${iconName}-$1"`)
}

// Main transform
// biome-ignore lint/complexity/noExcessiveCognitiveComplexity: allowed
function main() {
  for (const [group, dir] of Object.entries(GROUPS)) {
    if (!fs.existsSync(dir)) {
      console.error(`Directory not found (${group}): ${dir}`)
      process.exit(1)
    }
  }

  const catalog = []
  const catalogWithSvgs = []
  let missingMetaCount = 0

  for (const [group, dir] of Object.entries(GROUPS)) {
    const files = fs.readdirSync(dir)
    const svgFiles = findSvgFiles(files)

    for (const file of svgFiles) {
      const iconName = path.basename(file, '.svg')
      const svgPath = path.join(dir, file)
      const metaPath = path.join(dir, `${iconName}.meta.json`)

      if (!fs.existsSync(metaPath)) {
        console.warn(` Missing metadata, skipped: ${group}/${iconName}`)
        missingMetaCount++
        continue
      }

      const meta = JSON.parse(fs.readFileSync(metaPath, 'utf-8'))
      const baseEntry = buildCatalogEntry(group, iconName, meta)

      // 1. Light JSON Entry
      catalog.push(baseEntry)

      // 2. Full JSON Entry with raw inline SVG code
      let rawSvg = fs.readFileSync(svgPath, 'utf-8').trim()

      if (group === 'ui') {
        rawSvg = addUiElementIds(rawSvg)
      } else if (group === 'flags') {
        rawSvg = namespaceFlagIds(rawSvg, iconName)
      }

      catalogWithSvgs.push({
        ...baseEntry,
        svg: rawSvg,
      })
    }
  }

  // Ensure output directory exists
  fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true })

  // Write out file 1: Clean Catalog metadata
  fs.writeFileSync(OUT_FILE, `${JSON.stringify(catalog)}\n`)

  // Write out file 2: Full Catalog JSON map with SVGs
  fs.writeFileSync(OUT_FULL_JSON_FILE, `${JSON.stringify(catalogWithSvgs)}\n`)

  // Summary
  console.log('\n Summary:')
  console.log(`   Icons cataloged:       ${catalog.length}`)
  console.log(`   Missing metadata:      ${missingMetaCount}`)
  console.log(`   Light Catalog Output:  ${path.relative(process.cwd(), OUT_FILE)}`)
  console.log(`   SVG Catalog Output:    ${path.relative(process.cwd(), OUT_FULL_JSON_FILE)}`)

  if (missingMetaCount > 0) {
    process.exitCode = 1
  }
}

if (process?.argv?.[1]?.endsWith('generate-catalog.js')) {
  main()
}
