interface IconCatalogUIEntry {
  n: string
  c: string[]
  t: string[]
  rtl?: boolean
}

interface IconCatalogFlagsEntry {
  n: string
  t: string[]
}

export type IconCatalogGroup = 'ui' | 'flags'

export type IconCatalogEntry = IconCatalogUIEntry | IconCatalogFlagsEntry

export type IconCatalog = IconCatalogEntry[]
