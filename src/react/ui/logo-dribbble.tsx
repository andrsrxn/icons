import type { Icon } from './types'

export const IconLogoDribbble: Icon = ({ size = 24, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='logo-dribbble'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M12 20.352a8.352 8.352 0 1 0 0-16.704 8.352 8.352 0 0 0 0 16.704Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M7.041 18.722a13.914 13.914 0 0 1 13.31-6.653M17.22 5.483a13.892 13.892 0 0 1-10.788 5.125c-.88 0-1.759-.083-2.624-.247M8.34 4.49a13.912 13.912 0 0 1 6.873 12.006c0 1.137-.138 2.27-.412 3.374m5.55-7.87a8.352 8.352 0 1 1-16.703 0 8.352 8.352 0 0 1 16.704 0Z'
      />
    </svg>
  )
}
