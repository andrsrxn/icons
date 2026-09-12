import type { Icon } from './types'

export const IconChartBarHorizontal: Icon = ({
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
      data-slot='icon-ui-chart-bar-horizontal'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M2.76 22.28V1.72' stroke='currentColor' />
      <path
        opacity='.2'
        d='M15.37 3.2c.94 0 1.41 0 1.7.3.3.28.3.75.3 1.7v1.87c0 .94 0 1.41-.3 1.7-.29.3-.76.3-1.7.3H2.77V3.2z'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M10.94 14.93c.94 0 1.42 0 1.7.3.3.29.3.76.3 1.7v1.87c0 .95 0 1.42-.3 1.7-.28.3-.76.3-1.7.3H2.76v-5.87z'
        fill='currentColor'
      />
      <path
        d='M19.24 9.07c.94 0 1.41 0 1.7.29.3.3.3.76.3 1.7v1.87c0 .95 0 1.42-.3 1.71-.29.3-.76.3-1.7.3H2.76V9.06z'
        stroke='currentColor'
      />
      <path
        d='M15.37 3.2c.94 0 1.41 0 1.7.3.3.28.3.75.3 1.7v1.87c0 .94 0 1.41-.3 1.7-.29.3-.76.3-1.7.3H2.77V3.2z'
        stroke='currentColor'
      />
      <path
        d='M10.94 14.93c.94 0 1.42 0 1.7.3.3.29.3.76.3 1.7v1.87c0 .95 0 1.42-.3 1.7-.28.3-.76.3-1.7.3H2.76v-5.87z'
        stroke='currentColor'
      />
    </svg>
  )
}
