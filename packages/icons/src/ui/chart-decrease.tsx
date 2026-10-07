import type { Icon } from './types'

export const IconChartDecrease: Icon = ({
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
      data-slot='icon-ui-chart-decrease'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M7.15 6.58s4 .5 6.76 2.75a14.5 14.5 0 0 1 4.35 6.33' stroke='currentColor' />
      <path
        d='M21.24 21.33H10.76c-3.77 0-5.66 0-6.83-1.17s-1.17-3.06-1.17-6.83V2.63'
        stroke='currentColor'
      />
      <path
        d='m14.97 15.06 1.82.74c.88.36 1.31.53 1.7.37s.56-.6.91-1.47l.74-1.83'
        stroke='currentColor'
      />
    </svg>
  )
}
