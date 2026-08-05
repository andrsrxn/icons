import type { Icon } from './types'

export const IconChartPie: Icon = ({
  size = 24,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='chart-pie'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M12 3.567a8.433 8.433 0 0 0-5.963 14.396L12 12V3.567Z'
        clipRule='evenodd'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeWidth='1.5'
        d='M12 3.567a8.433 8.433 0 1 0 0 16.866 8.433 8.433 0 0 0 0-16.866Zm0 0v6.776c0 .818 0 1.226-.152 1.594-.153.368-.442.657-1.02 1.235l-4.693 4.693'
      />
    </svg>
  )
}
