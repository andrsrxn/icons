import type { Icon } from './types'

export const IconDevicePhoneIn: Icon = ({
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
      data-slot='icon-ui-device-phone-in'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M11.39 1.75c-2.83 0-4.24 0-5.12.88s-.88 2.3-.88 5.12v8.5c0 2.83 0 4.24.88 5.12s2.3.88 5.12.88h5.17v-6.1l2.05 1.12V7.75c0-2.83 0-4.24-.88-5.12s-2.3-.88-5.12-.88z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M18.61 11.94v-4.2c0-2.82 0-4.23-.88-5.11s-2.3-.88-5.12-.88h-1.22c-2.83 0-4.24 0-5.12.88s-.88 2.3-.88 5.12v8.74c0 2.6 0 3.9.75 4.75l.26.26c.85.75 2.15.75 4.75.75'
        stroke='currentColor'
      />
      <path d='M14.56 5.16H9.44' stroke='currentColor' />
      <path
        d='m13.69 18.32.1-.1c1.33-1.33 2-2 2.82-2 .83 0 1.5.67 2.83 2l.1.1'
        stroke='currentColor'
      />
      <path d='M16.62 22.62v-6.13' stroke='currentColor' />
    </svg>
  )
}
