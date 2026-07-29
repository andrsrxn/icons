import type { Icon } from '../types'

export const IconChartLineUp: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='chart-line-up'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M4 4v14.611a1.5 1.5 0 0 0 1.5 1.5H20M6.87 15.067l3.762-3.761a1 1 0 0 1 1.424.01l1.715 1.765a1 1 0 0 0 1.438-.004l4.315-4.49'
      />
    </svg>
  )
}
