import type { Icon } from './types'

export const IconCalendarSearch: Icon = ({
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
      data-slot='ui-icon-calendar-search'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect opacity='.2' x='3.23' y='3.66' width='17.54' height='5.12' rx='1' fill='currentColor' />
      <path
        opacity='.2'
        d='M20.36 17.38a3.02 3.02 0 1 1-6.05 0 3.02 3.02 0 0 1 6.05 0'
        fill='currentColor'
      />
      <path
        d='M20.77 12.09V9.66c0-2.83 0-4.25-.88-5.12s-2.3-.88-5.12-.88H9.23c-2.83 0-4.24 0-5.12.88-.88.87-.88 2.29-.88 5.12v5.54c0 2.82 0 4.24.88 5.12s2.3.88 5.12.88h2.75M7.8 2v3.31M16.26 2v3.31m3.49 14.44 1.95 1.95M20.36 8.78H4.03'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M20.36 17.38a3 3 0 0 1-3.02 3.03 3.02 3.02 0 1 1 3.02-3.03'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
