import type { Icon } from './types'

export const IconDevicePhone: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='icon-ui-device-phone'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        x='5.39'
        y='22.25'
        width='20.5'
        height='13.22'
        rx='3'
        transform='rotate(-90 5.39 22.25)'
        fill='currentColor'
      />
      <rect
        x='5.39'
        y='22.25'
        width='20.5'
        height='13.22'
        rx='3'
        transform='rotate(-90 5.39 22.25)'
        stroke='currentColor'
      />
      <path d='M14.56 5.16H9.44' stroke='currentColor' />
    </svg>
  )
}
