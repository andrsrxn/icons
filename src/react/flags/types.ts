import type { ComponentProps, JSX } from 'react'

/** SVG props with optional `size` and `title` prop. Add only `width` to keep 3:2 proportions */
export interface FlagIconProps extends ComponentProps<'svg'> {
  size?: number | string
  title?: string
}

export type FlagIcon = (props: FlagIconProps) => JSX.Element
