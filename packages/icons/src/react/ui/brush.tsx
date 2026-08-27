import type { Icon } from './types'

export const IconBrush: Icon = ({
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
      data-slot='ui-icon-brush'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M6.68 21.05H3.85c-.73 0-1.1 0-1.25-.21-.15-.22 0-.58.27-1.3.24-.63.44-1.32.44-1.86a3.37 3.37 0 1 1 3.37 3.37'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <rect
        opacity='.2'
        x='18.59'
        y='1.77'
        width='5.29'
        height='16.22'
        rx='2'
        transform='rotate(45 18.6 1.77)'
        fill='currentColor'
      />
      <path
        d='M17.45 3.35c.31-.26.47-.39.62-.48a2 2 0 0 1 2.13.1c.15.1.3.24.58.52.3.3.45.44.55.59a2 2 0 0 1 .08 2.16c-.09.16-.23.32-.5.63l-6.99 8.09c-.88 1.02-1.32 1.53-1.86 1.7a2 2 0 0 1-1.06.03c-.55-.13-1.03-.6-1.98-1.55-.96-.97-1.45-1.45-1.58-2.01a2 2 0 0 1 .05-1.07c.18-.55.7-.99 1.75-1.86z'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
