import type { Icon } from './types'

export const IconCheckDouble: Icon = ({ size = 24, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='check-double'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='m3.798 13.565.612 1.221c1.576 3.144 2.364 4.716 3.605 4.71 1.24-.005 2.015-1.584 3.563-4.742l4.627-9.442m-8.41 8.253.612 1.221c1.576 3.144 2.364 4.716 3.604 4.71 1.241-.005 2.015-1.584 3.563-4.742l4.628-9.442'
      />
    </svg>
  )
}
