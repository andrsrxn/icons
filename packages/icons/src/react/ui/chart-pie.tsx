import type { Icon } from './types'

export const IconChartPie: Icon = ({
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
      data-slot='ui-icon-chart-pie'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M12 21.43c-2.19 0-4.2-.75-5.8-2L12 12V2.57a9.43 9.43 0 1 1 0 18.86'
        fill='currentColor'
      />
      <circle
        cx='12'
        cy='12'
        r='9.43'
        transform='rotate(90 12 12)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='m6.23 19.09 4.82-5.67c.47-.56.7-.83.83-1.17.12-.33.12-.7.12-1.42V2.57'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
