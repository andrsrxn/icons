import type { Icon } from '../types'

export const IconTrendUp: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='trend-up'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M20.245 12.59V9.119a1.5 1.5 0 0 0-1.5-1.5h-3.433M3.755 16.963l4.978-4.978a1 1 0 0 1 1.424.01l2.258 2.324a1 1 0 0 0 1.438-.004l5.988-6.222'
      />
    </svg>
  )
}
