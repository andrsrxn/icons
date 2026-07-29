import type { ComponentProps, JSX } from 'react'

/** SVG props with optional `size` prop, so icons keep proportions */
export interface IconProps extends ComponentProps<'svg'> {
  size?: number | string
}

export type Icon = (props: IconProps) => JSX.Element
