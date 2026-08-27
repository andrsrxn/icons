import type { Icon } from './types'

export const IconThermometer: Icon = ({
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
      data-slot='ui-icon-thermometer'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M10.1 14.1V4.36a1.9 1.9 0 1 1 3.8 0v9.74s1.64 1.8 1.64 3.34a3.54 3.54 0 0 1-7.08 0c0-1.54 1.64-3.34 1.64-3.34'
        fill='currentColor'
      />
      <path
        d='M9.94 14.46a3.82 3.82 0 1 0 4.12 0m-.06-.1V4.31a2 2 0 0 0-4 0v10.05'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M12.47 17.59a.47.47 0 1 1-.94 0 .47.47 0 0 1 .94 0'
        fill='currentColor'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
