/** biome-ignore-all lint/style/noMagicNumbers: score numbers */
'use client'

import rawCatalog from '@andrsrxn/raw-icons/catalog.json'
import type { IconCatalog, IconCatalogEntry, IconCatalogGroup } from '@andrsrxn/raw-icons/types'
import { parseAsInteger, useQueryState } from 'nuqs'
import { useCallback, useMemo, useState } from 'react'
import { useDebounce } from 'react-use'
import { ICON_PAGE_SIZE } from '@/lib/constants/icons'
import { getPaginationRange, isUIIcon } from '@/lib/utils/icons'

const PAGE_SIZE = ICON_PAGE_SIZE

const catalog = rawCatalog as IconCatalog

const UI_ICONS = catalog.filter(isUIIcon)
const FLAGS_ICONS = catalog.filter(icon => !isUIIcon(icon))

const ICONS_BY_GROUP: Record<IconCatalogGroup, IconCatalogEntry[]> = {
  ui: UI_ICONS,
  flags: FLAGS_ICONS,
}

const UI_ICON_MAP = new Map<string, IconCatalogEntry>(UI_ICONS.map(icon => [icon.name, icon]))
const FLAGS_ICON_MAP = new Map<string, IconCatalogEntry>(FLAGS_ICONS.map(icon => [icon.name, icon]))

const ICON_MAPS_BY_GROUP: Record<IconCatalogGroup, Map<string, IconCatalogEntry>> = {
  ui: UI_ICON_MAP,
  flags: FLAGS_ICON_MAP,
}

/**
 * Normalizes search text so spaces and hyphens are interchangeable.
 * e.g. "north america" → "north america"
 *      "arrow-right"   → "arrow right"
 */
const normalizeSearchText = (value: string) =>
  value
    .toLowerCase()
    .replace(/[-\s]+/g, ' ')
    .trim()

/**
 * Returns a relevance score for an icon given a query.
 * Every query word must match somewhere in the searchable fields.
 * Partial-word matches are supported.
 */
function scoreIcon(icon: IconCatalogEntry, query: string): number {
  const name = normalizeSearchText(icon.name)
  const normalizedQuery = normalizeSearchText(query)
  const queryWords = normalizedQuery.split(' ').filter(Boolean)

  if (queryWords.length === 0) {
    return 0
  }

  // Preserve the highest relevance for exact and name-based matches.
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

  // Every query word must match at least one word in the icon metadata.
  // Includes partial-word matches and matches across multiple tags/categories.
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

interface ScoredIcon {
  icon: IconCatalogEntry
  score: number
  index: number
}

function compareScoredIcons(a: ScoredIcon, b: ScoredIcon): number {
  if (b.score !== a.score) {
    return b.score - a.score
  }

  // When prefix-matching (e.g. typing "fil"), prioritize base root icons without hyphens
  const aIsBase = !a.icon.name.includes('-')
  const bIsBase = !b.icon.name.includes('-')
  if (aIsBase !== bIsBase) {
    return aIsBase ? -1 : 1
  }

  // Sibling variants preserve natural alphabetical / catalog order
  return a.index - b.index
}

function searchAndScoreIcons(icons: IconCatalogEntry[], query: string): IconCatalogEntry[] {
  const scored: ScoredIcon[] = []

  for (let i = 0; i < icons.length; i++) {
    const icon = icons[i]
    const score = icon ? scoreIcon(icon, query) : 0
    if (icon && score > 0) {
      scored.push({ icon, score, index: i })
    }
  }

  return scored.sort(compareScoredIcons).map(({ icon }) => icon)
}

function filterByCategory(icons: IconCatalogEntry[], category: string | null): IconCatalogEntry[] {
  if (!category) {
    return icons
  }
  const normalizedCategory = category.toLowerCase()
  return icons.filter(icon => isUIIcon(icon) && icon.categories.includes(normalizedCategory))
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
  const [debouncedQuery, setDebouncedQuery] = useState(query)
  useDebounce(
    () => {
      setDebouncedQuery(query)
    },
    250,
    [query]
  )

  // continue

  const filtered = useMemo(() => {
    const baseIcons = group && group in ICONS_BY_GROUP ? ICONS_BY_GROUP[group] : catalog
    const categoryFiltered = filterByCategory(baseIcons, category)
    const q = normalizeSearchText(debouncedQuery?.toLowerCase().trim() ?? '')

    return q ? searchAndScoreIcons(categoryFiltered, q) : categoryFiltered
  }, [category, debouncedQuery, group])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const safePage = Math.min(Math.max(1, page), totalPages)

  const pageItems = useMemo(
    () => filtered.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE),
    [filtered, safePage]
  )

  const pagesToShow = useMemo(
    () => getPaginationRange(safePage, totalPages),
    [safePage, totalPages]
  )

  // Any change to category/group/query invalidates the current page (fewer
  // results can mean page 3 no longer exists), so each setter resets to 1.
  const setCategory = useCallback(
    (value: string | null) => {
      setCategoryState(value)
      setPage(1)
    },
    [setCategoryState, setPage]
  )

  const setGroup = useCallback(
    (value: IconCatalogGroup) => {
      setGroupState(value)
      setCategoryState(null)
      setPage(1)
    },
    [setGroupState, setCategoryState, setPage]
  )

  const setQuery = useCallback(
    (value: string) => {
      setQueryState(value || null)
      setPage(1)
    },
    [setQueryState, setPage]
  )

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
    isFiltering: query !== debouncedQuery,
  }
}

export const useIcon = (
  iconName: string,
  group: IconCatalogGroup
): IconCatalogEntry | undefined => {
  return ICON_MAPS_BY_GROUP[group]?.get(iconName)
}
