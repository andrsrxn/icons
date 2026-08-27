import type { Icon } from './types'

export const IconAnnouncement: Icon = ({
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
      data-slot='ui-icon-announcement'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M19 10.87v2.58a2.55 2.55 0 0 0 2.52-2.58A2.55 2.55 0 0 0 19 8.3zM9.55 14.3V7.37H6.47c-1.38 0-2.06 0-2.56.32a2 2 0 0 0-.59.6C3 8.77 3 9.45 3 10.83s0 2.06.32 2.55a2 2 0 0 0 .6.6c.49.31 1.17.31 2.55.31z'
        fill='currentColor'
      />
      <path
        d='M6.07 7.11h2.8c.47 0 .71 0 .94-.05s.44-.16.86-.37l2.15-1.09c2.6-1.3 3.9-1.96 4.85-1.38s.95 2.04.95 4.95v3.15c0 2.98 0 4.47-.97 5.06-.98.58-2.29-.13-4.92-1.53l-2.02-1.09c-.44-.23-.66-.35-.9-.41s-.5-.06-1-.06H6.08c-1.49 0-2.23 0-2.76-.38a2 2 0 0 1-.45-.45c-.38-.53-.38-1.27-.38-2.76s0-2.23.38-2.75a2 2 0 0 1 .45-.46c.53-.38 1.27-.38 2.76-.38m13.35 6.34c1.15 0 2.09-1.15 2.09-2.58 0-1.42-.94-2.57-2.1-2.57'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M9.98 7.22 10 18.45a1.58 1.58 0 0 1-3.04.64l-1.82-4.2'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
