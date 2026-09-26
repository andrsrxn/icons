/** biome-ignore-all lint/performance/noJsxPropsBind: ok */
/** biome-ignore-all lint/style/noMagicNumbers: score numbers */

import catalog from '@andrsrxn/raw-icons/catalog-with-svgs.json'
import type { IconCatalogEntry, IconCatalogUIEntry } from '@andrsrxn/raw-icons/types'
import {
  Container,
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

const icons = catalog as CatalogIcon[]

const TABS_OPTIONS: TabsOption[] = [
  { value: 'UI', children: null },
  { value: 'Flags', children: null },
]

const normalizeQuery = (q: string) => q.replace(/\s+/g, '-')

export const isUIIcon = (icon: IconCatalogEntry): icon is IconCatalogUIEntry => {
  return 'categories' in icon
}

/**
 * Returns a relevance score for an icon given a normalized query.
 * 0 means no match.
 * Higher is better:
 *   7 — exact name match
 *   6 — direct variant match (e.g. "file-*")
 *   5 — general prefix match
 *   4 — name contains query
 *   3 — exact tag match
 *   2 — tag starts with query
 *   1 — tag contains query
 */
function scoreIcon(name: string, tags: string[], query: string): number {
  if (name === query) {
    return 7
  }
  if (name.startsWith(`${query}-`)) {
    return 6
  }
  if (name.startsWith(query)) {
    return 5
  }
  if (name.includes(query)) {
    return 4
  }
  if (tags.includes(query)) {
    return 3
  }
  if (tags.some(tag => tag.startsWith(query))) {
    return 2
  }
  if (tags.some(tag => tag.includes(query))) {
    return 1
  }
  return 0
}

function Plugin() {
  const [group, setGroup] = useState<'UI' | 'Flags'>('UI')
  const [query, setQuery] = useState('')
  const deferredQuery = useDeferredValue(query)

  const filtered = useMemo(() => {
    const q = normalizeQuery(deferredQuery?.toLowerCase().trim() ?? '')
    const isUI = group === 'UI'

    const groupIcons = icons.filter(icon => (isUI ? isUIIcon(icon) : !isUIIcon(icon)))

    if (!q) {
      return groupIcons
    }

    const scored: { icon: CatalogIcon; score: number; index: number }[] = []

    for (let i = 0; i < groupIcons.length; i++) {
      const icon = groupIcons[i]
      if (!icon) {
        continue
      }
      const score = scoreIcon(icon.name, icon.tags, q)
      if (score > 0) {
        scored.push({ icon, score, index: i })
      }
    }

    return scored
      .sort((a, b) => {
        if (b.score !== a.score) {
          return b.score - a.score
        }
        // Base icons (no hyphen) before variants at the same score tier
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

      <div className={styles.grid}>
        {filtered.length === 0 ? (
          <Container space='medium' style={{ gridColumn: '1 / -1' }}>
            <VerticalSpace space='medium' />
            <Text>No icons match your search.</Text>
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
              {/** biome-ignore lint/security/noDangerouslySetInnerHtml: secure */}
              {/** biome-ignore lint/style/useNamingConvention: secure */}
              <span className={styles.iconPreview} dangerouslySetInnerHTML={{ __html: icon.svg }} />
            </button>
          ))
        )}
      </div>
    </Fragment>
  )
}

export default render(Plugin)
