import type { Icon } from './types'

export const IconGantt: Icon = ({ size = 24, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='gantt'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M7.092 7H13m-5.113 4H18m-5 4h6M3.889 4v14.611a1.5 1.5 0 0 0 1.5 1.5H20'
      />
    </svg>
  )
}
