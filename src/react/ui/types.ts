import type { ComponentProps, JSX } from 'react'

/** SVG props with optional `size` and `title` prop */
export interface IconProps extends ComponentProps<'svg'> {
  size?: number | string
  title?: string
}

export type Icon = (props: IconProps) => JSX.Element
