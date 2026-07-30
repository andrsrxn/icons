import type { Icon } from './types'

export const IconWarningCircle: Icon = ({ size = 24, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='warning-circle'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M20.291 12A8.291 8.291 0 1 1 3.71 12a8.291 8.291 0 0 1 16.582 0Z'
        opacity='.2'
      />
      <path fill='currentColor' d='M12.392 16.392a.392.392 0 1 1-.784 0 .392.392 0 0 1 .784 0Z' />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M12 13.345V7.413M20.291 12A8.291 8.291 0 1 1 3.71 12a8.291 8.291 0 0 1 16.582 0Zm-7.899 4.392a.392.392 0 1 1-.784 0 .392.392 0 0 1 .784 0Z'
      />
    </svg>
  )
}
