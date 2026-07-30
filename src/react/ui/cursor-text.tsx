import type { Icon } from './types'

export const IconCursorText: Icon = ({ size = 24, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='cursor-text'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M8.882 20.335c1.05 0 1.575 0 1.981-.192a2 2 0 0 0 .952-.952c.192-.406.192-.931.192-1.981V6.79c0-1.05 0-1.575-.192-1.981a2 2 0 0 0-.952-.952c-.406-.193-.931-.193-1.981-.193m6.236 16.671c-1.05 0-1.575 0-1.981-.192a2 2 0 0 1-.952-.952c-.192-.406-.192-.931-.192-1.981V6.79c0-1.05 0-1.575.192-1.981a2 2 0 0 1 .952-.952c.406-.193.931-.193 1.981-.193'
      />
    </svg>
  )
}
