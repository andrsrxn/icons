import type { ComponentProps, JSX } from 'react'

/** SVG props with optional `size` prop, so Brand icons keep proportions */
export interface BrandIconProps extends ComponentProps<'svg'> {
  size?: number | string
}

export type BrandIcon = (props: BrandIconProps) => JSX.Element
