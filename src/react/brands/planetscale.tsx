import type { BrandIcon, BrandIconProps } from './types'
export const IconBrandPlanetScale: BrandIcon = ({
  className,
  size = 24,
  ...props
}: BrandIconProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    aria-label='PlanetScale'
    className={`ui-icon-brand ${className ?? ''}`}
    width={size}
    height={size}
    preserveAspectRatio='xMidYMid'
    role='img'
    xmlSpace='preserve'
    viewBox='0 0 256 256'
    {...props}>
    <path
      fill='var(--ui-icon-fill-monochrome)'
      d='M256 128a128 128 0 01-128 128zM128 0c52 0 96.7 31 116.8 75.5L75.5 244.8c-7.3-3.3-14.2-7.2-20.7-11.7L160 128h-32l-90.5 90.5A128 128 0 01128 0z'
    />
  </svg>
)
