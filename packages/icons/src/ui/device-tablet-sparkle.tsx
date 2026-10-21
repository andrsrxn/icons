import type { Icon } from './types'

export const IconDeviceTabletSparkle: Icon = ({
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
      data-slot='icon-ui-device-tablet-sparkle'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M9.77 22.3c-2.82 0-4.24 0-5.12-.87-.88-.88-.88-2.3-.88-5.12V7.69c0-2.83 0-4.24.88-5.12s2.3-.88 5.12-.88h7.61l-2.67 3.86 2.67 2.72 2.85-2.97v11c0 2.84 0 4.25-.88 5.13s-2.3.88-5.12.88z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M20.23 12.03v4.28c0 2.83 0 4.24-.88 5.12s-2.3.88-5.12.88H9.77c-2.82 0-4.24 0-5.12-.88s-.88-2.3-.88-5.12V7.69c0-2.83 0-4.24.88-5.12s2.3-.88 5.12-.88h1.74'
        stroke='currentColor'
      />
      <path
        d='M12.86 17.86a.86.86 0 1 1-1.72 0 .86.86 0 0 1 1.72 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path d='M17.33 1.52c0 1.87-2.02 3.9-3.9 3.9' stroke='currentColor' />
      <path d='M17.33 1.52c0 1.87 2.03 3.9 3.9 3.9' stroke='currentColor' />
      <path d='M17.33 9.32c0-1.84-2.03-3.9-3.9-3.9' stroke='currentColor' />
      <path d='M17.33 9.32c0-1.86 2.05-3.9 3.9-3.9' stroke='currentColor' />
    </svg>
  )
}
