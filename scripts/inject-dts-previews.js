/**
 * Generates @preview JSDoc comments for every generated icon declaration.
 *
 * To avoid adding a @preview JSDoc comment on the source code, this script recreates
 * the preview directly from the original SVG source and injects it into the generated
 * declaration file, so only the types have it when developing.
 *
 * The script processes every category defined in CATEGORIES. Each category must have
 * a matching directory structure between src/raw and dist.
 *
 * Usage:
 *   node scripts/inject-dts-previews.js
 */
/** biome-ignore-all lint/nursery/useNamedCaptureGroup: not necessary */
/** biome-ignore-all lint/performance/useTopLevelRegex: not necessary */

/** biome-ignore-all lint/suspicious/noConsole: utility script */

import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'

// Config

const CATEGORIES = ['ui']

const RAW_ROOT = path.resolve('./src/raw')
const DTS_ROOT = path.resolve('./dist')

// Helpers

function extractSvg(source) {
  const match = source.match(/<svg[\s\S]*?<\/svg>/u)

  return match ? match[0] : null
}

function injectWhiteBackground(svg) {
  return svg.replace(/<svg([^>]*)>/u, "<svg$1><rect width='100%' height='100%' fill='white'/>")
}

function svgToBase64(svg) {
  return Buffer.from(svg).toString('base64')
}

function createPreviewJSDoc(base64) {
  return `/**
  * @preview ![img](data:image/svg+xml;base64,${base64})
  */`
}

function processCategory(category) {
  const rawDir = path.join(RAW_ROOT, category)
  const dtsDir = path.join(DTS_ROOT, category)

  if (!(fs.existsSync(rawDir) && fs.existsSync(dtsDir))) {
    console.error(`Source or dist directory not found for category: ${category}`)
    return {
      scanned: 0,
      injected: 0,
      skipped: 0,
    }
  }

  const files = fs
    .readdirSync(rawDir)
    .filter(file => file.endsWith('.svg'))
    .sort()

  let injected = 0
  let skipped = 0

  console.log('Generating previews for ', category)

  for (const file of files) {
    const svgPath = path.join(rawDir, file)
    const dtsPath = path.join(dtsDir, file.replace(/\.svg$/u, '.d.ts'))

    if (!fs.existsSync(dtsPath)) {
      skipped++
      continue
    }

    const source = fs.readFileSync(svgPath, 'utf8')
    const svg = extractSvg(source)

    if (!svg) {
      skipped++
      continue
    }

    const previewSvg = injectWhiteBackground(svg)
    const base64 = svgToBase64(previewSvg)
    const preview = createPreviewJSDoc(base64)

    let dts = fs.readFileSync(dtsPath, 'utf8')

    // Prevent duplicates if the script is executed multiple times.
    if (dts.includes('@preview')) {
      skipped++
      continue
    }

    dts = dts.replace(/(export\s+declare\s+const\s+\w+\s*:)/u, `${preview}\n$1`)

    fs.writeFileSync(dtsPath, dts, 'utf8')

    injected++

    // console.log(`[${category}] Injected preview: ${path.basename(dtsPath)}`)
  }

  return {
    scanned: files.length,
    injected,
    skipped,
  }
}

// Main

function main() {
  let totalScanned = 0
  let totalInjected = 0
  let totalSkipped = 0

  for (const category of CATEGORIES) {
    const result = processCategory(category)

    totalScanned += result.scanned
    totalInjected += result.injected
    totalSkipped += result.skipped
  }

  // Summary

  console.log('\nSummary:')
  console.log(`   Categories processed: ${CATEGORIES.length}`)
  console.log(`   Files scanned:        ${totalScanned}`)
  console.log(`   Files injected:      ${totalInjected}`)
  console.log(`   Files skipped:        ${totalSkipped}`)
}

// Testing purposes

export { createPreviewJSDoc, extractSvg, injectWhiteBackground, processCategory, svgToBase64 }

if (process?.argv?.[1]?.endsWith('inject-dts-previews.js')) {
  main()
}
