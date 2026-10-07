import type { Icon } from './types'

export const IconEightSquare: Icon = ({
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
      data-slot='icon-ui-eight-square'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        width='19.17'
        height='19.17'
        rx='3'
        transform='scale(1 -1)rotate(90 21.58 0)'
        fill='currentColor'
      />
      <rect
        width='19.17'
        height='19.17'
        rx='3'
        transform='scale(1 -1)rotate(90 21.58 0)'
        stroke='currentColor'
      />
      <path
        d='M11.99 11.88s-2.45 1.54-2.45 3.03c0 1.21 1.07 2.05 2.3 2.13 1.32.07 2.62-.87 2.62-2.17 0-2.2-4.9-3.74-4.9-6.01 0-1.27 1.14-2.15 2.43-2.15s2.45.92 2.45 2.19c0 1.55-2.45 2.98-2.45 2.98'
        stroke='currentColor'
      />
    </svg>
  )
}
