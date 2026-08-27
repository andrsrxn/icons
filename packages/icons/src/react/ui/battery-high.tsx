import type { Icon } from './types'

export const IconBatteryHigh: Icon = ({
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
      data-slot='ui-icon-battery-high'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M2.74 10.66c0-1.89 0-2.83.58-3.42.59-.58 1.53-.58 3.42-.58h7.78v10.68H6.74c-1.89 0-2.83 0-3.42-.58-.58-.59-.58-1.53-.58-3.42z'
        fill='currentColor'
      />
      <rect
        x='2.74'
        y='6.66'
        width='15.55'
        height='10.69'
        rx='2'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='m18.56 8.83.63.26c.8.33 1.2.5 1.49.78a2 2 0 0 1 .43.64c.15.37.15.8.15 1.67 0 .88 0 1.32-.16 1.7a2 2 0 0 1-.44.64c-.29.28-.7.45-1.51.77l-.6.23M6.01 9.47v5.06m3-5.06v5.06m3-5.06v5.06'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
