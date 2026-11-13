import type { Icon } from './types'

export const IconCalendarEvent: Icon = ({
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
      data-slot='icon-ui-calendar-event'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='m3 7.66.01-.36a4 4 0 0 1 3.84-3.84h10.28a4 4 0 0 1 3.85 4.2v.09a1 1 0 0 1-.96.96H3.96a1 1 0 0 1-.95-.96z'
        fill='currentColor'
      />
      <path
        d='M11 3.46h1.98c3.77 0 5.66 0 6.83 1.17s1.17 3.06 1.17 6.83v1.97c0 3.77 0 5.66-1.17 6.83s-3.06 1.17-6.83 1.17H11c-3.77 0-5.66 0-6.83-1.17S3 17.2 3 13.43v-1.97C3 7.69 3 5.8 4.18 4.63S7.24 3.46 11 3.46'
        stroke='currentColor'
      />
      <path
        opacity='.2'
        d='M9.27 11.7H8.4c-.94 0-1.41 0-1.7.3s-.3.76-.3 1.7v.88c0 .94 0 1.41.3 1.7.29.3.76.3 1.7.3h.87c.95 0 1.42 0 1.71-.3.3-.29.3-.76.3-1.7v-.87c0-.95 0-1.42-.3-1.71s-.76-.3-1.7-.3'
        fill='currentColor'
      />
      <path
        d='M8.4 11.7h.87c.95 0 1.42 0 1.71.3s.3.76.3 1.7v.88c0 .94 0 1.41-.3 1.7s-.76.3-1.7.3H8.4c-.94 0-1.41 0-1.7-.3-.3-.29-.3-.76-.3-1.7v-.87c0-.95 0-1.42.3-1.71.29-.3.76-.3 1.7-.3'
        stroke='currentColor'
      />
      <path d='M7.68 1.76v3.4' stroke='currentColor' />
      <path d='M16.36 1.76v3.4' stroke='currentColor' />
      <path d='M20.56 8.7H3.83' stroke='currentColor' />
    </svg>
  )
}
