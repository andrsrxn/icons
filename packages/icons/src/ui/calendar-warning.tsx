import type { Icon } from './types'

export const IconCalendarWarning: Icon = ({
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
      data-slot='icon-ui-calendar-warning'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M3 8.7c0-1.16 0-1.75.12-2.23a4 4 0 0 1 2.9-2.9c.49-.12 1.07-.12 2.24-.12h7.48c1.17 0 1.75 0 2.23.12a4 4 0 0 1 2.9 2.9c.13.48.13 1.07.13 2.24z'
        fill='currentColor'
      />
      <path
        d='M11 21.45h2c3.77 0 5.65 0 6.83-1.18C21 19.1 21 17.22 21 13.45v-2c0-3.77 0-5.66-1.17-6.83-1.18-1.17-3.06-1.17-6.83-1.17h-2c-3.77 0-5.65 0-6.83 1.17S3 7.68 3 11.45v2c0 3.77 0 5.65 1.17 6.82 1.18 1.18 3.06 1.18 6.83 1.18'
        stroke='currentColor'
      />
      <path d='M7.69 1.75v3.4' stroke='currentColor' />
      <path d='M16.37 1.75v3.4' stroke='currentColor' />
      <path d='M20.58 8.7H3.83' stroke='currentColor' />
      <path d='M12 15v-3.57' stroke='currentColor' />
      <path
        d='M12.42 18.23a.42.42 0 1 1-.84 0 .42.42 0 0 1 .84 0'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
