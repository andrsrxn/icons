import type { Icon } from './types'

export const IconDevicePhoneX: Icon = ({
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
      data-slot='icon-ui-device-phone-x'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M11.39 22.25c-2.83 0-4.24 0-5.12-.88s-.88-2.3-.88-5.12v-8.5c0-2.83 0-4.24.88-5.12s2.3-.88 5.12-.88h1.22c2.83 0 4.24 0 5.12.88s.88 2.3.88 5.12v11.02l-3.53 3.48z'
        fill='currentColor'
      />
      <path
        d='M11.42 22.25c-2.85 0-4.27 0-5.15-.88s-.88-2.3-.88-5.12v-8.5c0-2.83 0-4.24.88-5.12s2.3-.88 5.12-.88h1.22c2.83 0 4.24 0 5.12.88s.88 2.3.88 5.12v5.62'
        stroke='currentColor'
      />
      <path d='M14.56 5.16H9.44' stroke='currentColor' />
      <path d='m15.17 16.72 5.53 5.53' stroke='currentColor' />
      <path d='m15.17 22.25 5.53-5.53' stroke='currentColor' />
    </svg>
  )
}
