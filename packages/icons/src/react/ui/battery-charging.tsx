import type { Icon } from './types'

export const IconBatteryCharging: Icon = ({
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
      data-slot='ui-icon-battery-charging'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect
        opacity='.2'
        x='2.74'
        y='6.66'
        width='15.55'
        height='10.69'
        rx='3'
        fill='currentColor'
      />
      <rect
        x='2.74'
        y='6.66'
        width='15.55'
        height='10.69'
        rx='3'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='m18.56 8.83.63.26c.8.33 1.2.5 1.49.78a2 2 0 0 1 .43.64c.15.37.15.8.15 1.67 0 .88 0 1.32-.16 1.7a2 2 0 0 1-.44.64c-.29.28-.7.45-1.51.77l-.6.23M10.5 9.4l-.85.91c-.68.73-1.02 1.09-.89 1.39s.63.3 1.62.3h.22c1.02 0 1.53 0 1.66.3.13.31-.23.67-.95 1.4l-.81.82'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
