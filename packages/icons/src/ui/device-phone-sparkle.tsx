import type { Icon } from './types'

export const IconDevicePhoneSparkle: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel?.trim())

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      data-slot='icon-ui-device-phone-sparkle'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M11.39 22.25c-2.83 0-4.24 0-5.12-.88s-.88-2.3-.88-5.12v-8.5c0-2.83 0-4.24.88-5.12s2.3-.88 5.12-.88h1.22c2.83 0 4.24 0 5.12.88s.88 2.3.88 5.12v9.07l-1.52-1-2.67 2.55 3.2 3.88z'
        fill='currentColor'
      />
      <path
        d='M11.78 22.25h-.39c-2.83 0-4.24 0-5.12-.88s-.88-2.3-.88-5.12v-8.5c0-2.83 0-4.24.88-5.12s2.3-.88 5.12-.88h1.22c2.83 0 4.24 0 5.12.88s.88 2.3.88 5.12v3.26'
        stroke='currentColor'
      />
      <path d='M14.56 5.16H9.44' stroke='currentColor' />
      <path d='M17.23 14.7c0 1.8-1.95 3.77-3.78 3.77' stroke='currentColor' />
      <path d='M17.23 14.7c0 1.81 1.96 3.77 3.78 3.77' stroke='currentColor' />
      <path d='M17.23 22.25c0-1.78-1.97-3.78-3.78-3.78' stroke='currentColor' />
      <path d='M17.23 22.25c0-1.8 1.99-3.78 3.78-3.78' stroke='currentColor' />
    </svg>
  )
}
