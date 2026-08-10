import type { Icon } from './types'

export const IconChartScatter: Icon = ({
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
      data-slot='chart-scatter'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M8.98 8.4a.55.55 0 1 1-1.1 0 .55.55 0 0 1 1.1 0m4.42 3.3a.56.56 0 1 1-1.12 0 .56.56 0 0 1 1.11 0M9.93 16a.55.55 0 1 1-1.1 0 .55.55 0 0 1 1.1 0m7.81-.55a.55.55 0 1 1-1.11 0 .55.55 0 0 1 1.1 0m-1.1-8.59a.55.55 0 1 1-1.11 0 .55.55 0 0 1 1.1 0'
        fill='currentColor'
      />
      <path
        d='M4 4v14.61c0 .83.67 1.5 1.5 1.5H20M8.98 8.4a.55.55 0 1 1-1.1 0 .55.55 0 0 1 1.1 0Zm4.41 3.3a.56.56 0 1 1-1.1 0 .56.56 0 0 1 1.1 0ZM9.93 16a.55.55 0 1 1-1.1 0 .55.55 0 0 1 1.1 0Zm7.8-.55a.55.55 0 1 1-1.1 0 .55.55 0 0 1 1.1 0Zm-1.1-8.6a.55.55 0 1 1-1.11 0 .55.55 0 0 1 1.1 0Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
