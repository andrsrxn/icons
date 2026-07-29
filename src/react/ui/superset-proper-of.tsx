import type { Icon } from '../types'

export const IconSupersetProperOf: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='superset-proper-of'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M4.885 5.612h8.334c1.01 0 2.006.243 2.902.708 4.34 2.25 4.58 8.37.429 10.952l-.227.141a6.458 6.458 0 0 1-3.411.974H4.885'
      />
    </svg>
  )
}
