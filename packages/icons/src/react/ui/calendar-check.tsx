import type { Icon } from './types'

export const IconCalendarCheck: Icon = ({
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
      data-slot='ui-icon-calendar-check'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect opacity='.2' x='3.23' y='3.66' width='17.54' height='5.12' rx='1' fill='currentColor' />
      <path
        d='m14.33 18.98.91 1.11c.72.89 1.08 1.33 1.56 1.32.47 0 .83-.44 1.55-1.32L22 15.58m-1.23-3.49V9.66c0-2.83 0-4.25-.88-5.12s-2.3-.88-5.12-.88H9.23c-2.83 0-4.24 0-5.12.88-.88.87-.88 2.29-.88 5.12v5.54c0 2.82 0 4.24.88 5.12s2.3.88 5.12.88h2.75M7.8 2v3.31M16.26 2v3.31m4.1 3.47H4.03'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
