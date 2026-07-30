/**
 * migrate-brand-icons.js
 *
 * Transforms all .tsx brand icon files in src/react/brands/:
 *
 * 1. Normalize Types & Signature:
 *    → Import BrandIcon, BrandIconProps from './types'
 *    → Ensure destructuring includes `size = 24`
 *
 * 2. SVG Root Props:
 *    → Sets className={`ui-icon-brand ${className ?? ''}`}
 *    → Sets width={size} and height={size}
 *
 * 3. Fills & Color Variables:
 *    → Transforms monochrome fills (fill-black / fill-white) to CSS variables
 *    → Transforms custom hex fills to dynamic CSS variables and updates brand-icons.css
 *
 * Usage:
 *   node scripts/migrate-brand-icons.js
 */
/** biome-ignore-all lint/performance/useTopLevelRegex: not necessary */
/** biome-ignore-all lint/nursery/useNamedCaptureGroup: not necessary */

import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'

// Config

const BRANDS_DIR = path.resolve(import.meta.dirname, '..', 'src', 'react', 'brands')
const CSS_OUTPUT = path.resolve(BRANDS_DIR, 'brand-icons.css')

const ICON_SIZE = 24

// Helpers

function toKebab(str) {
  return str
    .replace(/([a-z0-9])([A-Z])/gu, '$1-$2')
    .replace(/([A-Z]+)([A-Z][a-z])/gu, '$1-$2')
    .toLowerCase()
}

function extractComponentName(content) {
  const match = content.match(/export\s+const\s+(IconBrand\w+)/u)
  return match ? match[1] : null
}

function componentToCssName(componentName) {
  const stripped = componentName.replace(/^IconBrand/u, '')
  return toKebab(stripped)
}

function isMonochromeFill(classValue) {
  const trimmed = classValue.trim()
  return trimmed === 'fill-black dark:fill-white' || trimmed === 'fill-white dark:fill-black'
}

function parseCustomFill(classValue) {
  const trimmed = classValue.trim()

  const bothHex = trimmed.match(/^fill-\[#([a-fA-F0-9]+)\]\s+dark:fill-\[#([a-fA-F0-9]+)\]$/u)
  if (bothHex) {
    return { lightValue: `#${bothHex[1]}`, darkValue: `#${bothHex[2]}` }
  }

  const hexThenWhite = trimmed.match(/^fill-\[#([a-fA-F0-9]+)\]\s+dark:fill-white$/u)
  if (hexThenWhite) {
    return { lightValue: `#${hexThenWhite[1]}`, darkValue: '#ffffff' }
  }

  const hexThenBlack = trimmed.match(/^fill-\[#([a-fA-F0-9]+)\]\s+dark:fill-black$/u)
  if (hexThenBlack) {
    return { lightValue: `#${hexThenBlack[1]}`, darkValue: '#000000' }
  }

  const blackThenHex = trimmed.match(/^fill-black\s+dark:fill-\[#([a-fA-F0-9]+)\]$/u)
  if (blackThenHex) {
    return { lightValue: '#000000', darkValue: `#${blackThenHex[1]}` }
  }

  const whiteThenHex = trimmed.match(/^fill-white\s+dark:fill-\[#([a-fA-F0-9]+)\]$/u)
  if (whiteThenHex) {
    return { lightValue: '#ffffff', darkValue: `#${whiteThenHex[1]}` }
  }

  return null
}

// Main transform

const files = fs
  .readdirSync(BRANDS_DIR)
  .filter(f => f.endsWith('.tsx'))
  .sort()

const cssVars = []
let filesChanged = 0

for (const file of files) {
  const filePath = path.join(BRANDS_DIR, file)
  const original = fs.readFileSync(filePath, 'utf-8')
  let content = original

  const componentName = extractComponentName(content)
  if (!componentName) {
    continue
  }

  const cssBaseName = componentToCssName(componentName)
  let customFillCounter = 0
  const fillPairMap = new Map()

  // 1. Normalizar Imports
  content = content.replace('../types', './types')
  content = content.replace(
    /import\s+type\s+\{\s*SVGProps\s*\}\s+from\s+['"]react['"]/gu,
    "import type { BrandIcon, BrandIconProps } from './types'"
  )

  // 2. Normalizar la firma del componente
  // Reemplaza firmas heredadas tipo SVGProps<SVGSVGElement> a BrandIcon/BrandIconProps
  content = content.replace(
    /export\s+const\s+(IconBrand\w+)\s*=\s*\(([\s\S]*?):\s*SVGProps<SVGSVGElement>\)\s*=>/gu,
    'export const $1: BrandIcon = ($2: BrandIconProps) =>'
  )

  // Garantizar `size = 24` en la desestructuración de props (soporta si no estaba size o si decía `size`)
  content = content.replace(
    /(\(\{\s*className,)\s*(?:size(?:\s*=\s*[^,]+)?,)?(\s*\.\.\.props\s*\})/gu,
    `$1 size = ${ICON_SIZE},$2`
  )

  // 3. Normalizar props del <svg> raíz (className, width, height)
  // Reemplazar la versión antigua con cn(...) si aún existiera alguna
  content = content.replace(
    /className=\{cn\('size-icon-base shrink-0',\s*className\)\}/gu,
    // biome-ignore lint/suspicious/noTemplateCurlyInString: false positive
    "className={`ui-icon-brand ${className ?? ''}`}\n    width={size}\n    height={size}"
  )

  // Reemplazar expresiones antiguas de width/height con `var(...)` a `width={size}`
  content = content.replace(/width=\{size\s*\?\?\s*['"][^'"]+['"]\}/gu, 'width={size}')
  content = content.replace(/height=\{size\s*\?\?\s*['"][^'"]+['"]\}/gu, 'height={size}')

  // Si tiene el className pero le faltan width/height, los inserta inmediatamente después
  if (!content.includes('width={size}')) {
    content = content.replace(
      /className=\{`ui-icon-brand \$\{className \?\? ''\}`\}/gu,
      // biome-ignore lint/suspicious/noTemplateCurlyInString: false positive
      "className={`ui-icon-brand ${className ?? ''}`}\n    width={size}\n    height={size}"
    )
  }

  // 4. Reemplazar fills monocromáticos
  content = content.replace(
    /className='fill-black dark:fill-white'/gu,
    "fill='var(--ui-icon-fill-monochrome)'"
  )
  content = content.replace(
    /className='fill-white dark:fill-black'/gu,
    "fill='var(--ui-icon-fill-monochrome-inverse)'"
  )

  // 5. Reemplazar fills personalizados con variables CSS
  const customFillRegex =
    /className='(fill-(?:\[#[a-fA-F0-9]+\]|black|white)\s+dark:fill-(?:\[#[a-fA-F0-9]+\]|black|white))'/gu

  content = content.replace(customFillRegex, (fullMatch, classValue) => {
    if (isMonochromeFill(classValue)) {
      if (classValue === 'fill-black dark:fill-white') {
        return "fill='var(--ui-icon-fill-monochrome)'"
      }
      return "fill='var(--ui-icon-fill-monochrome-inverse)'"
    }

    const parsed = parseCustomFill(classValue)
    if (!parsed) {
      return fullMatch
    }

    const pairKey = `${parsed.lightValue}|${parsed.darkValue}`
    let varName

    if (fillPairMap.has(pairKey)) {
      varName = fillPairMap.get(pairKey)
    } else {
      customFillCounter++
      varName =
        customFillCounter === 1
          ? `--ui-icon-fill-${cssBaseName}`
          : `--ui-icon-fill-${cssBaseName}-${customFillCounter}`
      fillPairMap.set(pairKey, varName)

      cssVars.push({
        varName,
        lightValue: parsed.lightValue,
        darkValue: parsed.darkValue,
      })
    }

    return `fill='var(${varName})'`
  })

  if (customFillCounter > 1) {
    const firstVarOld = `--ui-icon-fill-${cssBaseName}`
    const firstVarNew = `--ui-icon-fill-${cssBaseName}-1`
    content = content.replace(
      new RegExp(escapeRegex(`var(${firstVarOld})`), 'gu'),
      `var(${firstVarNew})`
    )
    for (const cv of cssVars) {
      if (cv.varName === firstVarOld) {
        cv.varName = firstVarNew
      }
    }
    for (const [key, val] of fillPairMap) {
      if (val === firstVarOld) {
        fillPairMap.set(key, firstVarNew)
      }
    }
  }

  // 6. Remover la línea de import de `cn` si ya no se usa
  const cnUsageCount = (content.match(/\bcn\(/gu) || []).length
  if (cnUsageCount === 0) {
    content = content.replace(/import\s+\{\s*cn\s*\}\s+from\s+['"].*?['"]\s*\r?\n/gu, '')
  }

  // if (content !== original) {
  filesChanged++
  fs.writeFileSync(filePath, content, 'utf-8')
  console.log(` Updated: ${file}`)
  // }
}

// Generación de CSS

if (cssVars.length > 0) {
  const rootVars = cssVars.map(v => `  ${v.varName}: ${v.lightValue};`)
  const darkVars = cssVars.map(v => `  ${v.varName}: ${v.darkValue};`)

  const css = [
    '/* Auto-generated by migrate-brand-icons.js — custom brand icon fill variables */',
    '',
    ':root {',
    '  --ui-icon-fill-monochrome: #000000;',
    '  --ui-icon-fill-monochrome-inverse: #ffffff;',
    ...rootVars,
    '}',
    '',
    '.dark {',
    '  --ui-icon-fill-monochrome: #ffffff;',
    '  --ui-icon-fill-monochrome-inverse: #000000;',
    ...darkVars,
    '}',
    '',
  ].join('\n')

  fs.writeFileSync(CSS_OUTPUT, css, 'utf-8')
  console.log(`\n Generated CSS: ${path.relative(process.cwd(), CSS_OUTPUT)}`)
}

// Summary

console.log('\n Summary:')
console.log(`   Files scanned:  ${files.length}`)
console.log(`   Files changed:  ${filesChanged}`)
console.log(`   CSS variables:  ${cssVars.length} custom fills`)

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/gu, '\\$&')
}
