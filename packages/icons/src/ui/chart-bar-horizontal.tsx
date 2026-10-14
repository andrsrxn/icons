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
        d='M14.43 3.2c1.35 0 2.03 0 2.46.4l.07.07c.4.44.4 1.11.4 2.46s0 2.03-.4 2.46l-.07.07c-.43.4-1.1.4-2.46.4H2.76V3.2z'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M10.94 14.93c.94 0 1.42 0 1.7.3.3.29.3.76.3 1.7v1.87c0 .95 0 1.42-.3 1.7-.28.3-.76.3-1.7.3H2.76v-5.87z'
        fill='currentColor'
      />
      <path
        d='M18.3 9.07c1.35 0 2.03 0 2.46.4l.07.07c.4.43.4 1.11.4 2.46v0c0 1.35 0 2.03-.4 2.46l-.07.07c-.43.4-1.1.4-2.46.4H2.76V9.07z'
        stroke='currentColor'
      />
      <path
        d='M14.43 3.2c1.35 0 2.03 0 2.46.4l.07.07c.4.44.4 1.11.4 2.46v0c0 1.35 0 2.03-.4 2.46l-.07.07c-.43.4-1.1.4-2.46.4H2.76V3.2z'
        stroke='currentColor'
      />
      <path
        d='M10 14.93c1.36 0 2.03 0 2.46.4l.08.08c.4.43.4 1.1.4 2.46v0c0 1.35 0 2.02-.4 2.46l-.08.07c-.43.4-1.1.4-2.45.4H2.76v-5.87z'
        stroke='currentColor'
      />
    </svg>
  )
}
