import type { Icon } from './types'

export const IconTermometer: Icon = ({
  size = 24,
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
      data-slot='termometer'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M9.63 5.98v7.94a3.8 3.8 0 1 0 4.74 0V5.98c0-.31 0-.47-.02-.6a2 2 0 0 0-1.74-1.75c-.13-.02-.3-.02-.61-.02-.32 0-.48 0-.61.02-.9.12-1.62.83-1.74 1.74-.02.14-.02.3-.02.61'
        fill='currentColor'
      />
      <path d='M12.7 16.9a.7.7 0 1 1-1.4 0 .7.7 0 0 1 1.4 0' fill='currentColor' />
      <path
        clipRule='evenodd'
        d='M12 17.6a.7.7 0 1 0 0-1.4.7.7 0 0 0 0 1.4Z'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <path
        d='M12.7 16.9a.7.7 0 1 1-1.4 0 .7.7 0 0 1 1.4 0Z'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <path
        d='M9.63 5.98v7.94a3.8 3.8 0 1 0 4.74 0V5.98c0-.31 0-.47-.02-.6a2 2 0 0 0-1.74-1.75c-.13-.02-.3-.02-.61-.02-.32 0-.48 0-.61.02-.9.12-1.62.83-1.74 1.74-.02.14-.02.3-.02.61Zm3.06 10.92a.7.7 0 1 1-1.38 0 .7.7 0 0 1 1.38 0Z'
        stroke='currentColor'
        strokeWidth='1.5'
      />
    </svg>
  )
}
