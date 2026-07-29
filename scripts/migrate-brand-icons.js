/**
 * migrate-brand-icons.js
 *
 * Transforms all .tsx brand icon files in src/react/brands/:
 *
 * 1. Monochrome fills (fill-black dark:fill-white OR fill-white dark:fill-black):
 *    → Remove className, add fill="var(--ui-icon-fill-monochrome)"
 *    (for the inverse variant fill-white dark:fill-black, uses --ui-icon-fill-monochrome-inverse)
 *
 * 2. Replace SVG props with BrandIcon specific props
 *    → Remove SVGProps type import
 *    → Add BrandIcon and BrandIconProps imports from './types'
 *    → Replace component props type with BrandIconProps
 *    → Replace the return type with BrandIcon
 *
 * 3. Custom hex fills (fill-[#xxx] dark:fill-[#yyy] or fill-[#xxx] dark:fill-white etc.):
 *    → Remove className, add fill="var(--ui-icon-<name>-<n>)"
 *    → Collect CSS variables for :root / .dark in a generated CSS file
 *
 * 4. SVG root className:
 *    className={cn('size-icon-base shrink-0', className)}
 *    → className={`ui-icon-brand ${className ?? ''}`}
 *    Also removes the `import { cn } from '...'` line.
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

// Helpers

/**
 * Convert PascalCase component name (after stripping "IconBrand") to kebab-case.
 * e.g. "PremierePro" → "premiere-pro", "DrizzleORM" → "drizzle-orm"
 */
function toKebab(str) {
  return (
    str
      // Insert hyphen between lowercase/digit and uppercase
      .replace(/([a-z0-9])([A-Z])/gu, '$1-$2')
      // Insert hyphen between consecutive uppercase letters followed by lowercase
      .replace(/([A-Z]+)([A-Z][a-z])/gu, '$1-$2')
      .toLowerCase()
  )
}

/**
 * Extract the component name from the file content.
 * e.g. "export const IconBrandGitHub" → "IconBrandGitHub"
 */
function extractComponentName(content) {
  const match = content.match(/export\s+const\s+(IconBrand\w+)/u)
  return match ? match[1] : null
}

/**
 * Derive the CSS variable base name from a component name.
 * "IconBrandGitHub" → "github"
 * "IconBrandPremierePro" → "premiere-pro"
 * "IconBrandAdobePremierePro" → "adobe-premiere-pro"
 */
function componentToCssName(componentName) {
  const stripped = componentName.replace(/^IconBrand/u, '')
  return toKebab(stripped)
}

/**
 * Check if a className value is a pure monochrome fill (black ↔ white).
 * Patterns:
 *   fill-black dark:fill-white
 *   fill-white dark:fill-black
 */
function isMonochromeFill(classValue) {
  const trimmed = classValue.trim()
  return trimmed === 'fill-black dark:fill-white' || trimmed === 'fill-white dark:fill-black'
}

/**
 * Check if a className represents a "custom hex → white" monochrome-like fill.
 * Pattern: fill-[#xxx] dark:fill-white   OR  fill-[#xxx] dark:fill-black
 *          fill-black dark:fill-[#xxx]    OR  fill-white dark:fill-[#xxx]
 * Returns { lightValue, darkValue } with hex codes or 'black'/'white'.
 */
function parseCustomFill(classValue) {
  const trimmed = classValue.trim()

  // Pattern: fill-[#hex] dark:fill-[#hex]
  const bothHex = trimmed.match(/^fill-\[#([a-fA-F0-9]+)\]\s+dark:fill-\[#([a-fA-F0-9]+)\]$/u)
  if (bothHex) {
    return { lightValue: `#${bothHex[1]}`, darkValue: `#${bothHex[2]}` }
  }

  // Pattern: fill-[#hex] dark:fill-white
  const hexThenWhite = trimmed.match(/^fill-\[#([a-fA-F0-9]+)\]\s+dark:fill-white$/u)
  if (hexThenWhite) {
    return { lightValue: `#${hexThenWhite[1]}`, darkValue: '#ffffff' }
  }

  // Pattern: fill-[#hex] dark:fill-black
  const hexThenBlack = trimmed.match(/^fill-\[#([a-fA-F0-9]+)\]\s+dark:fill-black$/u)
  if (hexThenBlack) {
    return { lightValue: `#${hexThenBlack[1]}`, darkValue: '#000000' }
  }

  // Pattern: fill-black dark:fill-[#hex]
  const blackThenHex = trimmed.match(/^fill-black\s+dark:fill-\[#([a-fA-F0-9]+)\]$/u)
  if (blackThenHex) {
    return { lightValue: '#000000', darkValue: `#${blackThenHex[1]}` }
  }

  // Pattern: fill-white dark:fill-[#hex]
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

/** Collect CSS variable declarations per icon: { varName, lightValue, darkValue } */
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

  // Track how many custom fill variables this icon uses (for unique naming)
  let customFillCounter = 0
  // Track unique fill pairs to reuse same variable
  const fillPairMap = new Map()

  content = content.replace('../types', './types')

  // replace the svg props type to brand icon type
  content = content.replace(
    /import\s+type\s+\{\s*SVGProps\s*\}\s+from\s+['"]react['"]/gu,
    "import type { BrandIcon, BrandIconProps } from './types'"
  )

  content = content.replace(
    /export\s+const\s+(BrandIcon\w+)\s*=\s*\(([\s\S]*?):\s*SVGProps<SVGSVGElement>\)\s*=>/gu,
    'export const $1: BrandIcon = ($2: BrandIconProps) =>'
  )

  // 1. Replace monochrome fills:  className='fill-black dark:fill-white'
  //    → fill="var(--ui-icon-fill-monochrome)"
  //    Also handle inverse:  className='fill-white dark:fill-black'
  //    → fill="var(--ui-icon-fill-monochrome-inverse)"

  // Handle both single-quoted and JSX expression className for monochrome
  // Pattern A: className='fill-black dark:fill-white' (on same line or attribute)

  content = content.replace(
    /className='fill-black dark:fill-white'/gu,
    "fill='var(--ui-icon-fill-monochrome)'"
  )
  content = content.replace(
    /className='fill-white dark:fill-black'/gu,
    "fill='var(--ui-icon-fill-monochrome-inverse)'"
  )

  // 2. Replace custom hex fills:  className='fill-[#xxx] dark:fill-[#yyy]'
  //    → fill="var(--ui-icon-<name>)" and collect CSS vars

  // Regex to find className with custom fill patterns
  const customFillRegex =
    /className='(fill-(?:\[#[a-fA-F0-9]+\]|black|white)\s+dark:fill-(?:\[#[a-fA-F0-9]+\]|black|white))'/gu

  content = content.replace(customFillRegex, (fullMatch, classValue) => {
    // Skip if it's a monochrome that was already replaced (shouldn't happen since we already did those)
    if (isMonochromeFill(classValue)) {
      // These were already handled, but just in case
      if (classValue === 'fill-black dark:fill-white') {
        return "fill='var(--ui-icon-fill-monochrome)'"
      }
      return "fill='var(--ui-icon-fill-monochrome-inverse)'"
    }

    const parsed = parseCustomFill(classValue)
    if (!parsed) {
      return fullMatch
    }

    // Create a unique key for this fill pair to reuse variable names
    const pairKey = `${parsed.lightValue}|${parsed.darkValue}`

    let varName
    if (fillPairMap.has(pairKey)) {
      varName = fillPairMap.get(pairKey)
    } else {
      customFillCounter++
      // If there's only going to be one unique pair, don't add a number suffix
      // We'll fix this in a second pass if needed — for now always add counter
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

  // If there was exactly one unique fill pair and we used counter 1, the name is clean.
  // If there were multiple unique pairs, the first one already has no suffix which is also fine.
  // Actually let's rename: if only 1 unique pair, keep `--ui-icon-<name>`.
  // If multiple, use `--ui-icon-<name>-1`, `--ui-icon-<name>-2`.
  // The current logic already handles this since counter starts at 1 and first gets no suffix.
  // But if counter ends at 1, let's leave it as is; if > 1, we need to rename the first one.

  if (customFillCounter > 1) {
    // Need to go back and rename the first variable from --ui-icon-<name> to --ui-icon-<name>-1
    const firstVarOld = `--ui-icon-fill-${cssBaseName}`
    const firstVarNew = `--ui-icon-fill-${cssBaseName}-1`
    content = content.replace(
      new RegExp(escapeRegex(`var(${firstVarOld})`), 'gu'),
      `var(${firstVarNew})`
    )
    // Also update the cssVars collection
    for (const cv of cssVars) {
      if (cv.varName === firstVarOld) {
        cv.varName = firstVarNew
      }
    }
    // Update fillPairMap values
    for (const [key, val] of fillPairMap) {
      if (val === firstVarOld) {
        fillPairMap.set(key, firstVarNew)
      }
    }
  }

  // 3. Replace SVG root className:
  //    className={cn('size-icon-base shrink-0', className)}
  //    → className={`ui-icon-brand ${className ?? ''}`}

  content = content.replace(
    /className=\{cn\('size-icon-base shrink-0',\s*className\)\}/gu,
    // biome-ignore lint/suspicious/noTemplateCurlyInString: false positive
    "className={`ui-icon-brand ${className ?? ''}`}"
  )

  // 4. Remove the cn import line if no longer needed

  // Check if cn is still used anywhere else in the file
  const cnUsageCount = (content.match(/\bcn\(/gu) || []).length
  if (cnUsageCount === 0) {
    // Remove the import line
    content = content.replace(/import\s+\{\s*cn\s*\}\s+from\s+['"].*?['"]\s*\r?\n/gu, '')
  }

  // Write changes

  // if (content !== original) {
  filesChanged++

  fs.writeFileSync(filePath, content, 'utf-8')
  console.log(` Updated: ${file}`)
  // }
}

// Generate CSS file for custom fill variables

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

// Utility

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/gu, '\\$&')
}
