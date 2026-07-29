import type { Icon } from '../types'

export const IconBroadcast: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='broadcast'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M13.953 12a1.953 1.953 0 1 1-3.906 0 1.953 1.953 0 0 1 3.906 0Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M16.202 8.818c0 .01 1.005 1.3 1.005 3.182 0 2.006-1.005 3.182-1.005 3.182M7.798 8.818c0 .01-1.005 1.3-1.005 3.182 0 2.006 1.005 3.182 1.005 3.182m10.82-9.04c0 .018 1.85 2.392 1.85 5.858 0 3.694-1.85 5.858-1.85 5.858M5.382 6.142c0 .018-1.849 2.392-1.849 5.858 0 3.694 1.85 5.858 1.85 5.858M13.951 12a1.953 1.953 0 1 1-3.905 0 1.953 1.953 0 0 1 3.906 0Z'
      />
    </svg>
  )
}
