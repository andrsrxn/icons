import type { Icon } from './types'

export const IconTextFirstlineRight: Icon = ({
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
      data-slot='icon-ui-text-firstline-right'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        width='6.81'
        height='6.81'
        rx='2'
        transform='matrix(-1 0 0 1 20.7 4.18)'
        fill='currentColor'
      />
      <rect
        width='6.81'
        height='6.81'
        rx='2'
        transform='matrix(-1 0 0 1 20.7 4.18)'
        stroke='currentColor'
      />
      <path d='M2.75 5.28h8.2' stroke='currentColor' />
      <path d='M2.75 14.98h18.5' stroke='currentColor' />
      <path d='M2.75 9.97h8.2' stroke='currentColor' />
      <path d='M2.75 19.82h18.5' stroke='currentColor' />
    </svg>
  )
}
