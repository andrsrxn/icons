import type { Icon } from './types'

export const IconActivitySquare: Icon = ({
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
      data-slot='icon-ui-activity-square'
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
      <path
        d='M5.63 12.1h1.19c.32 0 .48 0 .6-.09.13-.08.2-.23.32-.53l1.38-3.26c.5-1.15.74-1.73 1.1-1.7s.5.64.8 1.86l1.76 7.39c.28 1.16.42 1.75.78 1.78.35.04.6-.5 1.1-1.6l1.52-3.28c.13-.28.2-.42.32-.5s.27-.08.59-.08h1.28'
        stroke='currentColor'
      />
      <rect
        width='19.17'
        height='19.17'
        rx='3'
        transform='scale(1 -1)rotate(90 21.58 0)'
        stroke='currentColor'
      />
    </svg>
  )
}
