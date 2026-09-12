import type { Icon } from './types'

export const IconCalendarMinus: Icon = ({
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
      data-slot='icon-ui-calendar-minus'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect opacity='.2' x='3' y='3.45' width='18' height='5.26' rx='1' fill='currentColor' />
      <rect x='3' y='3.45' width='18' height='18' rx='3' stroke='currentColor' />
      <path d='M7.69 1.75v3.4' stroke='currentColor' />
      <path d='M16.37 1.75v3.4' stroke='currentColor' />
      <path d='M20.58 8.7H3.83' stroke='currentColor' />
      <path d='M8.71 15.08h6.58' stroke='currentColor' />
    </svg>
  )
}
