/**
 * generate-flag-icons.js
 *
 * Transforms all .svg files in src/raw/flags/ into React flag components:
 *
 * 1. Converts SVG attributes to camelCase JSX properties.
 * 2. Cleans hardcoded width and height attributes from the root SVG.
 * 3. Injects independent width and height React props.
 * 4. Injects the flag-specific CSS class and data-slot.
 * 5. Prefixes SVG IDs with the flag code to prevent DOM collisions.
 * 6. Converts rectangular SVG paths into <rect> elements when possible.
 *
 * Usage:
 *   node scripts/generate-flag-icons.js
 */
/** biome-ignore-all lint/performance/useTopLevelRegex: no */
/** biome-ignore-all lint/nursery/useNamedCaptureGroup: no */
/** biome-ignore-all lint/style/noParameterAssign: no */
/** biome-ignore-all lint/complexity/noForEach: no */
/** biome-ignore-all lint/suspicious/noConsole: no */

import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'

// Config

const FLAGS_DIR = path.resolve('./src/raw/flags')
const FLAGS_OUT = path.resolve('./src/react/flags')

const CLASSNAME = 'ui-icon-flag'
const FLAG_SIZE = 24

// Helpers

function toPascalCase(str) {
  return str.replace(/(^\w|-\w)/gu, clear => clear.replace(/-/u, '').toUpperCase())
}

function extractSvg(source) {
  const match = source.match(/<svg[\s\S]*?<\/svg>/u)
  return match ? match[0] : null
}

function svgAttrsToJsx(svg) {
  return svg.replace(/([a-z]+[-:][a-z-]+)=/giu, (_, attr) => {
    const camel = attr
      .replace(/-([a-z])/gu, (_, c) => c.toUpperCase())
      .replace(/:([a-z])/gu, (_, c) => c.toUpperCase())

    return `${camel}=`
  })
}

function prefixIds(svg, flagName) {
  return svg
    .replace(/\bid=(['"])([^'"]+)\1/giu, (_match, quote, id) => {
      return `id=${quote}${flagName}-${id}${quote}`
    })
    .replace(/url\(#([^)]+)\)/giu, `url(#${flagName}-$1)`)
}

function pathToRect(svg) {
  return svg.replace(
    /<path([^>]*?)\sd=["']M([\d.]+)\s([\d.]+)h([\d.]+)v([\d.]+)H0?([\d.]+)?z["']([^>]*)\/>/giu,
    (_match, before, x, y, width, height, _h, after) => {
      return `<rect${before} x='${x}' y='${y}' width='${width}' height='${height}'${after} />`
    }
  )
}

function convertSimpleRectPaths(svg) {
  return svg.replace(
    /<path([^>]*?)d=['"]M([-\d.]+)\s([-\d.]+)h([-\d.]+)v([-\d.]+)H([-\d.]+)z['"]([^>]*)\/>/giu,
    (_match, before, x, y, width, height, _endX, after) => {
      return `<rect${before} x='${x}' y='${y}' width='${width}' height='${height}'${after} />`
    }
  )
}

function normalizeSvg(svg, iconName) {
  svg = svgAttrsToJsx(svg)

  // 1. Remove the XML declaration if it is still present.
  svg = svg.replace(/<\?xml[\s\S]*?\?>\s*/u, '')

  // 2. Remove the root SVG width and height.
  svg = svg.replace(/<svg([^>]*)>/u, (_, attrs) => {
    const cleanAttrs = attrs.replace(/\b(width|height)=["'][^"']*["']/giu, '')

    return `<svg${cleanAttrs}>`
  })

  // 3. Prefix IDs and their url(#...) references.
  svg = prefixIds(svg, iconName)

  // 4. Convert simple rectangular paths to rect elements.
  svg = pathToRect(svg)
  svg = convertSimpleRectPaths(svg)

  // 5. Inject React props into the root SVG.
  svg = svg.replace(/<svg([^>]*)>/u, (_match, attrs) => {
    return `<svg${attrs}
      width={width}
      height={height}
      role='img'
      className={\`${CLASSNAME} \${className ?? ''}\`}
      {...props}>`
  })

  return svg
}

// Main transform

function generateComponent(fileName, svgContent) {
  const iconName = fileName.replace(/\.svg$/u, '')
  const componentName = toPascalCase(iconName).toUpperCase()

  const rawSvg = extractSvg(svgContent)

  if (!rawSvg) {
    return null
  }

  const jsxSvg = normalizeSvg(rawSvg, iconName)

  return `import type { FlagIcon, FlagIconProps } from './types'

export const IconFlag${componentName}: FlagIcon = ({
  className,
  size,
  width = size ?? ${FLAG_SIZE},
  height = size,
  ...props
}: FlagIconProps) => {
  return (
    ${jsxSvg}
  )
}
`
}

function main() {
  if (!fs.existsSync(FLAGS_DIR)) {
    console.error(`Directory not found: ${FLAGS_DIR}`)
    process.exit(1)
  }

  fs.mkdirSync(FLAGS_OUT, { recursive: true })

  const files = fs.readdirSync(FLAGS_DIR)
  const svgFiles = files.filter(file => file.endsWith('.svg')).sort()

  let processedCount = 0

  svgFiles.forEach(file => {
    const filePath = path.join(FLAGS_DIR, file)
    const svgContent = fs.readFileSync(filePath, 'utf-8')

    const componentContent = generateComponent(file, svgContent)

    if (componentContent) {
      const outputFilePath = path.join(FLAGS_OUT, file.replace(/\.svg$/u, '.tsx'))

      fs.writeFileSync(outputFilePath, componentContent)
      processedCount++

      console.log(` Generated: ${file.replace(/\.svg$/u, '.tsx')}`)
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
export {
  convertSimpleRectPaths,
  generateComponent,
  normalizeSvg,
  pathToRect,
  prefixIds,
  svgAttrsToJsx,
  toPascalCase,
}

if (process?.argv?.[1]?.endsWith('generate-flags.js')) {
  main()
}
