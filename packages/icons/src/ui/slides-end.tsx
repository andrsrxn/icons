import type { Icon } from './types'

export const IconSlidesEnd: Icon = ({
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
      data-slot='icon-ui-slides-end'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        width='16.86'
        height='13.2'
        rx='3'
        transform='matrix(0 -1 -1 0 22.23 20.43)'
        fill='currentColor'
      />
      <rect
        width='16.86'
        height='13.2'
        rx='3'
        transform='matrix(0 -1 -1 0 22.23 20.43)'
        stroke='currentColor'
      />
      <path d='M1.72 18.66V5.34' stroke='currentColor' />
      <path d='M5.61 18.66V5.34' stroke='currentColor' />
    </svg>
  )
}
