import type { Icon } from './types'

export const IconTouchpad: Icon = ({
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
      data-slot='ui-icon-touchpad'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect opacity='.2' x='2.71' y='12' width='18.58' height='6.97' rx='2' fill='currentColor' />
      <rect
        x='2.71'
        y='5.03'
        width='18.58'
        height='13.94'
        rx='3'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path d='M2.7 12h18.6M12 18.97V12' stroke='currentColor' strokeWidth={strokeWidth} />
    </svg>
  )
}
