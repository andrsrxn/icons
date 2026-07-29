import type { Icon } from './types'

export const IconTextAa: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='text-aa'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M20.064 15.954c0 1.373-1.135 2.486-2.534 2.486-1.4 0-2.535-1.113-2.535-2.486 0-1.373 1.135-2.487 2.535-2.487 1.4 0 2.534 1.114 2.534 2.487Zm-9.192-3.588-1.74-5.311c-.3-.919-1.6-.919-1.9 0l-1.739 5.311a1 1 0 0 0 .95 1.312h3.478a1 1 0 0 0 .95-1.312Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M15.469 10.737c1.51-1.853 4.869-1.136 4.663 2.83-.205 3.966.14 4.907.14 4.907m-8.971-4.796L9.703 8.796c-.627-1.915-.94-2.873-1.52-2.873-.58 0-.894.958-1.521 2.873l-1.598 4.882m6.237 0 1.56 4.762m-1.56-4.763H5.064m-1.56 4.763 1.56-4.763m15 2.277c0 1.373-1.135 2.486-2.534 2.486-1.4 0-2.535-1.113-2.535-2.486 0-1.373 1.135-2.487 2.535-2.487 1.4 0 2.534 1.114 2.534 2.487Z'
      />
    </svg>
  )
}
