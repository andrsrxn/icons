import type { Icon } from './types'

export const IconColors: Icon = ({ size = 24, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='colors'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M16.544 8.819a4.55 4.55 0 0 1-.39 1.847 4.537 4.537 0 0 0-4.671 2.668 4.53 4.53 0 0 0-.392 1.847c0 1.023.338 1.968.909 2.727a4.545 4.545 0 1 1-4.153-7.242 4.544 4.544 0 1 1 8.698-1.847Z'
        clipRule='evenodd'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeWidth='1.5'
        d='M16.153 10.666a4.545 4.545 0 1 0-4.671 2.668m0 0a4.537 4.537 0 0 1 4.671-2.668 4.545 4.545 0 1 1-4.67 2.668Zm-3.635-2.668A4.545 4.545 0 1 0 12 17.908'
      />
    </svg>
  )
}
