import type { Icon } from './types'

export const IconChartScatter: Icon = ({
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
      data-slot='icon-ui-chart-scatter'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M21.46 21.32H10.75c-3.77 0-5.66 0-6.83-1.17s-1.17-3.06-1.17-6.83V2.62'
        stroke='currentColor'
      />
      <path
        d='M9.1 16.7a1.14 1.14 0 1 1-2.26 0 1.14 1.14 0 0 1 2.27 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M11.57 8.74a1.14 1.14 0 1 1-2.27 0 1.14 1.14 0 0 1 2.27 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M17.86 14.42a1.14 1.14 0 1 1-2.27 0 1.14 1.14 0 0 1 2.27 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M19 5.14a1.14 1.14 0 1 1-2.27 0 1.14 1.14 0 0 1 2.27 0'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
