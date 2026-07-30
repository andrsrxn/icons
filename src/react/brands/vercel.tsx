import type { BrandIcon, BrandIconProps } from './types'
export const IconBrandVercel: BrandIcon = ({ className, size = 24, ...props }: BrandIconProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    aria-label='Vercel'
    className={`ui-icon-brand ${className ?? ''}`}
    width={size}
    height={size}
    preserveAspectRatio='xMidYMid'
    role='img'
    viewBox='0 0 256 222'
    {...props}>
    <path fill='var(--ui-icon-fill-monochrome)' d='m128 0 128 221.705H0z' />
  </svg>
)
