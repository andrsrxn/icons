import type { Icon } from './types'

export const IconBetweenVerticalRight: Icon = ({
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
      data-slot='icon-ui-between-vertical-right'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        x='2.65'
        y='10'
        width='7.26'
        height='13.85'
        rx='2'
        transform='rotate(-90 2.65 10)'
        fill='currentColor'
      />
      <rect
        opacity='.2'
        x='2.65'
        y='21.26'
        width='7.26'
        height='13.85'
        rx='2'
        transform='rotate(-90 2.65 21.26)'
        fill='currentColor'
      />
      <rect
        x='2.65'
        y='10'
        width='7.26'
        height='13.85'
        rx='2'
        transform='rotate(-90 2.65 10)'
        stroke='currentColor'
      />
      <rect
        x='2.65'
        y='21.26'
        width='7.26'
        height='13.85'
        rx='2'
        transform='rotate(-90 2.65 21.26)'
        stroke='currentColor'
      />
      <path
        d='m22.3 15.89-1.89-1.88c-1-1-1.5-1.5-1.5-2.12s.5-1.12 1.5-2.13l1.88-1.88'
        stroke='currentColor'
      />
    </svg>
  )
}
