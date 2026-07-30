import type { ComponentProps, JSX } from 'react'

/** SVG props with optional `size` prop. Add only `width` to keep 3:2 proportions */
export interface FlagIconProps extends ComponentProps<'svg'> {
  size?: number | string
}

export type FlagIcon = (props: FlagIconProps) => JSX.Element
