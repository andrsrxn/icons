import type { ComponentProps, JSX } from 'react'

/** SVG props with optional `size` and `title` prop */
export interface IconProps extends Omit<
  ComponentProps<'svg'>,
  'role' | 'aria-hidden' | 'focusable' | 'aria-labelledby'
> {
  size?: number | string
}

export type Icon = (props: IconProps) => JSX.Element
