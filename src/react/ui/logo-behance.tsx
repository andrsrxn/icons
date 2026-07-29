import type { Icon } from '../types'

export const IconLogoBehance: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='logo-behance'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M14.52 13.85a3.084 3.084 0 1 1 6.168 0H14.52Zm-5.09-2.158h-.308a2.313 2.313 0 1 0 0-4.627H4.65v9.87h4.78a2.622 2.622 0 0 0 0-5.243Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M15.136 8.299h4.936M4.65 11.692h4.472m-4.472 0v5.243h4.78a2.622 2.622 0 0 0 0-5.243h-.308m-4.472 0V7.065h4.472a2.313 2.313 0 1 1 0 4.627m10.95 4.01a3.085 3.085 0 0 1-5.552-1.851m0 0a3.086 3.086 0 0 1 3.578-3.045 3.084 3.084 0 0 1 2.59 3.045H14.52Z'
      />
    </svg>
  )
}
