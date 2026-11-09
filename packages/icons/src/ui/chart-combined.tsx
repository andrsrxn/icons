import type { Icon } from './types'

export const IconChartCombined: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel?.trim())

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      data-slot='icon-ui-chart-combined'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='m6.45 9.37 2.32-1.85c.87-.7 1.31-1.04 1.82-1.05s.96.32 1.85.99l.52.39c.98.73 1.46 1.1 2.01 1.06s.99-.46 1.87-1.3l2.28-2.18'
        stroke='currentColor'
      />
      <path d='M6.91 13.29v4.18' stroke='currentColor' />
      <path d='M14.97 13.29v4.18' stroke='currentColor' />
      <path d='M10.94 11.47v6' stroke='currentColor' />
      <path d='M19 11.47v6' stroke='currentColor' />
      <path
        d='M21.24 21.33H10.76c-3.77 0-5.66 0-6.83-1.17s-1.17-3.06-1.17-6.83V2.63'
        stroke='currentColor'
      />
    </svg>
  )
}
