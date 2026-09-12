import type { Icon } from './types'

export const IconTablets: Icon = ({
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
      data-slot='icon-ui-tablets'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        width='7.26'
        height='3.37'
        rx='1'
        transform='matrix(.96098 -.27661 .27239 .96219 2.62 16.2)'
        fill='currentColor'
      />
      <rect
        opacity='.2'
        width='7.33'
        height='4.03'
        rx='1'
        transform='matrix(-.96098 -.27661 -.27239 .96219 21.68 9.47)'
        fill='currentColor'
      />
      <rect
        width='8.45'
        height='8.83'
        rx='4.23'
        transform='matrix(.96098 -.27661 .27239 .96219 .77 11.85)'
        stroke='currentColor'
      />
      <rect
        width='8.43'
        height='8.55'
        rx='4.21'
        transform='matrix(-.96098 -.27661 -.27239 .96219 23.24 5.96)'
        stroke='currentColor'
      />
      <path d='m21.17 9.9-6.29-1.98' stroke='currentColor' />
      <path d='m2.89 15.92 6.28-1.97' stroke='currentColor' />
    </svg>
  )
}
