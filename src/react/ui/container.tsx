import type { Icon } from './types'

export const IconContainer: Icon = ({
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
      data-slot='ui-icon-container'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect
        opacity='.2'
        x='2.22'
        y='5.91'
        width='19.56'
        height='12.23'
        rx='3'
        fill='currentColor'
      />
      <rect
        x='2.56'
        y='5.91'
        width='18.88'
        height='12.23'
        rx='3'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M6.11 14.52v-5m3.93 5v-5m3.92 5v-5m3.93 5v-5'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
