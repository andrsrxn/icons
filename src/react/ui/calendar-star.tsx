import type { Icon } from './types'

export const IconCalendarStar: Icon = ({
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
      data-slot='ui-icon-calendar-star'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M16.8 14.94c.4-.77.6-1.15.9-1.15s.5.38.89 1.15l.34.67c.11.22.17.33.27.4s.22.09.46.13l.75.12c.84.13 1.27.2 1.36.49.1.3-.2.6-.81 1.2l-.54.53c-.17.18-.26.27-.3.38-.03.12-.01.24.02.49l.12.74c.14.84.2 1.27-.05 1.45-.24.18-.63-.02-1.39-.4l-.67-.35c-.22-.1-.33-.17-.45-.17s-.23.06-.46.17l-.67.34c-.76.4-1.14.59-1.39.4-.25-.17-.18-.6-.05-1.44l.12-.74c.04-.25.06-.37.02-.49s-.12-.2-.3-.38l-.53-.53c-.6-.6-.91-.9-.82-1.2s.52-.36 1.37-.5l.74-.11c.25-.04.37-.06.47-.13s.15-.18.26-.4z'
        fill='currentColor'
      />
      <path
        d='M16.8 14.94c.4-.77.6-1.15.9-1.15s.5.38.89 1.15l.34.67c.11.22.17.33.27.4s.22.09.46.13l.75.12c.84.13 1.27.2 1.36.49.1.3-.2.6-.81 1.2l-.54.53c-.17.18-.26.27-.3.38-.03.12-.01.24.02.49l.12.74c.14.84.2 1.27-.05 1.45-.24.18-.63-.02-1.39-.4l-.67-.35c-.22-.1-.33-.17-.45-.17s-.23.06-.46.17l-.67.34c-.76.4-1.14.59-1.39.4-.25-.17-.18-.6-.05-1.44l.12-.74c.04-.25.06-.37.02-.49s-.12-.2-.3-.38l-.53-.53c-.6-.6-.91-.9-.82-1.2s.52-.36 1.37-.5l.74-.11c.25-.04.37-.06.47-.13s.15-.18.26-.4z'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <rect opacity='.2' x='3.23' y='3.66' width='17.54' height='5.12' rx='1' fill='currentColor' />
      <path
        d='M20.77 12.09V9.66c0-2.83 0-4.25-.88-5.12s-2.3-.88-5.12-.88H9.23c-2.83 0-4.24 0-5.12.88-.88.87-.88 2.29-.88 5.12v5.54c0 2.82 0 4.24.88 5.12s2.3.88 5.12.88h2.75M7.8 2v3.31M16.26 2v3.31m4.1 3.47H4.03'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
