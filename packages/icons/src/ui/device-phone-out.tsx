import type { Icon } from './types'

export const IconDevicePhoneOut: Icon = ({
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
      data-slot='icon-ui-device-phone-out'
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
      <path
        d='M18.61 11.94v-4.2c0-2.82 0-4.23-.88-5.11s-2.3-.88-5.12-.88h-1.22c-2.83 0-4.24 0-5.12.88s-.88 2.3-.88 5.12v9.66c0 1.72 0 2.58.34 3.23A3 3 0 0 0 7 21.91c.65.34 1.51.34 3.23.34'
        stroke='currentColor'
      />
      <path d='M14.56 5.16H9.44' stroke='currentColor' />
      <path
        d='m13.69 20.42.1.1c1.33 1.33 2 2 2.82 2 .83 0 1.5-.67 2.83-2l.1-.1'
        stroke='currentColor'
      />
      <path d='M16.62 16.12v6.13' stroke='currentColor' />
    </svg>
  )
}
