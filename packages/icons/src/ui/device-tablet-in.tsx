import type { Icon } from './types'

export const IconDeviceTabletIn: Icon = ({
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
      data-slot='icon-ui-device-tablet-in'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M9.77 22.3c-2.82 0-4.24 0-5.12-.87-.88-.88-.88-2.3-.88-5.12V7.69c0-2.83 0-4.24.88-5.12s2.3-.88 5.12-.88h8.5v6.17l1.96-1.17v9.62c0 2.83 0 4.24-.88 5.12s-2.3.88-5.12.88z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path d='m15.46 5.71.1.1c1.33 1.33 2 2 2.83 2s1.5-.67 2.83-2l.1-.1' stroke='currentColor' />
      <path d='M18.4 1.41v6.13' stroke='currentColor' />
      <path
        d='M20.23 11.46v4.85c0 2.83 0 4.24-.88 5.12s-2.3.88-5.12.88H9.77c-2.82 0-4.24 0-5.12-.88s-.88-2.3-.88-5.12V7.69c0-2.83 0-4.24.88-5.12s2.3-.88 5.12-.88h2.08'
        stroke='currentColor'
      />
      <path
        d='M12.86 17.86a.86.86 0 1 1-1.72 0 .86.86 0 0 1 1.72 0'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
