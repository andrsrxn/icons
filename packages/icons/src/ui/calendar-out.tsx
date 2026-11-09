import type { Icon } from './types'

export const IconCalendarOut: Icon = ({
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
      data-slot='icon-ui-calendar-out'
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
        d='M20.98 12.55v-1.1c0-3.76 0-5.65-1.17-6.82s-3.06-1.17-6.83-1.17H11c-3.77 0-5.66 0-6.83 1.17S3 7.7 3 11.46v1.97c0 3.77 0 5.66 1.17 6.83s3.06 1.17 6.83 1.17h1.4'
        stroke='currentColor'
      />
      <path d='M7.68 1.76v3.4' stroke='currentColor' />
      <path d='M16.36 1.76v3.4' stroke='currentColor' />
      <path d='M20.56 8.7H3.83' stroke='currentColor' />
      <path
        d='m21.6 19.22-.32.31c-1.33 1.34-2 2-2.82 2-.83 0-1.5-.66-2.84-2l-.3-.3'
        stroke='currentColor'
      />
      <path d='M18.45 15.24v5.87' stroke='currentColor' />
    </svg>
  )
}
