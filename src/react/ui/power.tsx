import type { Icon } from './types'

export const IconPower: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='power'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M19.73 12.734a7.73 7.73 0 1 1-15.46 0 7.73 7.73 0 0 1 15.46 0Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M16.396 6.374a7.73 7.73 0 1 1-8.791 0M12 13.102V3.635'
      />
    </svg>
  )
}
