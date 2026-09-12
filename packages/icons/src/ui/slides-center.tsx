import type { Icon } from './types'

export const IconSlidesCenter: Icon = ({
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
      data-slot='icon-ui-slides-center'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        width='16.75'
        height='13.63'
        rx='3'
        transform='matrix(0 -1 -1 0 18.81 20.38)'
        fill='currentColor'
      />
      <rect
        width='16.75'
        height='13.63'
        rx='3'
        transform='matrix(0 -1 -1 0 18.81 20.38)'
        stroke='currentColor'
      />
      <path d='M1.78 18.61V5.4' stroke='currentColor' />
      <path d='M22.22 18.61V5.4' stroke='currentColor' />
    </svg>
  )
}
