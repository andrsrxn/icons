import type { Icon } from '../types'

export const IconLogoWordpress: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='logo-wordpress'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M12 21a9 9 0 0 0 7.853-13.4l-1.684 2.81-1.83-1.839-.294-2.133 2.124-.99A9 9 0 1 0 12 21Z'
        clipRule='evenodd'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M9.5 9h3M4 9h2.5M11 9l3 11 4-9m0 0c.177-.528 1-1.364 1-2.5 0-1.78-.776-2.5-1.875-2.5C16.227 6 16 6.812 16 7.429c0 1.83 2 2.058 2 3.571ZM5.5 9 9 20l3-7m-9-1a9 9 0 1 0 18.001 0A9 9 0 0 0 3 12Z'
      />
    </svg>
  )
}
