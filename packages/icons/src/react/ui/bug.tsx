import type { Icon } from './types'

export const IconBug: Icon = ({
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
      data-slot='ui-icon-bug'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M5.85 12.57c0-1.78 0-2.67.28-3.37a4 4 0 0 1 2.25-2.26c.7-.28 1.6-.28 3.38-.28h.48c1.78 0 2.67 0 3.38.28a4 4 0 0 1 2.25 2.26c.28.7.28 1.6.28 3.37v2.99a6 6 0 0 1-5.88 5.88h-.54a6 6 0 0 1-5.88-5.88z'
        fill='currentColor'
      />
      <path
        d='M5.85 12.57c0-1.78 0-2.67.28-3.37a4 4 0 0 1 2.25-2.26c.7-.28 1.6-.28 3.38-.28h.48c1.78 0 2.67 0 3.38.28a4 4 0 0 1 2.25 2.26c.28.7.28 1.6.28 3.37v2.99a6 6 0 0 1-5.88 5.88H12v0h-.27a6 6 0 0 1-5.88-5.88zM12 21.44V12m9.76 1.14h-3.6m-12.31 0h-3.6m4.2-4.78c-1.05-.6-1.58-.89-1.99-1.32l-.12-.12c-.39-.45-.64-1-1.14-2.1l-.14-.3'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M6.31 17.69c-.91.51-1.37.77-1.75 1.13l-.31.34c-.33.4-.55.88-.99 1.84l-.2.44M17.55 8.36c1.05-.6 1.58-.89 1.99-1.32l.12-.12c.39-.45.64-1 1.14-2.1l.14-.3m-3.25 13.17c.91.51 1.37.77 1.75 1.13l.31.34c.33.4.55.88.99 1.84l.2.44M15.45 6.66c0-1.93-.75-4.1-3.46-4.1-3.02 0-3.46 2.17-3.46 4.1'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
