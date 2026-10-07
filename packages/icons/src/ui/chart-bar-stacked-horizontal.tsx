import type { Icon } from './types'

export const IconChartBarStackedHorizontal: Icon = ({
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
      data-slot='icon-ui-chart-bar-stacked-horizontal'
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
      <rect
        opacity='.2'
        width='3.84'
        height='7.01'
        rx='1.5'
        transform='matrix(0 -1 -1 0 16.62 9.5)'
        fill='currentColor'
      />
      <rect
        opacity='.2'
        width='3.84'
        height='3.83'
        rx='1.5'
        transform='matrix(0 -1 -1 0 20.18 16.65)'
        fill='currentColor'
      />
      <rect
        width='3.84'
        height='10.57'
        rx='1.5'
        transform='matrix(0 -1 -1 0 16.62 9.5)'
        stroke='currentColor'
      />
      <rect
        width='3.84'
        height='10.57'
        rx='1.5'
        transform='matrix(0 -1 -1 0 20.18 16.65)'
        stroke='currentColor'
      />
      <path d='M9.73 9.38V5.79' stroke='currentColor' />
      <path d='M16.48 16.52v-3.58' stroke='currentColor' />
    </svg>
  )
}
