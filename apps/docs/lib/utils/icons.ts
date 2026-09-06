/** biome-ignore-all lint/style/noMagicNumbers: pagination sequence */

import type { IconCatalogEntry, IconCatalogUIEntry } from '@andrsrxn/raw-icons/types'

const MAX_PAGES_TO_SHOW = 4

/**
 * Returns the list of page numbers to render in the pagination bar.
 * Pure function (no hooks/state) so it's trivial to unit test in isolation.
 */
export const getPaginationRange = (page: number, totalPages: number): number[] => {
  if (totalPages <= MAX_PAGES_TO_SHOW) {
    return Array.from({ length: totalPages }, (_, i) => i + 1)
  }

  if (page <= 3) {
    return [1, 2, 3, 4]
  }

  if (page >= totalPages - 2) {
    return [totalPages - 3, totalPages - 2, totalPages - 1, totalPages]
  }

  return [page - 2, page - 1, page, page + 1]
}

export const isUIIcon = (icon: IconCatalogEntry): icon is IconCatalogUIEntry => {
  return icon.group === 'ui'
}

export const getIconComponentName = (iconName: string, group: IconCatalogEntry['group']) => {
  if (group === 'ui') {
    return `Icon${iconName
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('')}`
  }

  const cleanCodeUpper = iconName.replace(/[^a-z0-9]/gu, '').toUpperCase()
  return `IconFlag${cleanCodeUpper}`
}
