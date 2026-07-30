import type { Icon } from './types'

export const IconTrendDown: Icon = ({ size = 24, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='trend-down'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M3.755 11.41v3.472a1.5 1.5 0 0 0 1.5 1.5h3.433m11.557-9.345-4.978 4.978a1 1 0 0 1-1.424-.01l-2.258-2.324a1 1 0 0 0-1.438.004L4.152 15.9'
      />
    </svg>
  )
}
