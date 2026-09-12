import type { Icon } from './types'

export const IconCalendarCheck: Icon = ({
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
      data-slot='icon-ui-calendar-check'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect opacity='.2' x='2.98' y='3.43' width='18.01' height='5.26' rx='1' fill='currentColor' />
      <path
        d='m14.38 19.17.97 1.2c.72.87 1.08 1.31 1.56 1.31.47 0 .83-.44 1.55-1.32l3.8-4.69'
        stroke='currentColor'
      />
      <path
        d='M20.99 12.1V9.42c0-2.83 0-4.24-.88-5.12s-2.3-.88-5.12-.88H8.98c-2.83 0-4.24 0-5.12.88s-.88 2.3-.88 5.12v6.01c0 2.83 0 4.25.88 5.12s2.29.88 5.12.88h2.98'
        stroke='currentColor'
      />
      <path d='M7.67 1.73v3.4' stroke='currentColor' />
      <path d='M16.36 1.73v3.4' stroke='currentColor' />
      <path d='M20.57 8.7H3.8' stroke='currentColor' />
    </svg>
  )
}
