import type { Icon } from './types'

export const IconSearchPlus: Icon = ({ size = 24, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='search-plus'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M17.337 10.546a6.873 6.873 0 1 1-13.746 0 6.873 6.873 0 0 1 13.746 0Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M7.171 10.546h6.585m-3.292-3.293v6.585m4.912 1.515a6.873 6.873 0 1 0-9.824-9.615 6.873 6.873 0 0 0 9.824 9.615Zm0 0 4.9 4.9'
      />
    </svg>
  )
}
