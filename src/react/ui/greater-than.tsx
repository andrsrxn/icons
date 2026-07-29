import type { Icon } from '../types'

export const IconGreaterThan: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='greater-than'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='m5 18 7.71-2.439c4.56-1.443 6.84-2.164 6.88-3.585.04-1.422-2.196-2.27-6.667-3.968L5 5'
      />
    </svg>
  )
}
