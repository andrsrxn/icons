import type { Icon } from './types'

export const IconCircleHalfHorizontal: Icon = ({ size = 24, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='circle-half-horizontal'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M3.52 12a8.48 8.48 0 0 0 16.96 0H3.52Z'
        clipRule='evenodd'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeWidth='1.5'
        d='M20.48 12a8.48 8.48 0 1 0-16.96 0m16.96 0a8.48 8.48 0 0 1-16.96 0m16.96 0H3.52'
      />
    </svg>
  )
}
