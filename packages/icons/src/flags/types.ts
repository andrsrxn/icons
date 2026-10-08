import type { ComponentProps, JSX } from 'react'

/** SVG props with optional `size` and `cover` prop. Add only `width` to keep 3:2 proportions, use `cover` to fill entire square crop */
export interface FlagIconProps extends ComponentProps<'svg'> {
  size?: number | string
  cover?: boolean
}

export type FlagIcon = (props: FlagIconProps) => JSX.Element
