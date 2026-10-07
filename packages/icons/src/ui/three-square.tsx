import type { Icon } from './types'

export const IconThreeSquare: Icon = ({
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
      data-slot='icon-ui-three-square'
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
        d='M9.4 8.32a3.4 3.4 0 0 1 2.7-1.15c2.43 0 3.15 2.8 1.93 3.93-1.23 1.13-3.01.88-3.01.88'
        stroke='currentColor'
      />
      <path
        d='M9.4 15.68a3.4 3.4 0 0 0 2.7 1.15c2.43 0 3.15-2.8 1.93-3.93-1.23-1.13-3.01-.88-3.01-.88'
        stroke='currentColor'
      />
    </svg>
  )
}
