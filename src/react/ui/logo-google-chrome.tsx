import type { Icon } from '../types'

export const IconLogoGoogleChrome: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='logo-google-chrome'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M20.35 12a8.35 8.35 0 1 1-16.7 0 8.35 8.35 0 0 1 16.7 0Zm-4.871 0a3.479 3.479 0 1 1-6.958 0 3.479 3.479 0 0 1 6.958 0Z'
        clipRule='evenodd'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M12 8.521a3.479 3.479 0 1 0 0 6.958 3.479 3.479 0 0 0 0-6.958Zm0 0h7.592m-4.58 5.218-3.796 6.576m-2.229-6.576L5.191 7.164M20.349 12A8.35 8.35 0 1 1 3.65 12a8.35 8.35 0 0 1 16.7 0Z'
      />
    </svg>
  )
}
