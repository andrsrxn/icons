import type { Icon } from './types'

export const IconChartLineUp: Icon = ({
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
      data-slot='ui-icon-chart-line-up'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='m6.79 15.2 2.05-2.91c.69-.97 1.03-1.46 1.52-1.48.48-.02.87.43 1.64 1.33l.9 1.06c.79.92 1.18 1.38 1.67 1.35.5-.03.83-.53 1.51-1.53l3.3-4.88'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M20.58 21.32h-9.83c-3.77 0-5.66 0-6.83-1.17s-1.17-3.06-1.17-6.83v-10'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
