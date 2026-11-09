import type { Icon } from './types'

export const IconCalendarCurrency: Icon = ({
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
      data-slot='icon-ui-calendar-currency'
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
        d='M20.98 12.44v-.98c0-3.77 0-5.66-1.17-6.83s-3.06-1.17-6.83-1.17H11c-3.77 0-5.66 0-6.83 1.17S3 7.7 3 11.46v1.97c0 3.77 0 5.66 1.17 6.83s3.06 1.17 6.83 1.17h.37'
        stroke='currentColor'
      />
      <path d='M7.68 1.76v3.4' stroke='currentColor' />
      <path d='M16.36 1.76v3.4' stroke='currentColor' />
      <path d='M20.56 8.7H3.83' stroke='currentColor' />
      <path
        d='M19.5 15.74c-.2-.66-1.2-1.17-2.39-1.17-1.17 0-2.46.44-2.46 1.77 0 2.89 4.86.67 4.86 3.34 0 1.24-1.2 1.7-2.4 1.7s-2.07-.5-2.46-1.19'
        stroke='currentColor'
      />
      <path d='M17.06 22.43v-.92' stroke='currentColor' />
      <path d='M17.06 14.42v-.9' stroke='currentColor' />
    </svg>
  )
}
