import type { Icon } from './types'

export const IconLogoWhatsapp: Icon = ({ size = 24, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='logo-whatsapp'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M12 3.755a8.245 8.245 0 0 0-7.138 12.374L3.79 19.34a.687.687 0 0 0 .869.87l3.211-1.072A8.245 8.245 0 1 0 12 3.756Zm2.061 13.055a6.871 6.871 0 0 1-6.87-6.871A2.749 2.749 0 0 1 9.938 7.19l1.374 2.749-1.058 1.586a4.14 4.14 0 0 0 2.22 2.22l1.586-1.058 2.749 1.375a2.748 2.748 0 0 1-2.749 2.748Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M7.19 9.939A2.749 2.749 0 0 1 9.94 7.19l1.374 2.749-1.058 1.586a4.14 4.14 0 0 0 2.22 2.22l1.586-1.058 2.749 1.375a2.749 2.749 0 0 1-2.749 2.748 6.87 6.87 0 0 1-6.87-6.871Z'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M7.871 19.139a8.245 8.245 0 1 0-3.006-3.007L3.791 19.34a.687.687 0 0 0 .869.87l3.211-1.072Z'
      />
    </svg>
  )
}
