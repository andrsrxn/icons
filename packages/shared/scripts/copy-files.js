/** biome-ignore-all lint/suspicious/noConsole: no */
import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'

const SHARED_ROOT = path.resolve(import.meta.dirname, '..')
const SHARED_SRC = path.join(SHARED_ROOT, 'src')
const PACKAGES_ROOT = path.resolve(SHARED_ROOT, '..')

// Copied straight into the target package's own root.
const ROOT_FILES = ['LICENSE', 'THIRD-PARTY-LICENSES.md']

// Copied into the target package's `src/` folder instead of its root.
const SRC_FILES = ['rtl.css']

// Copied as whole directories (not flattened file-by-file), so the
// target ends up with its own `assets/` folder, same as the shared one.
const ASSET_DIRS = ['assets']

const TARGET_PACKAGES = ['icons', 'icons-svg']

function copyFile(src, dest) {
  if (!fs.existsSync(src)) {
    console.warn(`  Missing shared file: ${path.relative(SHARED_SRC, src)}`)
    return false
  }

  fs.mkdirSync(path.dirname(dest), { recursive: true })
  fs.copyFileSync(src, dest)
  return true
}

function copyDir(src, dest) {
  if (!fs.existsSync(src)) {
    console.warn(`  Missing shared directory: ${path.relative(SHARED_SRC, src)}`)
    return false
  }

  // Reset first so a file removed from the shared assets/ folder doesn't
  // linger as a stale copy in the target package after a later sync.
  fs.rmSync(dest, { recursive: true, force: true })
  fs.cpSync(src, dest, { recursive: true })
  return true
}

function copyStaticFiles(targets = TARGET_PACKAGES) {
  let copied = 0
  let skipped = 0

  for (const target of targets) {
    const targetRoot = path.join(PACKAGES_ROOT, target)

    if (!fs.existsSync(targetRoot)) {
      console.warn(`  Skipped package (not found): ${target}`)
      continue
    }

    for (const file of ROOT_FILES) {
      const ok = copyFile(path.join(SHARED_SRC, file), path.join(targetRoot, file))
      ok ? copied++ : skipped++
    }

    for (const file of SRC_FILES) {
      const ok = copyFile(path.join(SHARED_SRC, file), path.join(targetRoot, 'src', file))
      ok ? copied++ : skipped++
    }

    for (const dir of ASSET_DIRS) {
      const ok = copyDir(path.join(SHARED_SRC, dir), path.join(targetRoot, dir))
      ok ? copied++ : skipped++
    }
  }

  return { copied, skipped }
}

function main() {
  const { copied, skipped } = copyStaticFiles()

  console.log('\nSummary:')
  console.log(`   Packages:  ${TARGET_PACKAGES.length}`)
  console.log(`   Copied:    ${copied}`)
  console.log(`   Skipped:   ${skipped}`)
}

export { copyStaticFiles }

if (process?.argv?.[1]?.endsWith('copy-files.js')) {
  main()
}
