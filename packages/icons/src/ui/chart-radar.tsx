import type { Icon } from './types'

export const IconChartRadar: Icon = ({
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
      data-slot='icon-ui-chart-radar'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M2.1 10.75 12 12.4l9.9-1.66' stroke='currentColor' />
      <path d='m6.23 21.96 5.77-10V2.04' stroke='currentColor' />
      <path d='M17.77 22 12 12' stroke='currentColor' />
      <path d='m7.61 19.8-3.63-8.77' stroke='currentColor' />
      <path d='M16.86 19.8h-9.3' stroke='currentColor' />
      <path d='m16.94 19.8 3.5-8.77' stroke='currentColor' />
      <path d='m11.98 3.82 8.47 7.21' stroke='currentColor' />
      <path d='m11.98 3.72-8 7.31' stroke='currentColor' />
      <path
        opacity='.2'
        d='M14.92 19.81H9.29a2.5 2.5 0 0 1-2.31-1.54l-2.34-5.63a2.5 2.5 0 0 1 .61-2.79l5.03-4.67a2.5 2.5 0 0 1 3.35-.05l5.36 4.7a2.5 2.5 0 0 1 .64 2.88l-2.42 5.6a2.5 2.5 0 0 1-2.3 1.5'
        fill='currentColor'
      />
    </svg>
  )
}
