import type { Icon } from './types'

export const IconTrendDown: Icon = ({
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
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='ui-icon-trend-down'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      aria-labelledby={isLabelled && title && !ariaLabel ? 'trend-down-title' : undefined}
      focusable={isLabelled ? undefined : false}
      className={`ui-icon ${className ?? ''}`.trim()}
      {...props}>
      {isLabelled && title && !ariaLabel ? <title id={'trend-down-title'}>{title}</title> : null}
      <path
        d='m2.57 7.03 4.73 4.84c.65.67.98 1 1.39 1.01s.75-.31 1.42-.96l1.59-1.51c.7-.67 1.05-1 1.47-.99.43.02.75.38 1.4 1.1l5.54 6.19'
        stroke='currentColor'
      />
      <path
        d='M21.22 12.53v1.2c0 1.88 0 2.83-.58 3.41s-1.53.59-3.41.59h-1.21'
        stroke='currentColor'
      />
    </svg>
  )
}
