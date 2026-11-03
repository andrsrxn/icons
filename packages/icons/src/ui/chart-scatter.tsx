import type { Icon } from './types'

export const IconChartScatter: Icon = ({
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
      data-slot='icon-ui-chart-scatter'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='M21.46 21.32H10.75c-3.77 0-5.66 0-6.83-1.17s-1.17-3.06-1.17-6.83V2.62'
        stroke='currentColor'
      />
      <path
        d='M9.65 15.27a.85.85 0 1 1-1.7 0 .85.85 0 0 1 1.7 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M11.34 8.14a.85.85 0 1 1-1.7 0 .85.85 0 0 1 1.7 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M17.45 13.57a.85.85 0 1 1-1.7 0 .85.85 0 0 1 1.7 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M18.66 5.73a.84.84 0 1 1-1.67 0 .84.84 0 0 1 1.67 0'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
