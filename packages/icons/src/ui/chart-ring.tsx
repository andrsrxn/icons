import type { Icon } from './types'

export const IconChartRing: Icon = ({
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
      data-slot='icon-ui-chart-ring'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <circle
        opacity='.2'
        cx='11.96'
        cy='11.96'
        r='10.22'
        transform='rotate(90 11.96 11.96)'
        fill='currentColor'
      />
      <path d='M12 1.74a10.26 10.26 0 1 1-8.04 3.89' stroke='currentColor' />
      <path d='M5.3 12A6.7 6.7 0 1 0 12 5.3' stroke='currentColor' />
      <path d='M12 15.14a3.14 3.14 0 1 0 0-6.28' stroke='currentColor' />
    </svg>
  )
}
