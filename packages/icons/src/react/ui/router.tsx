import type { Icon } from './types'

export const IconRouter: Icon = ({
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
      data-slot='ui-icon-router'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect
        opacity='.2'
        x='2.72'
        y='12.95'
        width='18.56'
        height='6.94'
        rx='2'
        fill='currentColor'
      />
      <rect
        x='2.72'
        y='12.95'
        width='18.56'
        height='6.94'
        rx='2'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path d='M12 12.95V9.61m5.96 6.87H14.6' stroke='currentColor' strokeWidth={strokeWidth} />
      <path
        d='M7.28 16.48a.62.62 0 1 1-1.24 0 .62.62 0 0 1 1.24 0'
        fill='currentColor'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M9.06 7.25c.72-.55 1.65-.8 2.97-.8s2.25.25 2.97.8M6.5 4.9C7.85 3.79 9.57 3.27 12 3.27s4.16.52 5.5 1.65'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
