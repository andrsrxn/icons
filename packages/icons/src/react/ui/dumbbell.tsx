import type { Icon } from './types'

export const IconDumbbell: Icon = ({
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
      data-slot='icon-ui-dumbbell'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        x='15.4'
        y='3.58'
        width='3.64'
        height='7.11'
        rx='1.82'
        transform='rotate(-45 15.4 3.58)'
        fill='currentColor'
      />
      <rect
        opacity='.2'
        width='3.64'
        height='7.11'
        rx='1.82'
        transform='scale(-1 1)rotate(45 -20.37 3.38)'
        fill='currentColor'
      />
      <rect
        opacity='.2'
        x='10.62'
        y='5.63'
        width='4.83'
        height='10.97'
        rx='2'
        transform='rotate(-45 10.62 5.63)'
        fill='currentColor'
      />
      <rect
        opacity='.2'
        width='4.83'
        height='10.97'
        rx='2'
        transform='scale(-1 1)rotate(45 -15.63 -1.49)'
        fill='currentColor'
      />
      <rect
        x='15.4'
        y='3.58'
        width='3.64'
        height='7.11'
        rx='1.82'
        transform='rotate(-45 15.4 3.58)'
        stroke='currentColor'
      />
      <rect
        width='3.64'
        height='7.11'
        rx='1.82'
        transform='scale(-1 1)rotate(45 -20.37 3.38)'
        stroke='currentColor'
      />
      <rect
        x='10.62'
        y='5.63'
        width='4.83'
        height='10.97'
        rx='2'
        transform='rotate(-45 10.62 5.63)'
        stroke='currentColor'
      />
      <rect
        width='4.83'
        height='10.97'
        rx='2'
        transform='scale(-1 1)rotate(45 -15.63 -1.49)'
        stroke='currentColor'
      />
      <path
        d='M14.66 9.67c-1.33.4-2.1.87-3.11 1.88a6.5 6.5 0 0 0-1.88 3.11'
        stroke='currentColor'
      />
      <path d='m21.83 2.45-1.2 1.2' stroke='currentColor' />
      <path d='m2.45 21.83 1.2-1.2' stroke='currentColor' />
    </svg>
  )
}
