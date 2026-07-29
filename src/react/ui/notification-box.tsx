import type { Icon } from '../types'

export const IconNotificationBox: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='notification-box'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M7.588 3.652h7.886l.748 4.612h4.126v8.148c0 1.851 0 2.777-.575 3.352-.575.575-1.5.575-3.351.575H7.588c-1.851 0-2.777 0-3.351-.575-.575-.575-.575-1.5-.575-3.352V7.578c0-1.85 0-2.776.575-3.35.574-.576 1.5-.576 3.35-.576Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M20.348 11.641v4.771c0 1.851 0 2.777-.575 3.352-.575.574-1.5.574-3.351.574H7.588c-1.851 0-2.777 0-3.351-.575-.575-.575-.575-1.5-.575-3.35V7.577c0-1.85 0-2.776.575-3.35.574-.576 1.5-.576 3.35-.576h4.717m8.534 2.254a2.744 2.744 0 1 1-5.488 0 2.744 2.744 0 0 1 5.488 0Z'
      />
    </svg>
  )
}
