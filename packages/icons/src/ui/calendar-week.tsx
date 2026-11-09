import type { Icon } from './types'

export const IconCalendarWeek: Icon = ({
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
      data-slot='icon-ui-calendar-week'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M2.99 7.65v-.38a4 4 0 0 1 3.83-3.83h10.36A4 4 0 0 1 21 7.64v.1a1 1 0 0 1-.96.96H3.94A1 1 0 0 1 3 7.74z'
        fill='currentColor'
      />
      <path
        d='M10.99 21.46H13c3.77 0 5.66 0 6.83-1.17S21 17.23 21 13.46v-2.02c0-3.77 0-5.66-1.17-6.83S16.77 3.44 13 3.44h-2c-3.77 0-5.66 0-6.83 1.17S3 7.67 3 11.44v2.02c0 3.77 0 5.66 1.17 6.83s3.06 1.17 6.83 1.17'
        stroke='currentColor'
      />
      <path d='M7.68 1.73v3.41' stroke='currentColor' />
      <path d='M16.38 1.73v3.41' stroke='currentColor' />
      <path d='M20.6 8.7H3.8' stroke='currentColor' />
      <path d='M7.1 12.88h9.8' stroke='currentColor' />
      <path d='M7.1 17.26h9.8' stroke='currentColor' />
    </svg>
  )
}
