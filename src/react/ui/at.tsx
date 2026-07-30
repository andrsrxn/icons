import type { Icon } from './types'

export const IconAt: Icon = ({ size = 24, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='at'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M15.86 12a3.86 3.86 0 1 1-7.72 0 3.86 3.86 0 0 1 7.72 0Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M15.127 19.734A8.34 8.34 0 1 1 20.34 12c0 1.456-.253 2.75-1.028 4.016-.386.631-.943 1.196-1.697 1.196-1.71 0-1.71-2.085-1.71-2.085V7.83M15.86 12a3.86 3.86 0 1 1-7.72 0 3.86 3.86 0 0 1 7.72 0Z'
      />
    </svg>
  )
}
