import type { Icon } from './types'

export const IconBetweenVerticalRight: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel?.trim())

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      data-slot='icon-ui-between-vertical-right'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
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
