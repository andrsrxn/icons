import type { Icon } from './types'

export const IconNotificationBox: Icon = ({
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
      data-slot='ui-icon-notification-box'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M3.05 20.96V3.66h12.97L14.46 5.8l1.31 2.82 2.7.61 1.88-1.26v12.98z'
        fill='currentColor'
      />
      <path
        d='M20.34 12.47v2.78c0 2.83 0 4.24-.88 5.12-.87.88-2.29.88-5.12.88h-5.6c-2.82 0-4.23 0-5.11-.88s-.88-2.3-.88-5.12v-5.6c0-2.83 0-4.24.88-5.12s2.29-.88 5.12-.88h2.85'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <circle
        cx='17.79'
        cy='6.18'
        r='3.39'
        transform='rotate(90 17.8 6.18)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
