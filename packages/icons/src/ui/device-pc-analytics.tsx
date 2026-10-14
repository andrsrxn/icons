import type { Icon } from './types'

export const IconDevicePcAnalytics: Icon = ({
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
      data-slot='icon-ui-device-pc-analytics'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        x='1.74'
        y='3.33'
        width='20.52'
        height='13.75'
        rx='3'
        fill='currentColor'
      />
      <path
        d='M12.75 6.62a.75.75 0 1 0-1.5 0zm-1.52 7.18a.75.75 0 1 0 1.5 0zM12 6.62h-.75l-.02 7.18h1.5l.02-7.18z'
        fill='currentColor'
      />
      <path d='M7.66 10.21v3.6' stroke='currentColor' />
      <path d='M16.34 8.92v4.88' stroke='currentColor' />
      <rect x='1.74' y='3.33' width='20.52' height='13.75' rx='3' stroke='currentColor' />
      <path d='M7.64 21.2h8.7' stroke='currentColor' />
      <path d='M12 21.2v-3.99' stroke='currentColor' />
    </svg>
  )
}
