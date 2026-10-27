import type { Icon } from './types'

export const IconCalendarMonth: Icon = ({
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
      data-slot='icon-ui-calendar-month'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect opacity='.2' x='2.99' y='3.44' width='18.03' height='5.26' rx='1' fill='currentColor' />
      <rect x='2.99' y='3.44' width='18.03' height='18.03' rx='3' stroke='currentColor' />
      <path d='M7.68 1.73v3.41' stroke='currentColor' />
      <path d='M16.38 1.73v3.41' stroke='currentColor' />
      <path d='M20.6 8.7H3.8' stroke='currentColor' />
      <path d='M16.63 12v5.68' stroke='currentColor' />
      <path d='M12 12v5.68' stroke='currentColor' />
      <path d='M7.37 12v5.68' stroke='currentColor' />
    </svg>
  )
}
