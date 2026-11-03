import type { Icon } from './types'

export const IconChartBarStackedVertical: Icon = ({
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
      data-slot='icon-ui-chart-bar-stacked-vertical'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='M21.24 21.33H10.76c-3.77 0-5.66 0-6.83-1.17s-1.17-3.06-1.17-6.83V2.63'
        stroke='currentColor'
      />
      <rect
        opacity='.2'
        width='3.84'
        height='7.01'
        rx='1.5'
        transform='matrix(1 0 0 -1 14.73 14.45)'
        fill='currentColor'
      />
      <rect
        opacity='.2'
        width='3.84'
        height='3.83'
        rx='1.5'
        transform='matrix(1 0 0 -1 7.59 18.02)'
        fill='currentColor'
      />
      <rect
        width='3.84'
        height='10.57'
        rx='1.5'
        transform='matrix(1 0 0 -1 14.73 14.45)'
        stroke='currentColor'
      />
      <rect
        width='3.84'
        height='10.57'
        rx='1.5'
        transform='matrix(1 0 0 -1 7.59 18.02)'
        stroke='currentColor'
      />
      <path d='M14.86 7.56h3.58' stroke='currentColor' />
      <path d='M7.71 14.32h3.59' stroke='currentColor' />
    </svg>
  )
}
