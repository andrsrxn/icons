import type { Icon } from '../types'

export const IconLogoSpotify: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='logo-spotify'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M12 20.33a8.33 8.33 0 1 0 0-16.66 8.33 8.33 0 0 0 0 16.66Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M9.918 15.297a4.425 4.425 0 0 1 4.164 0m-6.94-4.859a10.325 10.325 0 0 1 9.717 0m-8.33 2.43a7.375 7.375 0 0 1 6.942 0M20.33 12a8.33 8.33 0 1 1-16.66 0 8.33 8.33 0 0 1 16.66 0Z'
      />
    </svg>
  )
}
