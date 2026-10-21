import type { Icon } from './types'

export const IconDevicePhoneMove: Icon = ({
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
      data-slot='icon-ui-device-phone-move'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M11.39 1.75c-2.83 0-4.24 0-5.12.88s-.88 2.3-.88 5.12v8.5c0 2.83 0 4.24.88 5.12s2.3.88 5.12.88h6.34l2.1-3.37-1.22-2.32V7.75c0-2.83 0-4.24-.88-5.12s-2.3-.88-5.12-.88z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M18.61 12.49V7.75c0-2.83 0-4.24-.88-5.12s-2.3-.88-5.12-.88h-1.22c-2.83 0-4.24 0-5.12.88s-.88 2.3-.88 5.12v9.27c0 2.09 0 3.13.5 3.89a3 3 0 0 0 .85.84c.75.5 1.8.5 3.88.5'
        stroke='currentColor'
      />
      <path d='M14.56 5.16H9.44' stroke='currentColor' />
      <path d='m17.66 16.54.1.1c1.34 1.33 2 2 2 2.83s-.66 1.5-2 2.83l-.1.1' stroke='currentColor' />
      <path d='M13.37 19.47h6.12' stroke='currentColor' />
    </svg>
  )
}
