/** biome-ignore-all lint/style/noMagicNumbers: score numbers */
'use client'

import rawCatalog from '@andrsrxn/raw-icons/catalog.json'
import type { IconCatalog, IconCatalogEntry } from '@andrsrxn/raw-icons/types'
import { parseAsInteger, useQueryState } from 'nuqs'
import { useDeferredValue, useMemo } from 'react'
import { ICON_PAGE_SIZE } from '@/lib/constants/icons'
import { getPaginationRange, isUIIcon } from '@/lib/utils/icons'

const PAGE_SIZE = ICON_PAGE_SIZE

const catalog = rawCatalog as IconCatalog

/**
 * Normalizes a search term so that spaces and dashes are interchangeable.
 * e.g. "x circle" → "x-circle", "arrow-right" → "arrow-right"
 */
const normalizeQuery = (q: string) => q.replace(/\s+/g, '-')

/**
 * Returns a relevance score for an icon given a normalized query.
 * Higher is better:
 *   6 — exact name match
 *   5 — exact tag match
 *   4 — name starts with query
 *   3 — any tag starts with query
 *   2 — name contains query
 *   1 — tag contains query (implicit from filter step)
 */
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

/**
 * Owns every piece of state behind the icon grid (page/category/group/query,
 * all synced to the URL via nuqs) and derives the filtered + paginated data
 * from it. Keeping this out of the component makes IconGrid itself just
 * "render what the hook gives me".
 */
export const useIconCatalog = () => {
  const [page, setPage] = useQueryState('page', parseAsInteger.withDefault(1))
  const [category, setCategoryState] = useQueryState('category')
  const [group, setGroupState] = useQueryState<'ui' | 'flags'>('group', {
    defaultValue: 'ui',
    parse: (value: string) => (value === 'ui' || value === 'flags' ? value : 'ui'),
  })
  const [query, setQueryState] = useQueryState('q')

  // useDeferredValue lets the input update immediately while the (more expensive) filtering trails slightly behind.
  const deferredQuery = useDeferredValue(query)

  const filtered = useMemo(() => {
    // Normalize spaces→dashes so "x circle" matches "x-circle".
    const query = normalizeQuery(deferredQuery?.toLowerCase().trim() ?? '')

    return catalog
      .filter((icon: IconCatalogEntry) => {
        const matchesGroup = !group || icon.group === group

        const matchesCategory =
          !category || (isUIIcon(icon) && icon.categories.includes(category.toLowerCase()))

        const matchesQuery =
          !query || icon.name.includes(query) || icon.tags.some(tag => tag.includes(query))

        return matchesGroup && matchesCategory && matchesQuery
      })
      .map((icon: IconCatalogEntry, index) => {
        if (!query) {
          return { icon, score: 0, index }
        }
        return { icon, score: scoreIcon(icon.name, icon.tags, query), index }
      })
      .sort((a, b) => b.score - a.score || a.index - b.index)
      .map(({ icon }) => icon)
  }, [category, deferredQuery, group])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))

  const pageItems = useMemo(
    () => filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE),
    [filtered, page]
  )

  const pagesToShow = useMemo(() => getPaginationRange(page, totalPages), [page, totalPages])

  // Any change to category/group/query invalidates the current page (fewer
  // results can mean page 3 no longer exists), so each setter resets to 1.
  const setCategory = (value: string | null) => {
    setCategoryState(value)
    setPage(1)
  }

  const setGroup = (value: IconCatalogEntry['group']) => {
    setGroupState(value)
    setCategoryState(null)
    setPage(1)
  }

  const setQuery = (value: string) => {
    setQueryState(value || null)
    setPage(1)
  }

  return {
    page,
    setPage,
    category,
    setCategory,
    group,
    setGroup,
    query: query ?? '',
    setQuery,
    pageItems,
    totalPages,
    pagesToShow,
    catalog,
    // Exposed in case the UI wants to show a subtle "updating…" indicator
    // while a deferred filter is catching up to the latest keystroke.
    isFiltering: query !== deferredQuery,
  }
}

export const useIcon = (iconName: string): IconCatalogEntry | undefined => {
  return catalog.find((icon: IconCatalogEntry) => icon.name === iconName)
}
