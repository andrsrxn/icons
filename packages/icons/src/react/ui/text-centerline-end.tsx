import type { Icon } from './types'

export const IconTextCenterlineEnd: Icon = ({
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
      data-slot='icon-ui-text-centerline-end'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        width='6.8'
        height='6.8'
        rx='2'
        transform='matrix(-1 0 0 1 20.7 8.56)'
        fill='currentColor'
      />
      <rect
        width='6.8'
        height='6.8'
        rx='2'
        transform='matrix(-1 0 0 1 20.7 8.56)'
        stroke='currentColor'
      />
      <path d='M2.77 9.66h8.19' stroke='currentColor' />
      <path d='M2.77 19.34h18.47' stroke='currentColor' />
      <path d='M2.77 14.34h8.19' stroke='currentColor' />
      <path d='M2.76 4.66h18.48' stroke='currentColor' />
    </svg>
  )
}
