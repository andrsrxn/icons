import type { BrandIcon, BrandIconProps } from '../types'
export const IconBrandTidal: BrandIcon = ({ className, ...props }: BrandIconProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    fill='none'
    aria-label='Tidal'
    className={`ui-icon-brand ${className ?? ''}`}
    preserveAspectRatio='xMidYMid'
    role='img'
    viewBox='0 0 1001 667'
    {...props}>
    <path
      fill='var(--ui-icon-fill-monochrome)'
      d='M84 83.5.5 167l83 83c45.6 45.6 83.4 83 84 83 .5 0 38.3-37.4 84-83l83-83 83 83 83 83-83.5 83.5-83.5 83.5 83.5 83.5 83.5 83.5 83.5-83.5 83.5-83.5-83.3-83.3-83.2-83.2 83.3-83.3 83.2-83.2 83.3 83.2 83.2 83.3 83.5-83.5 83.5-83.5L917.5 83 834-.5 750.5 83 667 166.5l-83.3-83.3L500.5 0l-83.3 83.2-83.2 83.3-83.3-83.3L167.5 0z'
    />
  </svg>
)
