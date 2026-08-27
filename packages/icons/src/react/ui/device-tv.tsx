import type { Icon } from './types'

export const IconDeviceTv: Icon = ({
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
      data-slot='ui-icon-device-tv'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect opacity='.2' x='2.7' y='6.91' width='18.61' height='12.47' rx='3' fill='currentColor' />
      <rect
        x='2.7'
        y='6.91'
        width='18.61'
        height='12.47'
        rx='3'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path d='m11 6.91-2.19-4.5M13 6.91 14.52 3' stroke='currentColor' strokeWidth={strokeWidth} />
    </svg>
  )
}
