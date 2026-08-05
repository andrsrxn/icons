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
import path from 'node:path'
import process from 'node:process'

// Config

const ICONS_DIR = path.resolve('./src/raw/ui')
const ICONS_OUT = path.resolve('./src/react/ui')

const CLASSNAME = 'ui-icon'
const ICON_SIZE = 24

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

// Custom props injection

// Custom props injection

function injectReactProps(svg, iconName) {
  return svg.replace(/<svg([^>]*)>/u, (_match, attrs) => {
    return `<svg${attrs}
      width={size}
      height={size}
      data-slot='${iconName}'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={\`${CLASSNAME} \${className ?? ''}\`}
      {...props}>
      {title ? <title>{title}</title> : null}`
  })
}

function normalizeSvg(svg, iconName) {
  svg = svgAttrsToJsx(svg)

  // 1. Clean the width and height attributes from the original <svg> tag
  svg = svg.replace(/<svg([^>]*)>/u, (_, attrs) => {
    const cleanAttrs = attrs.replace(/\b(width|height)=["'][^"']*["']/giu, '')
    return `<svg${cleanAttrs}>`
  })

  svg = injectReactProps(svg, iconName)

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
export { generateComponent, normalizeSvg, svgAttrsToJsx, toPascalCase }

if (process?.argv?.[1]?.endsWith('generate-icons.js')) {
  main()
}
