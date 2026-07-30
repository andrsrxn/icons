import type { Icon } from './types'

export const IconEye: Icon = ({ size = 24, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='eye'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M14.773 12a2.773 2.773 0 1 1-5.546 0 2.773 2.773 0 0 1 5.546 0Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeWidth='1.5'
        d='M12 7c-3.43 0-6.386 2.348-7.906 3.826a1.612 1.612 0 0 0 .004 2.344C5.626 14.648 8.593 17 12 17s6.374-2.352 7.902-3.83c.674-.652.677-1.69.004-2.344C18.386 9.348 15.43 7 12 7Z'
      />
      <path
        stroke='currentColor'
        strokeWidth='1.5'
        d='M14.773 12a2.773 2.773 0 1 1-5.546 0 2.773 2.773 0 0 1 5.546 0Z'
      />
    </svg>
  )
}
