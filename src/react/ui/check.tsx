import type { Icon } from './types'

export const IconCheck: Icon = ({ size = 24, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='check'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='m4.239 12.986 1.936 2.871c1.516 2.25 2.275 3.374 3.345 3.369 1.07-.006 1.817-1.138 3.31-3.403l6.932-10.51'
      />
    </svg>
  )
}
