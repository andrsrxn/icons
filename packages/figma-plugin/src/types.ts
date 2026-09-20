import type { IconCatalogEntry } from '@andrsrxn/raw-icons/types'

export type CatalogIcon = IconCatalogEntry & { svg: string }

// Message sent from the UI thread to the main thread when an icon is clicked
export interface InsertIconHandler {
  name: 'INSERT_ICON'
  handler: (icon: Pick<CatalogIcon, 'name' | 'svg'>) => void
}
