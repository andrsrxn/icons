import type { Icon } from './types'

export const IconLogoSafari: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='logo-safari'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M20.447 11.947a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0Zm-4.788-3.67-5.64 1.751-1.799 5.494 5.591-1.75 1.848-5.494Z'
        clipRule='evenodd'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='m13.986 13.986 2.04-6.119-6.12 2.04-2.039 6.12 6.12-2.04Zm-4.08-4.08 4.08 4.08m-10.54-2.04a8.5 8.5 0 1 0 17 0 8.5 8.5 0 0 0-17 0Z'
      />
    </svg>
  )
}
