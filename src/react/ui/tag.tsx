import type { Icon } from './types'

export const IconTag: Icon = ({
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
      data-slot='ui-icon-tag'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M5.3 18.74c-1.87-1.86-2.8-2.8-2.86-3.94v-.32c.06-1.15 1-2.08 2.86-3.94l6.02-6.03c.97-.96 1.45-1.44 2.06-1.67l.18-.06c.63-.2 1.3-.1 2.65.09 2.02.27 3.03.41 3.72 1.05q.1.08.19.18c.63.7.77 1.7 1.05 3.72.18 1.35.27 2.03.09 2.65l-.06.18c-.23.61-.71 1.1-1.68 2.06l-6.03 6.03c-1.86 1.86-2.79 2.79-3.94 2.85h-.31c-1.15-.06-2.08-1-3.94-2.85'
        fill='currentColor'
      />
      <path
        d='M5.3 18.74c-1.87-1.86-2.8-2.8-2.86-3.94v-.32c.06-1.15 1-2.08 2.86-3.94l6.3-6.3a6 6 0 0 1 1.77-1.48l.18-.07c.53-.2 1.12-.18 2.3-.14 2.42.07 3.64.1 4.45.8l.25.26c.72.8.78 2.02.89 4.48.06 1.24.08 1.86-.12 2.42l-.05.13c-.23.55-.66.98-1.53 1.85l-6.25 6.25c-1.86 1.86-2.79 2.79-3.94 2.85h-.31c-1.15-.06-2.08-1-3.94-2.85'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M16.78 7.26a.88.88 0 1 1-1.25 1.24.88.88 0 0 1 1.25-1.25'
        fill='currentColor'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path d='m9.2 17.77-2.93-2.93' stroke='currentColor' strokeWidth={strokeWidth} />
    </svg>
  )
}
