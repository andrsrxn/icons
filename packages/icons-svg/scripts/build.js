/** biome-ignore-all lint/style/useNamedCaptureGroup: unnecessary */
/** biome-ignore-all lint/performance/useTopLevelRegex: unnecessary */
/** biome-ignore-all lint/style/noParameterAssign: mirrors generate-icons.js */
import fs from 'node:fs'
import { createRequire } from 'node:module'
import path from 'node:path'
import process from 'node:process'
import { optimize } from 'svgo'

const require = createRequire(import.meta.url)
const rawIconsRoot = path.dirname(require.resolve('@andrsrxn/raw-icons/package.json'))
const SRC = { ui: path.join(rawIconsRoot, 'src/ui'), flags: path.join(rawIconsRoot, 'src/flags') }
const DIST = path.resolve(import.meta.dirname, '../dist')

function resetDir(dir) {
  fs.rmSync(dir, { recursive: true, force: true })
  fs.mkdirSync(dir, { recursive: true })
}

function injectWhiteBackground(svg) {
  return svg.replace(/<svg([^>]*)>/u, "<svg$1><rect width='100%' height='100%' fill='white'/>")
}

function previewComment(rawSvg) {
  const base64 = Buffer.from(injectWhiteBackground(rawSvg)).toString('base64')
  return `/**\n * @preview ![img](data:image/svg+xml;base64,${base64})\n */\n`
}

function hasAttr(svg, attrName) {
  return new RegExp(`\\s${attrName}=["'][^"']*["']`, 'iu').test(svg)
}

function stripAllAttr(svg, attrName) {
  return svg.replace(new RegExp(`\\s${attrName}=["'][^"']*["']`, 'giu'), '')
}

// Moves stroke-width / stroke-linecap / stroke-linejoin off individual
// child elements onto the root <svg>, so a consumer's own wrapping
// style can actually override them via inheritance.
export function consolidateStrokeAttrs(svg) {
  const usesStrokeWidth = hasAttr(svg, 'stroke-width')
  const usesLinecapLinejoin = hasAttr(svg, 'stroke-linecap') || hasAttr(svg, 'stroke-linejoin')

  const strokeWidth = usesStrokeWidth
    ? (svg.match(/\sstroke-width=["']([^"']*)["']/iu)?.[1] ?? '1.5')
    : null

  if (usesStrokeWidth) {
    svg = stripAllAttr(svg, 'stroke-width')
  }
  if (usesLinecapLinejoin) {
    svg = stripAllAttr(svg, 'stroke-linecap')
    svg = stripAllAttr(svg, 'stroke-linejoin')
  }

  const attrs = [
    strokeWidth ? `stroke-width='${strokeWidth}'` : '',
    usesLinecapLinejoin ? "stroke-linecap='round' stroke-linejoin='round'" : '',
  ]
    .filter(Boolean)
    .join(' ')

  return { svg, attrs }
}

export function injectStaticAttrs(svg, attrs) {
  return svg.replace(/<svg([^>]*)>/u, `<svg$1 ${attrs}>`)
}

export function buildGroup(group, { prefixIds = false, defaultAttrs } = {}) {
  const outDir = path.join(DIST, group)
  resetDir(outDir)

  const files = fs.readdirSync(SRC[group]).filter(f => f.endsWith('.svg'))
  let written = 0

  for (const file of files) {
    const name = file.replace('.svg', '')
    const rawSvg = fs.readFileSync(path.join(SRC[group], file), 'utf-8')
    let content = rawSvg

    if (prefixIds) {
      content = optimize(content, {
        plugins: [
          { name: 'preset-default' },
          { name: 'prefixIds', params: { prefix: name, delim: '-' } },
        ],
      }).data
    }

    const { svg: strokeNormalized, attrs: strokeAttrs } = consolidateStrokeAttrs(content)
    content = injectStaticAttrs(
      strokeNormalized,
      [strokeAttrs, defaultAttrs(name)].filter(Boolean).join(' ')
    )

    fs.writeFileSync(
      path.join(outDir, `${name}.js`),
      `export const content = ${JSON.stringify(content)}\nexport default content\n`
    )
    fs.writeFileSync(
      path.join(outDir, `${name}.d.ts`),
      `${previewComment(rawSvg)}declare const content: string\nexport default content\n`
    )
    written++
  }

  return { scanned: files.length, written }
}

function main() {
  resetDir(DIST)

  const ui = buildGroup('ui', {
    defaultAttrs: name =>
      `data-slot='icon-ui-${name}' class='icon-ui' aria-hidden='true' focusable='false'`,
  })

  const flags = buildGroup('flags', {
    prefixIds: true,
    defaultAttrs: name => {
      const code = name.replace(/[^a-z0-9]/giu, '').toUpperCase()
      return `data-slot='icon-flag-${name}' class='icon-flag' role='img' aria-label='${code}' focusable='false'`
    },
  })

  console.log('\nSummary:')
  console.log(`   ui:    ${ui.written}/${ui.scanned}`)
  console.log(`   flags: ${flags.written}/${flags.scanned}`)
}

if (process?.argv?.[1]?.endsWith('build.js')) {
  main()
}
