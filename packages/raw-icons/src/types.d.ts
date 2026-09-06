interface IconCatalogUIEntry {
  name: string
  group: 'ui'
  categories: string[]
  tags: string[]
  rtl?: boolean
}

interface IconCatalogFlagsEntry {
  name: string
  group: 'flags'
  categories: string[]
  tags: string[]
}

export type IconCatalogEntry = IconCatalogUIEntry | IconCatalogFlagsEntry

export type IconCatalog = IconCatalogEntry[]
