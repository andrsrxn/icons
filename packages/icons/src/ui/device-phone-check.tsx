import type { Icon } from './types'

export const IconDevicePhoneCheck: Icon = ({
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
      data-slot='icon-ui-device-phone-check'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M11.39 22.25c-2.83 0-4.24 0-5.12-.88s-.88-2.3-.88-5.12v-8.5c0-2.83 0-4.24.88-5.12s2.3-.88 5.12-.88h1.22c2.83 0 4.24 0 5.12.88s.88 2.3.88 5.12V20.1l-1.58 2.14z'
        fill='currentColor'
      />
      <path
        d='M11.26 22.25c-2.7 0-4.05 0-4.92-.8l-.14-.15c-.81-.87-.81-2.22-.81-4.92V7.75c0-2.83 0-4.24.88-5.12s2.3-.88 5.12-.88h1.22c2.83 0 4.24 0 5.12.88s.88 2.3.88 5.12v7.37'
        stroke='currentColor'
      />
      <path d='M14.56 5.16H9.44' stroke='currentColor' />
      <path
        d='m14.56 20.35.59.72c.72.87 1.08 1.3 1.55 1.3s.83-.43 1.54-1.3l2.98-3.65'
        stroke='currentColor'
      />
    </svg>
  )
}
