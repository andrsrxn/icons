import type { Icon } from './types'

export const IconBoundingBox: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='bounding-box'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M7.496 5.487a2.01 2.01 0 1 1-4.02 0 2.01 2.01 0 0 1 4.02 0Zm0 13.027a2.01 2.01 0 1 1-4.019 0 2.01 2.01 0 0 1 4.02 0Zm13.027 0a2.01 2.01 0 1 1-4.019 0 2.01 2.01 0 0 1 4.02 0Zm0-13.027a2.01 2.01 0 1 1-4.02 0 2.01 2.01 0 0 1 4.02 0Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeWidth='1.5'
        d='M7.496 5.487c0 1.11-.9 2.01-2.01 2.01m2.01-2.01a2.01 2.01 0 1 0-2.01 2.01m2.01-2.01h9.008M5.487 7.497v8.996m2.01 2.02a2.01 2.01 0 1 1-4.02 0 2.01 2.01 0 0 1 4.02 0Zm0 0h9.007m0 0a2.01 2.01 0 1 0 4.02 0 2.01 2.01 0 0 0-4.02 0Zm2.01-11.017a2.01 2.01 0 1 0-2.01-2.01m2.01 2.01c-1.11 0-2.01-.9-2.01-2.01m2.01 2.01v8.997'
      />
    </svg>
  )
}
