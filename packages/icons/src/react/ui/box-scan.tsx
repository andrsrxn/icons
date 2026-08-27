import type { Icon } from './types'

export const IconBoxScan: Icon = ({
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
      data-slot='ui-icon-box-scan'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='m17.95 15.24-4.54 2.69a.5.5 0 0 1-.75-.43v-5.11q.01-.3.26-.44l4.54-2.42a.5.5 0 0 1 .73.44v4.84a.5.5 0 0 1-.24.43'
        fill='currentColor'
      />
      <path
        d='M15.93 21.32c2.27 0 3.4 0 4.2-.57a3 3 0 0 0 .64-.65c.58-.8.58-1.93.58-4.2M15.97 2.71c2.23 0 3.35 0 4.13.56a3 3 0 0 1 .69.69c.56.78.56 1.9.56 4.14M8.05 21.44c-2.36 0-3.54 0-4.35-.62a3 3 0 0 1-.54-.54c-.63-.81-.63-2-.63-4.36M8.07 2.71c-2.27 0-3.4 0-4.2.58a3 3 0 0 0-.64.65c-.58.79-.58 1.92-.58 4.2m6.83 8.81-.08-.04h0c-1.33-.77-1.99-1.15-2.38-1.76l-.15-.25c-.33-.65-.33-1.42-.33-2.95s0-2.3.33-2.95l.15-.25c.39-.6 1.05-1 2.38-1.76l.08-.04c1.4-.81 2.1-1.22 2.87-1.23h.13c.77.01 1.47.42 2.87 1.23l.08.04c1.33.77 2 1.15 2.39 1.76l.14.25c.33.65.33 1.42.33 2.95s0 2.3-.33 2.95l-.14.25c-.4.6-1.06 1-2.39 1.76h0l-.08.04c-1.4.81-2.1 1.22-2.87 1.23h-.13c-.77-.01-1.47-.42-2.87-1.23m-2.6-7.79 5.54 3.05m0 0v5.94m-2.94-7.71v2.87m8.48-4.15-5.54 3.05m-2.94-1.77 5.7-3.39'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
