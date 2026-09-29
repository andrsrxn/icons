import type { Icon } from './types'

export const IconDevicePhoneSparkle: Icon = ({
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
      data-slot='icon-ui-device-phone-sparkle'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M11.39 22.25c-2.83 0-4.24 0-5.12-.88s-.88-2.3-.88-5.12v-8.5c0-2.83 0-4.24.88-5.12s2.3-.88 5.12-.88h1.22c2.83 0 4.24 0 5.12.88s.88 2.3.88 5.12v9.07l-2.2.17-1.07 2.08 2.28 3.18z'
        fill='currentColor'
      />
      <path
        d='M11.78 22.25h-.39c-2.83 0-4.24 0-5.12-.88s-.88-2.3-.88-5.12v-8.5c0-2.83 0-4.24.88-5.12s2.3-.88 5.12-.88h1.22c2.83 0 4.24 0 5.12.88s.88 2.3.88 5.12V11'
        stroke='currentColor'
      />
      <path d='M14.56 5.16H9.44' stroke='currentColor' />
      <path d='M13.45 18.47c1.83 0 3.78-1.96 3.78-3.77' stroke='currentColor' />
      <path d='M21 18.47c-1.8 0-3.77-1.96-3.77-3.77' stroke='currentColor' />
      <path d='M13.45 18.47c1.81 0 3.78 2 3.78 3.78' stroke='currentColor' />
      <path d='M21 18.47c-1.78 0-3.77 1.98-3.77 3.78' stroke='currentColor' />
    </svg>
  )
}
