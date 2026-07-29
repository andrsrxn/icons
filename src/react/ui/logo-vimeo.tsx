import type { Icon } from '../types'

export const IconLogoVimeo: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='logo-vimeo'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='m3 8.5 1 1S5.5 8.398 6 9c.509.609 1.863 7.65 2.5 9 .556 1.184 1.978 2.89 4 1.5C14.5 18 20 14 21 8c.444-2.661-1-4-2.5-4-2 0-4.047 1.202-4.5 4 2.05-1.254 2.551 1 1.5 3-1.052 2-2 3-2.5 3-.49 0-.924-1.165-1.5-3.5-.59-2.42-.5-6.5-3-6.5S3 8.5 3 8.5Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='m3 8.5 1 1S5.5 8.398 6 9c.509.609 1.863 7.65 2.5 9 .556 1.184 1.978 2.89 4 1.5C14.5 18 20 14 21 8c.444-2.661-1-4-2.5-4-2 0-4.047 1.202-4.5 4 2.05-1.254 2.551 1 1.5 3-1.052 2-2 3-2.5 3-.49 0-.924-1.165-1.5-3.5-.59-2.42-.5-6.5-3-6.5S3 8.5 3 8.5Z'
      />
    </svg>
  )
}
