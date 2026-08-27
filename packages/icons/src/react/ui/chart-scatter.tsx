import type { Icon } from './types'

export const IconChartScatter: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='ui-icon-chart-scatter'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M20.58 21.32h-9.83c-3.77 0-5.66 0-6.83-1.17s-1.17-3.06-1.17-6.83v-10'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M8.84 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0M11 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0m5.54 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0m1-8.16a1 1 0 1 1-2 0 1 1 0 0 1 2 0'
        fill='currentColor'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
