/**
 * migrate-flag-icons.js
 *
 * Transforms all .tsx flag icon files in src/react/flags/:
 *
 * 1. Modifies the <svg> opening tag to remove any existing `className` and `{...props}`.
 * 2. Adds `className={\`ui-icon-flag \${className ?? ''}\`}`.
 * 3. Appends `{...props}` at the very end of the <svg> tag.
 *
 * Usage:
 *   node scripts/migrate-flag-icons.js
 */
/** biome-ignore-all lint/nursery/useNamedCaptureGroup: not necessary */

import fs from 'node:fs'
import path from 'node:path'

// Config
const FLAGS_DIR = path.resolve(import.meta.dirname, '..', 'src', 'react', 'flags')

// Main transform

const files = fs
  .readdirSync(FLAGS_DIR)
  .filter(f => f.endsWith('.tsx'))
  .sort()

let filesChanged = 0

for (const file of files) {
  const filePath = path.join(FLAGS_DIR, file)
  let content = fs.readFileSync(filePath, 'utf-8')
  const original = content

  // 1. Target the opening <svg ...> tag
  const svgRegex = /<svg\s+([^>]+)>/u

  content = content.replace(svgRegex, (_, inner) => {
    // 2. Remove existing {...props} and className props
    let newInner = inner.replace(/\s*\{\.\.\.props\}/gu, '')
    newInner = newInner.replace(/\s*className=\{[^}]+\}/gu, '')
    newInner = newInner.replace(/\s*className="[^"]+"/gu, '')
    newInner = newInner.replace(/\s*className='[^']+'/gu, '')

    // 3. Trim trailing whitespace from the remaining attributes
    newInner = newInner.trim()

    // 4. Reconstruct the <svg> tag with the new className and {...props} at the end
    return `<svg\n      ${newInner}\n      className={\`ui-icon-flag \${className ?? ''}\`}\n      {...props}>`
  })

  // Write changes
  if (content !== original) {
    filesChanged++

    fs.writeFileSync(filePath, content, 'utf-8')
    console.log(`Updated: ${file}`)
  }
}

// Summary

console.log('\n Summary:')
console.log(`   Files scanned:  ${files.length}`)
console.log(`   Files changed:  ${filesChanged}`)
