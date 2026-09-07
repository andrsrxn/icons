/** biome-ignore-all lint/performance/noNamespaceImport: only workaround to catalog generation */
import * as Icons from '@andrsrxn/icons'
import * as Flags from '@andrsrxn/icons/flags'
import type { FlagIcon } from '@andrsrxn/icons/flags/types'
import type { Icon } from '@andrsrxn/icons/types'

export const ICON_LOOKUP = {
  ...(Icons satisfies Record<string, Icon>),
  ...(Flags satisfies Record<string, FlagIcon>),
}
