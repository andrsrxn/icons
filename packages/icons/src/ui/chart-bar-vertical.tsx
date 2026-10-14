import type { Icon } from './types'

export const IconChartBarVertical: Icon = ({
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
      data-slot='icon-ui-chart-bar-vertical'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M3.24 8.66c0-.95 0-1.42.29-1.71.3-.3.76-.3 1.7-.3h1.85c.94 0 1.41 0 1.7.3s.3.76.3 1.7V21.2H3.24z'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M14.92 13.06c0-.94 0-1.41.3-1.7.29-.3.76-.3 1.7-.3h1.84c.95 0 1.42 0 1.71.3.3.29.3.76.3 1.7v8.14h-5.85z'
        fill='currentColor'
      />
      <path
        d='M9.08 5.72c0-1.34 0-2 .4-2.43l.08-.1C10 2.8 10.66 2.8 12 2.8v0c1.34 0 2 0 2.44.4q.05.04.08.09c.4.43.4 1.1.4 2.43V21.2H9.08z'
        stroke='currentColor'
      />
      <path d='M22.3 21.2H1.7' stroke='currentColor' />
      <path
        d='M3.24 9.58c0-1.34 0-2 .4-2.44l.08-.09c.43-.4 1.1-.4 2.44-.4v0c1.33 0 2 0 2.43.4l.1.09c.39.43.39 1.1.39 2.44V21.2H3.24z'
        stroke='currentColor'
      />
      <path
        d='M14.92 13.98c0-1.33 0-2 .4-2.43l.09-.1c.43-.39 1.1-.39 2.43-.39v0c1.34 0 2.01 0 2.44.4l.09.09c.4.43.4 1.1.4 2.43v7.22h-5.85z'
        stroke='currentColor'
      />
    </svg>
  )
}
