import type { Icon } from './types'

export const IconPills: Icon = ({
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
      data-slot='icon-ui-pills'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        width='6.64'
        height='7.51'
        rx='1'
        transform='matrix(.96098 -.27661 .27239 .96219 3.04 15.25)'
        fill='currentColor'
      />
      <rect
        opacity='.2'
        width='6.64'
        height='7.37'
        rx='1'
        transform='matrix(-.96098 -.27661 -.27239 .96219 21.01 9.86)'
        fill='currentColor'
      />
      <rect
        width='6.64'
        height='15.37'
        rx='3.32'
        transform='matrix(.96098 -.27661 .27239 .96219 1.05 8.22)'
        stroke='currentColor'
      />
      <rect
        width='6.64'
        height='15.37'
        rx='3.32'
        transform='matrix(-.96098 -.27661 -.27239 .96219 23 2.83)'
        stroke='currentColor'
      />
      <path d='m3.2 15.68 6.28-1.97' stroke='currentColor' />
      <path d='m20.86 10.3-6.28-1.98' stroke='currentColor' />
    </svg>
  )
}
