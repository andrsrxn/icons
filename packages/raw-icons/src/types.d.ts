interface IconCatalogUIEntry {
  name: string
  categories: string[]
  tags: string[]
  rtl?: boolean
}

interface IconCatalogFlagsEntry {
  name: string
  tags: string[]
}

export type IconCatalogGroup = 'ui' | 'flags'

export type IconCatalogEntry = IconCatalogUIEntry | IconCatalogFlagsEntry

export type IconCatalog = IconCatalogEntry[]
