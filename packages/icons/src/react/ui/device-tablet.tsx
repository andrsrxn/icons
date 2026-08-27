import type { Icon } from './types'

export const IconDeviceTablet: Icon = ({
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
      data-slot='ui-icon-device-tablet'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect
        opacity='.2'
        x='5'
        y='21.3'
        width='18.61'
        height='14'
        rx='3'
        transform='rotate(-90 5 21.3)'
        fill='currentColor'
      />
      <rect
        x='5'
        y='21.3'
        width='18.61'
        height='14'
        rx='3'
        transform='rotate(-90 5 21.3)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M12.76 17.08a.76.76 0 1 1-1.52 0 .76.76 0 0 1 1.52 0'
        fill='currentColor'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
