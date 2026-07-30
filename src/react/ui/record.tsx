import type { Icon } from './types'

export const IconRecord: Icon = ({ size = 24, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='record'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M17.154 12a5.154 5.154 0 1 1-10.308 0 5.154 5.154 0 0 1 10.308 0Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeWidth='1.5'
        d='M17.154 12a5.154 5.154 0 1 1-10.308 0 5.154 5.154 0 0 1 10.308 0Z'
      />
      <path
        stroke='currentColor'
        strokeWidth='1.5'
        d='M20.453 12a8.453 8.453 0 1 1-16.906 0 8.453 8.453 0 0 1 16.906 0Z'
      />
    </svg>
  )
}
