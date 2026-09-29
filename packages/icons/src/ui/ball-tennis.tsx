import type { Icon } from './types'

export const IconBallTennis: Icon = ({
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
      data-slot='icon-ui-ball-tennis'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M22.04 12c0 3.86-1.61 7.4-3.14 7.4s-2.4-3.54-2.4-7.4.87-7.36 2.4-7.36 3.14 3.5 3.14 7.36'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M2.03 11.98c0 3.87 1.61 7.4 3.14 7.4 1.52 0 2.39-3.53 2.39-7.4 0-3.86-.87-7.36-2.4-7.36s-3.13 3.5-3.13 7.36'
        fill='currentColor'
      />
      <path d='M1.7 12A10.3 10.3 0 0 0 12 22.31 10.31 10.31 0 1 0 1.7 12' stroke='currentColor' />
      <path d='M5.15 19.63s2.7-2.82 2.7-7.63-2.7-7.63-2.7-7.63' stroke='currentColor' />
      <path d='M18.86 19.63s-2.7-2.82-2.7-7.63 2.7-7.63 2.7-7.63' stroke='currentColor' />
    </svg>
  )
}
