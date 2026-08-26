import type { Icon } from './types'

export const IconCalendarHeart: Icon = ({
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
      data-slot='ui-icon-calendar-heart'
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
        d='M19.76 15.04q-.45 0-.81.16c-.74.3-1.11.46-1.21.46s-.47-.15-1.21-.46q-.37-.16-.81-.16c-1.3 0-2.27 1.47-1.85 3.03.33 1.2 1.9 2.24 3.03 3.17.44.35.66.53.84.53s.4-.18.83-.53c1.14-.93 2.71-1.96 3.03-3.17.42-1.56-.55-3.03-1.84-3.03'
        fill='currentColor'
      />
      <path
        d='M20.77 12.09V9.66c0-2.83 0-4.25-.88-5.12s-2.3-.88-5.12-.88H9.23c-2.83 0-4.24 0-5.12.88-.88.87-.88 2.29-.88 5.12v5.54c0 2.82 0 4.24.88 5.12s2.3.88 5.12.88h2.75M7.8 2v3.31M16.26 2v3.31m4.1 3.47H4.03'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M19.76 15.04c-1.03 0-1.78.77-2.02 1.16a2.6 2.6 0 0 0-2.02-1.16c-1.3 0-2.27 1.47-1.85 3.03s2.89 2.82 3.87 3.93c.98-1.11 3.45-2.38 3.86-3.93.42-1.56-.55-3.03-1.84-3.03'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
