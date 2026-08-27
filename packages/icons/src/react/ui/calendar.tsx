import type { Icon } from './types'

export const IconCalendar: Icon = ({
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
      data-slot='ui-icon-calendar'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect opacity='.2' x='3.23' y='3.66' width='17.54' height='5.12' rx='1' fill='currentColor' />
      <rect
        x='3.23'
        y='3.66'
        width='17.54'
        height='17.54'
        rx='3'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M7.8 2v3.31M16.26 2v3.31m4.1 3.47H4.03'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
