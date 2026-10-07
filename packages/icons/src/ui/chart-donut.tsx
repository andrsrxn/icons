import type { Icon } from './types'

export const IconChartDonut: Icon = ({
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
      data-slot='icon-ui-chart-donut'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M22.25 12A10.25 10.25 0 1 1 1.9 10.22L7.64 12a4.36 4.36 0 1 0 7.59-2.93l4.94-3.25A10.2 10.2 0 0 1 22.25 12'
        fill='currentColor'
      />
      <circle cx='12' cy='12' r='10.25' stroke='currentColor' />
      <circle cx='12' cy='12' r='4.36' stroke='currentColor' />
      <path d='M2.13 10.37 7.63 12' stroke='currentColor' />
      <path d='m13.21 16.36 3.15 4.69' stroke='currentColor' />
      <path d='m15.25 8.83 4.83-2.93' stroke='currentColor' />
    </svg>
  )
}
