import type { Icon } from './types'

export const IconTilde: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='tilde'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M3.627 12.93s1.795-1.86 4.652-1.86c2.856 0 5.556 1.86 8.373 1.86 2.817 0 3.721-1.86 3.721-1.86'
      />
    </svg>
  )
}
