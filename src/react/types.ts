import type { ComponentProps, JSX } from 'react'

/** SVG props with optional `size` prop, so icons keep proportions */
export interface IconProps extends ComponentProps<'svg'> {
  size?: number | string
}

export type Icon = (props: IconProps) => JSX.Element

/** SVG props with optional `size` prop, so Brand icons keep proportions */
export interface BrandIconProps extends ComponentProps<'svg'> {
  size?: number | string
}

export type BrandIcon = (props: BrandIconProps) => JSX.Element

/** SVG props, no `size` prop allowed, only `width` to keep proportions */
export interface FlagIconProps extends ComponentProps<'svg'> {}

export type FlagIcon = (props: FlagIconProps) => JSX.Element
