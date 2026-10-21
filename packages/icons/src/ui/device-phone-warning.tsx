import type { Icon } from './types'

export const IconDevicePhoneWarning: Icon = ({
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
      data-slot='icon-ui-device-phone-warning'
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
        d='M18.61 10.87V7.75c0-2.83 0-4.24-.88-5.12s-2.3-.88-5.12-.88h-1.22c-2.83 0-4.24 0-5.12.88s-.88 2.3-.88 5.12v8.5c0 2.83 0 4.24.88 5.12s2.3.88 5.15.88'
        stroke='currentColor'
      />
      <path d='M14.56 5.16H9.44' stroke='currentColor' />
      <path d='M15.96 18.69v-4.26' stroke='currentColor' />
      <path
        d='M16.42 22a.47.47 0 1 1-.93 0 .47.47 0 0 1 .93 0'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
