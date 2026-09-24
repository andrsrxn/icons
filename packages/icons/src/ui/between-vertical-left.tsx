import type { Icon } from './types'

export const IconBetweenVerticalLeft: Icon = ({
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
      data-slot='icon-ui-between-vertical-left'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        width='7.26'
        height='13.85'
        rx='2'
        transform='matrix(0 -1 -1 0 21.27 10)'
        fill='currentColor'
      />
      <rect
        opacity='.2'
        width='7.26'
        height='13.85'
        rx='2'
        transform='scale(1 -1)rotate(90 21.27 0)'
        fill='currentColor'
      />
      <rect
        width='7.26'
        height='13.85'
        rx='2'
        transform='matrix(0 -1 -1 0 21.27 10)'
        stroke='currentColor'
      />
      <rect
        width='7.26'
        height='13.85'
        rx='2'
        transform='scale(1 -1)rotate(90 21.27 0)'
        stroke='currentColor'
      />
      <path
        d='m1.63 15.89 1.88-1.88c1-1 1.5-1.5 1.5-2.12s-.5-1.12-1.5-2.13L1.64 7.88'
        stroke='currentColor'
      />
    </svg>
  )
}
