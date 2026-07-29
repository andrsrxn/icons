import type { BrandIcon, BrandIconProps } from '../types'
export const IconBrandAdobeLightroom: BrandIcon = ({ className, ...props }: BrandIconProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    aria-label='AdobeLightroom'
    className={`ui-icon-brand ${className ?? ''}`}
    preserveAspectRatio='xMidYMid'
    role='img'
    viewBox='0 0 83 80'
    {...props}>
    <g clipPath='url(#lightroom__clip0_906_1810)'>
      <path
        fill='#001e36'
        d='M67.521 0H14.53C6.505 0 0 6.505 0 14.53v50.94C0 73.495 6.505 80 14.53 80h52.99c8.025 0 14.53-6.505 14.53-14.53V14.53C82.051 6.505 75.546 0 67.521 0'
      />
      <path
        fill='#31a8ff'
        d='M43.09 56.541H21.405q-.55 0-.55-.605V20.984a.438.438 0 0 1 .495-.496h6.715a.34.34 0 0 1 .385.386v28.732h15.798q.495 0 .385.495l-.99 5.945a.53.53 0 0 1-.221.413.7.7 0 0 1-.33.082m5.448-27.356h6a.75.75 0 0 1 .715.55c.13.242.223.502.275.771q.115.532.165 1.074.055.578.055 1.238a12.9 12.9 0 0 1 3.66-2.945 10.3 10.3 0 0 1 5.092-1.238.438.438 0 0 1 .495.495v6.66q0 .387-.55.386a13.9 13.9 0 0 0-6.468 1.156 5.8 5.8 0 0 0-1.844 1.265v17.45q0 .495-.44.495h-6.66a.486.486 0 0 1-.55-.551V37.056a125 125 0 0 0-.11-5.229 17.5 17.5 0 0 0-.22-2.257.317.317 0 0 1 .384-.385'
      />
    </g>
    <defs>
      <clipPath id='lightroom__clip0_906_1810'>
        <path fill='#fff' d='M0 0h82.051v80H0z' />
      </clipPath>
    </defs>
  </svg>
)
