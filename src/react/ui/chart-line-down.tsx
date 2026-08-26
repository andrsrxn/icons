import type { Icon } from './types'

export const IconChartLineDown: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='ui-icon-chart-line-down'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M6.73 8.76 8.8 11.7c.69.97 1.03 1.45 1.52 1.47s.87-.43 1.64-1.33l.92-1.08c.79-.92 1.18-1.38 1.67-1.35.5.03.84.53 1.51 1.53l3.33 4.91'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M20.58 21.32h-9.83c-3.77 0-5.66 0-6.83-1.17s-1.17-3.06-1.17-6.83v-10'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
