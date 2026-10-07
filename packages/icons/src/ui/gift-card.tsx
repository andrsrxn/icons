import type { Icon } from './types'

export const IconGiftCard: Icon = ({
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
      data-slot='icon-ui-gift-card'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        width='14.84'
        height='20.71'
        rx='3'
        transform='matrix(0 -1 -1 0 22.36 19.42)'
        fill='currentColor'
      />
      <rect
        width='14.84'
        height='20.71'
        rx='3'
        transform='matrix(0 -1 -1 0 22.36 19.42)'
        stroke='currentColor'
      />
      <path d='M9.51 19.42V4.58' stroke='currentColor' />
      <path d='M6.02 15.49 13 8.5' stroke='currentColor' />
      <path d='m13 15.5-6.98-7' stroke='currentColor' />
      <path d='M22.36 12H1.76' stroke='currentColor' />
    </svg>
  )
}
