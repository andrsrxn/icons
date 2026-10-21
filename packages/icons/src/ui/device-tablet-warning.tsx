import type { Icon } from './types'

export const IconDeviceTabletWarning: Icon = ({
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
      data-slot='icon-ui-device-tablet-warning'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M9.77 1.7c-2.82 0-4.24 0-5.12.87-.88.88-.88 2.3-.88 5.12v8.62c0 2.83 0 4.24.88 5.12s2.3.88 5.12.88h4.46c2.82 0 4.24 0 5.12-.88s.88-2.3.88-5.12V7.69c0-2.83 0-4.24-.88-5.12s-2.3-.88-5.12-.88z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M20.23 11.2v5.1c0 2.84 0 4.25-.88 5.13s-2.3.88-5.12.88H9.77c-2.82 0-4.24 0-5.12-.88s-.88-2.3-.88-5.12V7.69c0-2.83 0-4.24.88-5.12s2.3-.88 5.12-.88h2.08'
        stroke='currentColor'
      />
      <path
        d='M12.86 17.86a.86.86 0 1 1-1.72 0 .86.86 0 0 1 1.72 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path d='M16.51 5.53V1.27' stroke='currentColor' />
      <path
        d='M16.98 8.84a.47.47 0 1 1-.94 0 .47.47 0 0 1 .94 0'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
