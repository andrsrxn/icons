import type { Icon } from '../types'

export const IconLogoFramer: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='logo-framer'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M6 9.369v5.368l6.04 6.04v-6.04h6.04L6 4h12.08v5.369H6Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M6 9.369v5.368l6.04 6.04v-6.04h6.04L6 4h12.08v5.369H6Z'
      />
    </svg>
  )
}
