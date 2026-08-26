import type { Icon } from './types'

export const IconPopcorn: Icon = ({
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
      data-slot='ui-icon-popcorn'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M7.87 21.45c1.13 0 2-.98 1.87-2.1L8.85 12a1.9 1.9 0 0 0-2.64-1.5l-.16.07a2.5 2.5 0 0 0-1.42 2.78l1.4 6.61c.2.87.96 1.5 1.84 1.5m8.41-.01c-1.13 0-2-.98-1.87-2.1l.9-7.35a1.9 1.9 0 0 1 2.64-1.5l.16.07a2.5 2.5 0 0 1 1.42 2.78l-1.41 6.61a1.9 1.9 0 0 1-1.84 1.5'
        fill='currentColor'
      />
      <path
        d='m19.34 12.72-.9 4.03c-.5 2.25-.74 3.38-1.56 4.04s-1.98.66-4.3.66h-1.16c-2.32 0-3.48 0-4.3-.66-.83-.67-1.08-1.8-1.56-4.08h0l-.92-4.24a1.7 1.7 0 0 1 2.06-2.03l.89.2.54.12c.5.07.74.06 1.22-.07q.13-.03.77-.25h0c.58-.2 1.28-.39 1.88-.4.67 0 1.47.21 2.1.44h0l.46.15c.62.2.96.21 1.59.06l.28-.07.55-.15a1.9 1.9 0 0 1 2.36 2.25M8.06 7c-.57-.9-1.5-1.42-3.2-1.12A2.95 2.95 0 0 0 2.9 9.57c.12.43.5 1.16 1.31 1.54M15.94 7c.57-.9 1.5-1.42 3.2-1.12a2.95 2.95 0 0 1 1.95 3.69 2.5 2.5 0 0 1-1.31 1.54'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M12.18 4.79a2.73 2.73 0 1 0-5.33 1.16m5.33-1.16a2.73 2.73 0 0 1 5.38.94m-2.06 5.15-1.34 10.57M9.23 10.88l.76 10.57'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
