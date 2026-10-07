import type { Icon } from './types'

export const IconChartAverage: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel)

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
      data-slot='icon-ui-chart-average'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M21.24 21.33H10.76c-3.77 0-5.66 0-6.83-1.17s-1.17-3.06-1.17-6.83V2.63'
        stroke='currentColor'
      />
      <path
        d='M6.47 8c.14-1.82 1.21-3.55 3.3-3.25 4.77.7.53 12.59 5.42 13.11 2.16.23 3.04-1.66 3.19-3.34'
        stroke='currentColor'
      />
      <path d='M19.9 11.3h1.34' stroke='currentColor' />
      <path d='M15.34 11.3h1.45' stroke='currentColor' />
      <path d='M7.9 11.3h1.67' stroke='currentColor' />
      <path d='M2.76 11.3h1.97' stroke='currentColor' />
    </svg>
  )
}
