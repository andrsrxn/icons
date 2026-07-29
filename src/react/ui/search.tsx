import type { Icon } from '../types'

export const IconSearch: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='search'
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
        d='M15.376 15.353a6.873 6.873 0 1 0-9.824-9.615 6.873 6.873 0 0 0 9.824 9.615Zm0 0 4.9 4.9'
      />
    </svg>
  )
}
