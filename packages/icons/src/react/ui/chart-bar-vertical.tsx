import type { Icon } from './types'

export const IconChartBarVertical: Icon = ({
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
      data-slot='ui-icon-chart-bar-vertical'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M4.04 9.15c0-.94 0-1.42.3-1.7.29-.3.76-.3 1.7-.3h1.3c.95 0 1.42 0 1.71.3.3.28.3.76.3 1.7v11.2h-5.3zm10.61 4c0-.94 0-1.42.3-1.7.29-.3.76-.3 1.7-.3h1.3c.95 0 1.42 0 1.71.3.3.28.3.76.3 1.7v7.2h-5.3z'
        fill='currentColor'
      />
      <path
        d='M9.35 5.65c0-.94 0-1.42.3-1.7.28-.3.75-.3 1.7-.3h1.3c.95 0 1.42 0 1.7.3.3.28.3.76.3 1.7v14.7h-5.3zm12.38 14.7H2.27'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M4.04 9.15c0-.94 0-1.42.3-1.7.29-.3.76-.3 1.7-.3h1.3c.95 0 1.42 0 1.71.3.3.28.3.76.3 1.7v11.2h-5.3zm10.61 4c0-.94 0-1.42.3-1.7.29-.3.76-.3 1.7-.3h1.3c.95 0 1.42 0 1.71.3.3.28.3.76.3 1.7v7.2h-5.3z'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
