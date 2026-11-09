import type { Icon } from './types'

export const IconCalendarOff: Icon = ({
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
      data-slot='icon-ui-calendar-off'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M3 7.66v-.37a4 4 0 0 1 3.85-3.83h10.3A4 4 0 0 1 21 7.29v.46a1 1 0 0 1-.95.96H3.95A1 1 0 0 1 3 7.75z'
        fill='currentColor'
      />
      <path
        d='M19.82 20.27c-1.17 1.17-3.05 1.17-6.82 1.17h-2c-3.77 0-5.65 0-6.82-1.17C3 19.1 3 17.21 3 13.44v-1.99C3 7.68 3 5.8 4.18 4.62'
        stroke='currentColor'
      />
      <path
        d='M7.7 3.5q1.34-.06 3.3-.05h2c3.77 0 5.65 0 6.82 1.17C21 5.8 21 7.68 21 11.45v2q.01 1.95-.05 3.3'
        stroke='currentColor'
      />
      <path d='M7.69 1.75v2.21' stroke='currentColor' />
      <path d='M16.37 1.75v3.4' stroke='currentColor' />
      <path d='M8.64 8.7H3.31' stroke='currentColor' />
      <path d='M20.57 8.7h-8.09' stroke='currentColor' />
      <path d='m2.65 2.65 18.7 18.7' stroke='currentColor' />
    </svg>
  )
}
