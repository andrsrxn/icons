import type { Icon } from './types'

export const IconTextFirstlineCenter: Icon = ({
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
      data-slot='icon-ui-text-firstline-center'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        width='6.84'
        height='6.84'
        rx='2'
        transform='matrix(-1 0 0 1 15.42 4.14)'
        fill='currentColor'
      />
      <rect
        width='6.84'
        height='6.84'
        rx='2'
        transform='matrix(-1 0 0 1 15.42 4.14)'
        stroke='currentColor'
      />
      <path d='M2.7 5.25h2.64' stroke='currentColor' />
      <path d='M18.66 5.25h2.64' stroke='currentColor' />
      <path d='M2.7 15h18.6' stroke='currentColor' />
      <path d='M2.7 9.96h2.64' stroke='currentColor' />
      <path d='M18.66 9.96h2.64' stroke='currentColor' />
      <path d='M2.7 19.86h18.6' stroke='currentColor' />
    </svg>
  )
}
