import type { ComponentProps, JSX } from 'react'

export interface IconProps extends ComponentProps<'svg'> {
  size?: number | string
}

export type Icon = (props: IconProps) => JSX.Element
