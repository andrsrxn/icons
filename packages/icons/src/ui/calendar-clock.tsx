import type { Icon } from './types'

export const IconCalendarClock: Icon = ({
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
      data-slot='icon-ui-calendar-clock'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <circle opacity='.2' cx='18.29' cy='18.27' r='3.98' fill='currentColor' />
      <path
        opacity='.2'
        d='m3 7.66.01-.36a4 4 0 0 1 3.84-3.84h10.28a4 4 0 0 1 3.85 4.2v.09a1 1 0 0 1-.96.96H3.96a1 1 0 0 1-.95-.96z'
        fill='currentColor'
      />
      <circle cx='18.29' cy='18.27' r='3.98' stroke='currentColor' />
      <path d='M18.21 16.91v.96c0 .27 0 .4.06.5.06.12.17.2.39.34l.66.44' stroke='currentColor' />
      <path
        d='M21 11.85v-.41c-.01-3.76-.02-5.64-1.19-6.81S16.76 3.46 13 3.46h-2c-3.76 0-5.65 0-6.82 1.17S3 7.7 3 11.46v1.97c0 3.77 0 5.66 1.17 6.83s3.06 1.17 6.83 1.17h.68'
        stroke='currentColor'
      />
      <path d='M7.68 1.76v3.4' stroke='currentColor' />
      <path d='M16.36 1.76v3.4' stroke='currentColor' />
      <path d='M20.56 8.7H3.83' stroke='currentColor' />
    </svg>
  )
}
