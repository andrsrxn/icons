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
import { createRequire } from 'node:module'
import path from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'
import { optimize } from 'svgo'

// Config
const __dirname = path.dirname(fileURLToPath(import.meta.url))

const require = createRequire(import.meta.url)
const rawIconsRoot = path.dirname(require.resolve('@andrsrxn/raw-icons/package.json'))

const FLAGS_DIR = path.join(rawIconsRoot, 'src/flags')
const FLAGS_OUT = path.resolve(__dirname, '../src/react/flags')

const CLASSNAME = 'ui-flag'

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
  const cleanCodeUpper = countryCodeLower.replace(/[^a-z0-9]/gu, '').toUpperCase()
  const componentName = `IconFlag${cleanCodeUpper}`

  const optimizedSvg = optimizeSvg(rawSvg, countryCodeLower)

  const viewBoxMatch = optimizedSvg.match(/viewBox=["']([^"']+)["']/u)
  const viewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 21 15'
  const [, , vbWidth = '21', vbHeight = '15'] = viewBox.split(' ')

  let defsContent = ''
  let body = optimizedSvg

  const defsMatch = body.match(/<defs>([\s\S]*?)<\/defs>/u)
  if (defsMatch) {
    ;[defsContent] = defsMatch
    body = body.replace(/<defs>[\s\S]*?<\/defs>/u, '')
  }

  const innerMatch = body.match(/<svg[^>]*>([\s\S]*?)<\/svg>/u)
  let innerBody = innerMatch ? innerMatch[1] : ''

  innerBody = innerBody
    .replace(/<title[\s\S]*?<\/title>/giu, '')
    .replace(/<desc[\s\S]*?<\/desc>/giu, '')

  const clipId = `${countryCodeLower}-clip`
  const clipPathDef = `\n        <clipPath id='${clipId}'>\n          <rect x='0' y='0' width='${vbWidth}' height='${vbHeight}' />\n        </clipPath>`

  const jsxDefs = svgAttrsToJsx(`${defsContent}${clipPathDef}`)
  const jsxBody = svgAttrsToJsx(innerBody)

  return `import type { FlagIcon } from './types'

export const ${componentName}: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  title,
  'aria-label': ariaLabel,
  'aria-hidden': ariaHidden,
  ...props
}) => {
  
  const isHidden = ariaHidden === true
  const titleText = title ?? '${countryCodeUpper}'
  
  const showTitle = !(isHidden || ariaLabel)

  return (
    <svg
      width={width}
      height={height}
      viewBox='${viewBox}'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      data-slot='${CLASSNAME}-${countryCodeLower}'
      role={isHidden ? undefined : 'img'}
      aria-hidden={isHidden ? true : undefined}
      aria-label={isHidden ? undefined : ariaLabel}
      aria-labelledby={showTitle ? '${countryCodeLower}-title' : undefined}
      focusable={isHidden ? false : undefined}
      className={\`${CLASSNAME} \${className ?? ''}\`}
      {...props}>
      {showTitle ? <title id={'${countryCodeLower}-title'}>{titleText}</title> : null}

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
