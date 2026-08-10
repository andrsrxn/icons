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
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
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
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12 3.57a8.43 8.43 0 0 0-5.96 14.4L12 12z'
        fill='currentColor'
      />
      <path
        d='M12 3.57a8.43 8.43 0 1 0 0 16.86 8.43 8.43 0 0 0 0-16.86Zm0 0v6.77c0 .82 0 1.23-.15 1.6-.15.36-.44.65-1.02 1.23l-4.7 4.7'
        stroke='currentColor'
        strokeWidth='1.5'
      />
    </svg>
  )
}
