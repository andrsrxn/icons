/**
 * Transforms all .svg files in src/raw/flags into React components:
 *
 * 1. Optimizes raw SVGs with SVGO while preserving masked path IDs.
 * 2. Prefixes all element IDs, filters, and xlink references with country codes.
 * 3. Converts SVG attributes to camelCase JSX properties.
 * 4. Injects dynamic clipPath wrappers matching the viewBox dimensions.
 * 5. Exports TSX flag components with kebab-case filenames (e.g., us-ca.tsx -> IconFlagUSCA).
 *
 * Usage:
 *   node scripts/generate-flags.js
 */
/** biome-ignore-all lint/performance/useTopLevelRegex: no */
/** biome-ignore-all lint/nursery/useNamedCaptureGroup: no */
/** biome-ignore-all lint/style/noParameterAssign: no */
/** biome-ignore-all lint/complexity/noForEach: no */
/** biome-ignore-all lint/suspicious/noConsole: no */

import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { optimize } from 'svgo'

// Config

const FLAGS_DIR = path.resolve('./src/raw/flags')
const FLAGS_OUT = path.resolve('./src/react/flags')

const CLASSNAME = 'ui-icon-flag'

// Helpers

function extractSvg(source) {
  const match = source.match(/<svg[\s\S]*?<\/svg>/u)
  return match ? match[0] : null
}

function svgAttrsToJsx(svg) {
  return svg.replace(/\b([a-z]+[-:][a-z-]+)=/giu, (_match, attr) => {
    const camel = attr.replace(/[-:]([a-z])/gu, (_, c) => c.toUpperCase())

    return `${camel}=`
  })
}

function optimizeSvg(rawSvg, countryCode) {
  const result = optimize(rawSvg, {
    plugins: [
      {
        name: 'preset-default',
      },
      {
        name: 'prefixIds',
        params: {
          prefix: countryCode,
          delim: '-',
        },
      },
    ],
  })

  return result.data
}

// Main transform

function generateComponent(fileName, svgContent) {
  const rawSvg = extractSvg(svgContent)
  if (!rawSvg) {
    return null
  }

  const countryCodeLower = fileName.replace('.svg', '').toLowerCase()
  const countryCodeUpper = countryCodeLower.toUpperCase()
  // Strip hyphens/non-alphanumeric chars to guarantee a valid JS identifier (e.g., us-ca -> USCA)
  const cleanCodeUpper = countryCodeLower.replace(/[^a-z0-9]/gu, '').toUpperCase()
  const componentName = `IconFlag${cleanCodeUpper}`

  // 1. Optimize SVG and prefix all IDs
  const optimizedSvg = optimizeSvg(rawSvg, countryCodeLower)

  // 2. Extract viewBox dimensions (defaults to '0 0 21 15' if missing)
  const viewBoxMatch = optimizedSvg.match(/viewBox=["']([^"']+)["']/u)
  const viewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 21 15'
  const [, , vbWidth = '21', vbHeight = '15'] = viewBox.split(' ')

  // 3. Extract <defs> content and inner body
  let defsContent = ''
  let body = optimizedSvg

  const defsMatch = body.match(/<defs>([\s\S]*?)<\/defs>/u)
  if (defsMatch) {
    // biome-ignore lint/style/useDestructuring: easier to understand
    defsContent = defsMatch[1]
    body = body.replace(/<defs>[\s\S]*?<\/defs>/u, '')
  }

  // Extract inner SVG content
  const innerMatch = body.match(/<svg[^>]*>([\s\S]*?)<\/svg>/u)
  let innerBody = innerMatch ? innerMatch[1] : ''

  // Clean title and desc tags inside inner body
  innerBody = innerBody
    .replace(/<title[\s\S]*?<\/title>/giu, '')
    .replace(/<desc[\s\S]*?<\/desc>/giu, '')

  // 4. Construct clipPath definition to prevent path overflow
  const clipId = `${countryCodeLower}-clip`
  const clipPathDef = `\n        <clipPath id='${clipId}'>\n          <rect x='0' y='0' width='${vbWidth}' height='${vbHeight}' />\n        </clipPath>`

  // 5. Convert SVG attributes to JSX props
  const jsxDefs = svgAttrsToJsx(`${defsContent}${clipPathDef}`)
  const jsxBody = svgAttrsToJsx(innerBody)

  return `import type { FlagIcon, FlagIconProps } from './types'

export const ${componentName}: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  ...props
}: FlagIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='${viewBox}'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      role='img'
      className={\`${CLASSNAME} \${className ?? ''}\`}
      {...props}>
      <title>${countryCodeUpper}</title>

      <defs>${jsxDefs}
      </defs>
      <g clipPath='url(#${clipId})'>
        ${jsxBody.trim()}
      </g>
    </svg>
  )
}
`
}

function main() {
  if (!fs.existsSync(FLAGS_DIR)) {
    console.error(`Directory not found: ${FLAGS_DIR}`)
    process.exit(1)
  }

  if (!fs.existsSync(FLAGS_OUT)) {
    fs.mkdirSync(FLAGS_OUT, { recursive: true })
  }

  const files = fs.readdirSync(FLAGS_DIR)
  const svgFiles = files.filter(file => file.endsWith('.svg'))

  let processedCount = 0

  svgFiles.forEach(file => {
    const filePath = path.join(FLAGS_DIR, file)
    const svgContent = fs.readFileSync(filePath, 'utf-8')

    const componentContent = generateComponent(file, svgContent)

    if (componentContent) {
      const outputFileName = `${file.replace('.svg', '').toLowerCase()}.tsx`
      const outputFilePath = path.join(FLAGS_OUT, outputFileName)

      fs.writeFileSync(outputFilePath, componentContent)
      processedCount++
      console.log(` Generated: ${outputFileName}`)
    } else {
      console.warn(` No SVG found in ${file}`)
    }
  })

  // Summary

  console.log('\n Summary:')
  console.log(`   Files scanned:    ${svgFiles.length}`)
  console.log(`   Files generated:  ${processedCount}`)
}

// Testing purposes
export { extractSvg, generateComponent, optimizeSvg, svgAttrsToJsx }

if (process?.argv?.[1]?.includes('generate-flags')) {
  main()
}
