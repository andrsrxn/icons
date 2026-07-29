import type { ComponentProps, JSX } from 'react'

/** SVG props, no `size` prop allowed, only `width` to keep proportions */
export interface FlagIconProps extends ComponentProps<'svg'> {}

export type FlagIcon = (props: FlagIconProps) => JSX.Element
