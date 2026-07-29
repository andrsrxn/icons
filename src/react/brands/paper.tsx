import type { BrandIcon, BrandIconProps } from './types'
export const IconBrandPaper: BrandIcon = ({ className, size, ...props }: BrandIconProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    aria-label='Paper'
    className={`ui-icon-brand ${className ?? ''}`}
    width={size ?? 'var(--ui-icon-size, 24)'}
    height={size ?? 'var(--ui-icon-size, 24)'}
    preserveAspectRatio='xMidYMid'
    role='img'
    xmlSpace='preserve'
    viewBox='0 0 39 39'
    {...props}>
    <path d='M39 24H24V6H6V24H24V39H0V6H6V0H39V24Z' fill='#81ADEC' />
  </svg>
)
