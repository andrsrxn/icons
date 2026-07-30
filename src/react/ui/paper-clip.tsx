import type { Icon } from './types'

export const IconPaperClip: Icon = ({ size = 24, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='paper-clip'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='m15.481 7.056-7.27 7.27a1.5 1.5 0 0 0 2.122 2.122l7.584-7.583a3.001 3.001 0 1 0-4.245-4.245l-7.87 7.871a4.502 4.502 0 0 0 6.366 6.367l4.729-4.73'
      />
    </svg>
  )
}
