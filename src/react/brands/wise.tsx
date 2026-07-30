import type { BrandIcon, BrandIconProps } from './types'
export const IconBrandWise: BrandIcon = ({ className, size = 24, ...props }: BrandIconProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    aria-label='Windows'
    className={`ui-icon-brand ${className ?? ''}`}
    width={size}
    height={size}
    {...props}
    preserveAspectRatio='xMidYMid'
    role='img'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    x='0px'
    y='0px'
    viewBox='0 0 51.1 48.6'
    enableBackground='new 0 0 51.1 48.6'
    xmlSpace='preserve'>
    <g>
      <path
        fill='var(--ui-icon-fill-wise)'
        d='M13.8,14.6L0,30.8h24.7l2.8-7.6H16.9l6.5-7.5l0-0.2l-4.2-7.2h18.9L23.4,48.6h10L51.1,0H5.4L13.8,14.6
		L13.8,14.6z'
      />
    </g>
  </svg>
)
