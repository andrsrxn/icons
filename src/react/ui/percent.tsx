import type { Icon } from '../types'

export const IconPercent: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='percent'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M9.398 6.343a2.16 2.16 0 1 1-3.055 3.054 2.16 2.16 0 0 1 3.055-3.054Zm8.259 8.259a2.16 2.16 0 1 1-3.055 3.055 2.16 2.16 0 0 1 3.055-3.055Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M4.908 19.092 19.092 4.908M9.398 6.343a2.16 2.16 0 1 1-3.055 3.054 2.16 2.16 0 0 1 3.055-3.054Zm8.259 8.26a2.16 2.16 0 1 1-3.055 3.054 2.16 2.16 0 0 1 3.055-3.055Z'
      />
    </svg>
  )
}
