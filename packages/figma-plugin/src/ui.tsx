/** biome-ignore-all lint/performance/noJsxPropsBind: ok */
/** biome-ignore-all lint/style/noMagicNumbers: score numbers */

import catalog from '@andrsrxn/raw-icons/catalog-with-svgs.json'
import type { IconCatalogEntry, IconCatalogUIEntry } from '@andrsrxn/raw-icons/types'
import {
  Container,
  Link,
  render,
  SearchTextbox,
  Tabs,
  type TabsOption,
  Text,
  VerticalSpace,
} from '@create-figma-plugin/ui'
import { emit } from '@create-figma-plugin/utilities'
import { Fragment, h } from 'preact'
import { useDeferredValue } from 'preact/compat'
import { useMemo, useState } from 'preact/hooks'
import type { CatalogIcon, InsertIconHandler } from './types'
import styles from './ui.css'

const SVG_WIDTH_REGEX = /\bwidth="([\d.]+)(?:px)?"/
const SVG_HEIGHT_REGEX = /\bheight="([\d.]+)(?:px)?"/
const SVG_REPLACE_WIDTH_REGEX = /\bwidth="[\d.]+(?:px)?"/
const SVG_REPLACE_HEIGHT_REGEX = /\bheight="[\d.]+(?:px)?"/

export const isUIIcon = (icon: IconCatalogEntry): icon is IconCatalogUIEntry => {
  return 'categories' in icon
}

function normalizeSvgTo24(svg: string): string {
  const widthMatch = svg.match(SVG_WIDTH_REGEX)
  const heightMatch = svg.match(SVG_HEIGHT_REGEX)

  if (widthMatch && heightMatch) {
    const origWidth = Number.parseFloat(widthMatch[1] ?? '0')
    const origHeight = Number.parseFloat(heightMatch[1] ?? '0')
    if (origWidth > 0 && Math.abs(origWidth - 24) > 0.01) {
      const newHeight = Number(((origHeight * 24) / origWidth).toFixed(2))
      return svg
        .replace(SVG_REPLACE_WIDTH_REGEX, 'width="24"')
        .replace(SVG_REPLACE_HEIGHT_REGEX, `height="${newHeight}"`)
    }
  }
  return svg
}

const icons = (catalog as CatalogIcon[]).map(icon =>
  isUIIcon(icon) ? icon : { ...icon, svg: normalizeSvgTo24(icon.svg) }
)

const TABS_OPTIONS: TabsOption[] = [
  { value: 'UI', children: null },
  { value: 'Flags', children: null },
]

const normalizeSearchText = (value: string) =>
  value
    .toLowerCase()
    .replace(/[-\s]+/g, ' ')
    .trim()

/**
 * Returns a relevance score for an icon given a query.
 * Every query word must match somewhere in the searchable fields.
 *
 * 7 — exact name match
 * 6 — direct variant match
 * 5 — general name prefix match
 * 4 — name contains the complete query
 * 3 — all query words match the name
 * 2 — all query words match tags
 * 1 — all query words match tags or categories
 * 0 — no match
 */
function scoreIcon(icon: CatalogIcon, query: string): number {
  const name = normalizeSearchText(icon.name)
  const normalizedQuery = normalizeSearchText(query)
  const queryWords = normalizedQuery.split(' ').filter(Boolean)

  if (queryWords.length === 0) {
    return 0
  }

  if (name === normalizedQuery) {
    return 7
  }

  if (name.startsWith(`${normalizedQuery} `)) {
    return 6
  }

  if (name.startsWith(normalizedQuery)) {
    return 5
  }

  if (name.includes(normalizedQuery)) {
    return 4
  }

  const nameWords = name.split(' ')
  const tagWords = icon.tags.flatMap(tag => normalizeSearchText(tag).split(' '))

  const categoryWords = isUIIcon(icon)
    ? icon.categories.flatMap(category => normalizeSearchText(category).split(' '))
    : []

  const allWordsMatch = (words: string[]) =>
    queryWords.every(queryWord => words.some(word => word.includes(queryWord)))

  if (allWordsMatch(nameWords)) {
    return 3
  }

  if (allWordsMatch(tagWords)) {
    return 2
  }

  if (allWordsMatch([...tagWords, ...categoryWords])) {
    return 1
  }

  return 0
}

function Plugin() {
  const [group, setGroup] = useState<'UI' | 'Flags'>('UI')
  const [query, setQuery] = useState('')
  const deferredQuery = useDeferredValue(query)

  const filtered = useMemo(() => {
    const q = normalizeSearchText(deferredQuery)
    const isUI = group === 'UI'

    const groupIcons = icons.filter(icon => (isUI ? isUIIcon(icon) : !isUIIcon(icon)))

    if (!q) {
      return groupIcons
    }

    const scored: {
      icon: CatalogIcon
      score: number
      index: number
    }[] = []

    for (let i = 0; i < groupIcons.length; i++) {
      const icon = groupIcons[i]
      if (!icon) {
        continue
      }

      const score = scoreIcon(icon, q)

      if (score > 0) {
        scored.push({ icon, score, index: i })
      }
    }

    return scored
      .sort((a, b) => {
        if (b.score !== a.score) {
          return b.score - a.score
        }

        const aIsBase = !a.icon.name.includes('-')
        const bIsBase = !b.icon.name.includes('-')

        if (aIsBase !== bIsBase) {
          return aIsBase ? -1 : 1
        }

        return a.index - b.index
      })
      .map(({ icon }) => icon)
  }, [group, deferredQuery])

  function handleInsert(icon: CatalogIcon) {
    emit<InsertIconHandler>('INSERT_ICON', { name: icon.name, svg: icon.svg })
  }

  return (
    <Fragment>
      <Container space='extraSmall'>
        <Tabs
          value={group}

          onValueChange={value => setGroup(value as 'UI' | 'Flags')}
          options={TABS_OPTIONS}
        />
      </Container>
      <Container space='small'>
        <VerticalSpace space='small' />

        <SearchTextbox
          value={query}
          onValueInput={setQuery}
          placeholder={`Search ${group === 'UI' ? 'icons' : 'flags'}...`}
        />
        <VerticalSpace space='small' />
      </Container>
      <div className={styles.gridContainer}>
        <Container space='small'>
          <Text className={styles.iconLength}>
            {filtered.length} {group === 'UI' ? 'icons' : 'flags'}
          </Text>
        </Container>
        <div className={styles.grid}>
          {filtered.length === 0 ? (
            <Container space='extraSmall' style={{ gridColumn: '1 / -1' }}>
              <VerticalSpace space='medium' />
              <Text className={styles.iconLength}>
                No {group === 'UI' ? 'icons' : 'flags'} match your search.
              </Text>
              <VerticalSpace space='medium' />
            </Container>
          ) : (
            filtered.map(icon => (
              <button
                key={icon.name}
                type='button'
                className={styles.iconButton}
                title={icon.name}
                onClick={() => handleInsert(icon)}>
                <span
                  className={styles.iconPreview}
                  // biome-ignore lint/security/noDangerouslySetInnerHtml: It's a self generated list of icons
                  // biome-ignore lint/style/useNamingConvention: react api
                  dangerouslySetInnerHTML={{ __html: icon.svg }}
                />
              </button>
            ))
          )}
        </div>
        <Container space='small'>
          <Text className={styles.footer}>
            All icons and documentation at{' '}
            <Link href='https://icons.andrsrxn.com/'>icons.andrsrxn.com</Link>
          </Text>
        </Container>
      </div>
    </Fragment>
  )
}

export default render(Plugin)
