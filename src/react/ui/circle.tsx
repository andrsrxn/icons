import type { Icon } from './types'

export const IconCircle: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='circle'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M20.48 12a8.48 8.48 0 1 1-16.96 0 8.48 8.48 0 0 1 16.96 0Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeWidth='1.5'
        d='M20.48 12a8.48 8.48 0 1 1-16.96 0 8.48 8.48 0 0 1 16.96 0Z'
      />
    </svg>
  )
}
