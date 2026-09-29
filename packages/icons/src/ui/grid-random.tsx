import type { Icon } from './types'

export const IconGridRandom: Icon = ({
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
      data-slot='icon-ui-grid-random'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        x='21.51'
        y='10.34'
        width='7.75'
        height='7.75'
        rx='2'
        transform='rotate(-180 21.51 10.34)'
        fill='currentColor'
      />
      <rect
        opacity='.2'
        x='10.24'
        y='13.25'
        width='7.75'
        height='7.75'
        rx='2'
        transform='rotate(-180 10.24 13.25)'
        fill='currentColor'
      />
      <rect
        opacity='.2'
        x='19.2'
        y='21.45'
        width='7.75'
        height='7.75'
        rx='2'
        transform='rotate(-180 19.2 21.45)'
        fill='currentColor'
      />
      <rect
        width='7.75'
        height='7.75'
        rx='2'
        transform='matrix(1 0 0 -1 13.76 10.34)'
        stroke='currentColor'
      />
      <rect
        width='7.75'
        height='7.75'
        rx='2'
        transform='matrix(1 0 0 -1 2.49 13.25)'
        stroke='currentColor'
      />
      <rect
        width='7.75'
        height='7.75'
        rx='2'
        transform='matrix(1 0 0 -1 11.45 21.45)'
        stroke='currentColor'
      />
    </svg>
  )
}
