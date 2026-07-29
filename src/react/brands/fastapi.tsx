import type { BrandIcon, BrandIconProps } from './types'
export const IconBrandFastAPI: BrandIcon = ({ className, ...props }: BrandIconProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    aria-label='FastAPI'
    className={`ui-icon-brand ${className ?? ''}`}
    role='img'
    preserveAspectRatio='xMidYMid'
    viewBox='0 0 256 256'
    {...props}>
    <path
      d='M128 0C57.33 0 0 57.33 0 128s57.33 128 128 128 128-57.33 128-128S198.67 0 128 0Zm-6.67 230.605v-80.288H76.699l64.128-124.922v80.288h42.966L121.33 230.605Z'
      fill='#009688'
    />
  </svg>
)
