/**
 * Transforms all .svg files in src/raw/ui into React components:
 *
 * 1. Converts SVG attributes to camelCase JSX properties.
 * 2. Cleans hardcoded width and height attributes.
 * 3. Injects custom React props and default CSS variables.
 * 4. Generates a JSDoc preview with a Base64 encoded image.
 *
 * Usage:
 *   node scripts/generate-icons.js
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

// Config
const __dirname = path.dirname(fileURLToPath(import.meta.url))

const require = createRequire(import.meta.url)
const rawIconsRoot = path.dirname(require.resolve('@andrsrxn/raw-icons/package.json'))

const ICONS_DIR = path.join(rawIconsRoot, 'src/ui')
const ICONS_OUT = path.resolve(__dirname, '../src/react/ui')

const CLASSNAME = 'icon-ui'
const ICON_SIZE = 24
const STROKE_WIDTH = 1.5

// Helpers

function toPascalCase(str) {
  return str.replace(/(^\w|-\w)/gu, clear => clear.replace(/-/u, '').toUpperCase())
}

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

// Strip one or more attributes from the root <svg> tag only, leaving any
// identically-named attribute on child elements (paths, etc.) untouched.
function stripRootAttrs(svg, attrNames) {
  return svg.replace(/<svg([^>]*)>/u, (_match, attrs) => {
    let cleanAttrs = attrs
    for (const attr of attrNames) {
      cleanAttrs = cleanAttrs.replace(new RegExp(`\\s${attr}=["'][^"']*["']`, 'giu'), '')
    }
    return `<svg${cleanAttrs}>`
  })
}

// Strip every occurrence of an attribute, anywhere in the markup (any
// path/shape element - the raw source never sets these on the root).
function stripAllAttr(svg, attrName) {
  return svg.replace(new RegExp(`\\s${attrName}=["'][^"']*["']`, 'giu'), '')
}

// True if the attribute appears anywhere in the markup.
function hasAttr(svg, attrName) {
  return new RegExp(`\\s${attrName}=["'][^"']*["']`, 'iu').test(svg)
}

// Custom props injection

function injectReactProps(svg, iconName, injectStrokeLinecapLinejoin, injectStrokeWidth) {
  return svg.replace(/<svg([^>]*)>/u, (_match, attrs) => {
    const strokeProps = `${
      injectStrokeWidth
        ? `
      strokeWidth={strokeWidth}`
        : ''
    }${
      injectStrokeLinecapLinejoin
        ? `
      strokeLinecap='round'
      strokeLinejoin='round'`
        : ''
    }`

    // Determine when to show the title: Only when labelled, an explicit title exists, AND no aria-label is provided
    const showTitle = 'isLabelled && title && !ariaLabel'

    return `<svg${attrs}
      width={size}
      height={size}${strokeProps}
      data-slot='${CLASSNAME}-${iconName}'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      aria-labelledby={${showTitle} ? '${iconName}-title' : undefined}
      focusable={isLabelled ? undefined : false}
      className={\`${CLASSNAME} \${className ?? ''}\`.trim()}
      {...props}>
      {${showTitle} ? <title id={'${iconName}-title'}>{title}</title> : null}`
  })
}

function normalizeSvg(svg, iconName) {
  svg = svgAttrsToJsx(svg)

  // Strip width/height from the root <svg> tag - these become the
  // controlled `size` prop. stroke/stroke-width/stroke-linecap/
  // stroke-linejoin never appear on the root in the raw source, only on
  // individual paths/shapes, so nothing else needs stripping from it.
  svg = stripRootAttrs(svg, ['width', 'height'])

  // strokeWidth / strokeLinecap / strokeLinejoin live on individual
  // paths in the raw source. If the icon uses any of them anywhere,
  // consolidate: strip every per-path occurrence and add exactly one
  // global set on the root <svg> tag instead. Icons that never use a
  // stroke at all (pure fill / duotone icons) are left completely alone
  // - nothing gets added to their root unnecessarily.
  //
  // This is safe for mixed icons too (some fill paths, some stroke
  // paths in the same icon): stroke-width only has a visual effect on
  // an element that also has a stroke color, and `stroke` itself is
  // never globalized to the root - so a fill-only path inheriting an
  // unused strokeWidth from the root renders no differently than before.
  const usesStrokeWidth = hasAttr(svg, 'strokeWidth')
  const usesStrokeLinecapLinejoin = hasAttr(svg, 'strokeLinecap') || hasAttr(svg, 'strokeLinejoin')

  if (usesStrokeWidth) {
    svg = stripAllAttr(svg, 'strokeWidth')
  }

  if (usesStrokeLinecapLinejoin) {
    svg = stripAllAttr(svg, 'strokeLinecap')
    svg = stripAllAttr(svg, 'strokeLinejoin')
  }

  svg = injectReactProps(svg, iconName, usesStrokeLinecapLinejoin, usesStrokeWidth)

  return svg
}

// Main transform

function generateComponent(fileName, svgContent) {
  const iconName = fileName.replace('.svg', '')
  const componentName = toPascalCase(iconName)

  const rawSvg = extractSvg(svgContent)
  if (!rawSvg) {
    return null
  }

  const jsxSvg = normalizeSvg(rawSvg, iconName)

  return `import type { Icon } from './types'

export const Icon${componentName}: Icon = ({
  size = ${ICON_SIZE},
  strokeWidth = ${STROKE_WIDTH},
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

  return (
    ${jsxSvg}
  )
}
`
}

function main() {
  if (!fs.existsSync(ICONS_DIR)) {
    console.error(`Directory not found: ${ICONS_DIR}`)
    process.exit(1)
  }

  const files = fs.readdirSync(ICONS_DIR)
  const svgFiles = files.filter(file => file.endsWith('.svg'))

  let processedCount = 0

  svgFiles.forEach(file => {
    const filePath = path.join(ICONS_DIR, file)

    const svgContent = fs.readFileSync(filePath, 'utf-8')

    const componentContent = generateComponent(file, svgContent)

    if (componentContent) {
      const outputFilePath = path.join(ICONS_OUT, file.replace('.svg', '.tsx'))

      fs.writeFileSync(outputFilePath, componentContent)
      processedCount++
      console.log(` Generated: ${file.replace('.svg', '.tsx')}`)
    } else {
      console.warn(` No SVG found in ${file}`)
    }
  })

  // Summary

  console.log('\n Summary:')
  console.log(`   Files scanned:    ${svgFiles.length}`)
  console.log(`   Files generated:  ${processedCount}`)
}

// testing porpuses
export {
  generateComponent,
  hasAttr,
  normalizeSvg,
  stripAllAttr,
  stripRootAttrs,
  svgAttrsToJsx,
  toPascalCase,
}

if (process?.argv?.[1]?.endsWith('generate-icons.js')) {
  main()
}
