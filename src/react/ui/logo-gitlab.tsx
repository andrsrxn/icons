import type { Icon } from './types'

export const IconLogoGitlab: Icon = ({ size = 24, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='logo-gitlab'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M17.733 4.728 16.05 8.346h-8.1L6.268 4.728a.336.336 0 0 0-.642.032l-1.701 6.513 8.077 4.663 8.076-4.663-1.701-6.513a.336.336 0 0 0-.644-.032Z'
        clipRule='evenodd'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M20.078 11.273 18.377 4.76a.336.336 0 0 0-.644-.032L16.05 8.346h-8.1L6.268 4.728a.336.336 0 0 0-.642.032l-1.701 6.513m4.661 6.635 3.223 2.276a.334.334 0 0 0 .387 0l3.222-2.276 3.046-2.152a4.192 4.192 0 0 0 1.614-4.483m0 0L8.586 17.908m-4.661-6.635a4.192 4.192 0 0 0 1.614 4.483l3.047 2.152m-4.661-6.635 11.493 6.636'
      />
    </svg>
  )
}
