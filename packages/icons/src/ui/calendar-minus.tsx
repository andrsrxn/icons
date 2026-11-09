import type { Icon } from './types'

export const IconCalendarMinus: Icon = ({
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
      data-slot='icon-ui-calendar-minus'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M3 7.65V7.3a4 4 0 0 1 3.84-3.84h10.32a4 4 0 0 1 3.83 3.84v.46a1 1 0 0 1-.95.95H3.96A1 1 0 0 1 3 7.75z'
        fill='currentColor'
      />
      <path
        d='M11 21.45h2c3.77 0 5.65 0 6.83-1.18C21 19.1 21 17.22 21 13.45v-2c0-3.77 0-5.66-1.17-6.83-1.18-1.17-3.06-1.17-6.83-1.17h-2c-3.77 0-5.65 0-6.83 1.17S3 7.68 3 11.45v2c0 3.77 0 5.65 1.17 6.82 1.18 1.18 3.06 1.18 6.83 1.18'
        stroke='currentColor'
      />
      <path d='M7.69 1.75v3.4' stroke='currentColor' />
      <path d='M16.37 1.75v3.4' stroke='currentColor' />
      <path d='M20.58 8.7H3.83' stroke='currentColor' />
      <path d='M8.71 15.08h6.58' stroke='currentColor' />
    </svg>
  )
}
