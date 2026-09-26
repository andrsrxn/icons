/** biome-ignore-all lint/style/noMagicNumbers: score numbers */
'use client'

import rawCatalog from '@andrsrxn/raw-icons/catalog.json'
import type { IconCatalog, IconCatalogEntry, IconCatalogGroup } from '@andrsrxn/raw-icons/types'
import { parseAsInteger, useQueryState } from 'nuqs'
import { useCallback, useDeferredValue, useMemo } from 'react'
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
const ICON_MAP = new Map<string, IconCatalogEntry>(catalog.map(icon => [icon.name, icon]))

/**
 * Normalizes a search term so that spaces and dashes are interchangeable.
 * e.g. "x circle" → "x-circle", "arrow-right" → "arrow-right"
 */
const normalizeQuery = (q: string) => q.replace(/\s+/g, '-')

/**
 * Returns a relevance score for an icon given a normalized query.
 * 0 means no match.
 * Higher is better:
 *   7 — exact name match (e.g. "file")
 *   6 — direct variant match (e.g. "file-*")
 *   5 — general prefix match (e.g. "files", or "fil" matching "file")
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
    const baseIcons = group && group in ICONS_BY_GROUP ? ICONS_BY_GROUP[group] : catalog
    const normalizedCategory = category?.toLowerCase()

    // 1. Filter by category if specified
    const categoryFiltered = normalizedCategory
      ? baseIcons.filter(icon => isUIIcon(icon) && icon.categories.includes(normalizedCategory))
      : baseIcons

    // Normalize spaces→dashes so "x circle" matches "x-circle".
    const q = normalizeQuery(deferredQuery?.toLowerCase().trim() ?? '')

    // If there is no search query, skip scoring and sorting passes
    if (!q) {
      return categoryFiltered
    }

    // 2. Score and sort matches in a single pass
    const scored: { icon: IconCatalogEntry; score: number; index: number }[] = []

    for (let i = 0; i < categoryFiltered.length; i++) {
      const icon = categoryFiltered[i]
      const score = icon ? scoreIcon(icon.name, icon.tags, q) : 0
      if (icon && score > 0) {
        scored.push({ icon, score, index: i })
      }
    }

    return scored
      .sort((a, b) => {
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
      })
      .map(({ icon }) => icon)
  }, [category, deferredQuery, group])

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
    isFiltering: query !== deferredQuery,
  }
}

export const useIcon = (iconName: string): IconCatalogEntry | undefined => {
  return ICON_MAP.get(iconName)
}
