import type { Icon } from './types'

export const IconDeviceTabletCheck: Icon = ({
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
      data-slot='icon-ui-device-tablet-check'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        x='3.77'
        y='22.31'
        width='20.62'
        height='16.45'
        rx='3'
        transform='rotate(-90 3.77 22.3)'
        fill='currentColor'
      />
      <path
        d='M20.23 10.6v5.7c0 2.84 0 4.25-.88 5.13s-2.3.88-5.12.88H9.77c-2.82 0-4.24 0-5.12-.88s-.88-2.3-.88-5.12V7.69c0-2.83 0-4.24.88-5.12s2.3-.88 5.12-.88h2.24'
        stroke='currentColor'
      />
      <path
        d='M12.86 17.86a.86.86 0 1 1-1.72 0 .86.86 0 0 1 1.72 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='m14.82 4.62.59.72h0c.72.87 1.07 1.31 1.55 1.3.47 0 .83-.43 1.54-1.3l2.98-3.65'
        stroke='currentColor'
      />
    </svg>
  )
}
