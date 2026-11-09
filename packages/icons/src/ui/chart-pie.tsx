import type { Icon } from './types'

export const IconChartPie: Icon = ({
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
      data-slot='icon-ui-chart-pie'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M12 22.26c-2.38 0-4.58-.81-6.32-2.17L12 12V1.74a10.26 10.26 0 0 1 0 20.52'
        fill='currentColor'
      />
      <circle cx='12' cy='12' r='10.26' stroke='currentColor' />
      <path
        d='m5.72 19.71 4.37-5.14c.95-1.11 1.42-1.67 1.66-2.34.25-.66.25-1.4.25-2.85V1.74'
        stroke='currentColor'
      />
    </svg>
  )
}
