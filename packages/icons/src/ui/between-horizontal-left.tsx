import type { Icon } from './types'

export const IconBetweenHorizontalLeft: Icon = ({
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
      data-slot='icon-ui-between-horizontal-left'
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
        transform='matrix(1 0 0 -1 14 21.3)'
        fill='currentColor'
      />
      <rect
        opacity='.2'
        width='7.26'
        height='13.85'
        rx='2'
        transform='matrix(1 0 0 -1 2.74 21.3)'
        fill='currentColor'
      />
      <rect
        width='7.26'
        height='13.85'
        rx='2'
        transform='matrix(1 0 0 -1 14 21.3)'
        stroke='currentColor'
      />
      <rect
        width='7.26'
        height='13.85'
        rx='2'
        transform='matrix(1 0 0 -1 2.74 21.3)'
        stroke='currentColor'
      />
      <path
        d='m8.11 1.67 1.88 1.88c1 1 1.5 1.5 2.12 1.5s1.12-.5 2.13-1.5l1.88-1.88'
        stroke='currentColor'
      />
    </svg>
  )
}
