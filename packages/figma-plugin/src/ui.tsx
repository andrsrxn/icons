/** biome-ignore-all lint/performance/noJsxPropsBind: ok */
/** biome-ignore-all lint/style/noMagicNumbers: score numbers */

import catalog from '@andrsrxn/raw-icons/catalog-with-svgs.json'
import type { IconCatalogEntry } from '@andrsrxn/raw-icons/types'
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

function scoreIcon(name: string, tags: string[], query: string): number {
  if (name === query) {
    return 6
  }
  if (tags.includes(query)) {
    return 5
  }
  if (name.startsWith(query)) {
    return 4
  }
  if (tags.some(tag => tag.startsWith(query))) {
    return 3
  }
  if (name.includes(query)) {
    return 2
  }
  return 1
}

function Plugin() {
  const [group, setGroup] = useState<'UI' | 'Flags'>('UI')
  const [query, setQuery] = useState('')
  const deferredQuery = useDeferredValue(query)

  const filtered = useMemo(() => {
    const query = normalizeQuery(deferredQuery?.toLowerCase().trim() ?? '')

    return icons
      .filter((icon: IconCatalogEntry & { svg: string }) => {
        const matchesGroup = !group || icon.group === group.toLowerCase()

        const matchesQuery =
          !query ||
          icon.name.includes(query) ||
          icon.tags.some(tag => tag.includes(query)) ||
          icon.categories.includes(query.toLowerCase())

        return matchesGroup && matchesQuery
      })
      .map((icon: IconCatalogEntry & { svg: string }, index) => {
        if (!query) {
          return { icon, score: 0, index }
        }
        return { icon, score: scoreIcon(icon.name, icon.tags, query), index }
      })
      .sort((a, b) => b.score - a.score || a.index - b.index)
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
              {/* Icon SVG content comes from our own generated catalog, not
                  user input, so rendering it directly is safe here. */}
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
