/**
 * inject-dts-previews.js
 *
 * Generates @preview JSDoc comments for every generated UI icon declaration.
 *
 * To avoid adding a @preview JSDoc comment on the source code, this script recreates
 * the preview directly from the original SVG source and injects it into the generated
 * declaration file, so only the types have it when developing.
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

const RAW_DIR = path.resolve('./src/raw')
const DTS_DIR = path.resolve('./dist/ui')

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

// Main

function main() {
  if (!(fs.existsSync(RAW_DIR) && fs.existsSync(DTS_DIR))) {
    console.error('Source or dist directory not found.')
    process.exit(1)
  }
  const files = fs
    .readdirSync(RAW_DIR)
    .filter(file => file.endsWith('.svg'))
    .sort()

  let injected = 0
  let skipped = 0

  for (const file of files) {
    const svgPath = path.join(RAW_DIR, file)
    const dtsPath = path.join(DTS_DIR, file.replace(/\.svg$/u, '.d.ts'))

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

    console.log(`Injected preview: ${path.basename(dtsPath)}`)
  }
  // Summary

  console.log('\nSummary:')
  console.log(`   Files scanned:   ${files.length}`)
  console.log(`   Files injected:  ${injected}`)
  console.log(`   Files skipped:   ${skipped}`)
}

// Testing purposes
export { extractSvg, injectWhiteBackground, svgToBase64, createPreviewJSDoc }

if (process?.argv?.[1]?.endsWith('generate-icons.js')) {
  main()
}
