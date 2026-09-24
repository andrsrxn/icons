import type { Icon } from './types'

export const IconTimeline: Icon = ({
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
      data-slot='icon-ui-timeline'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <circle opacity='.2' cx='5.14' cy='16.85' r='2.56' fill='currentColor' />
      <rect
        opacity='.2'
        width='4.22'
        height='10.23'
        rx='1.5'
        transform='matrix(0 -1 -1 0 21.37 18.96)'
        fill='currentColor'
      />
      <rect
        opacity='.2'
        width='4.22'
        height='10.23'
        rx='1.5'
        transform='matrix(0 -1 -1 0 21.37 9.26)'
        fill='currentColor'
      />
      <circle opacity='.2' cx='5.14' cy='7.15' r='2.56' fill='currentColor' />
      <circle cx='5.14' cy='16.85' r='2.56' stroke='currentColor' />
      <circle cx='5.14' cy='7.15' r='2.56' stroke='currentColor' />
      <path d='M5.14 14.29V9.7' stroke='currentColor' />
      <path d='M5.14 22.26V19.4' stroke='currentColor' />
      <path d='M5.14 4.59V1.74' stroke='currentColor' />
      <rect
        width='4.22'
        height='10.23'
        rx='1.5'
        transform='matrix(0 -1 -1 0 21.37 18.96)'
        stroke='currentColor'
      />
      <rect
        width='4.22'
        height='10.23'
        rx='1.5'
        transform='matrix(0 -1 -1 0 21.37 9.26)'
        stroke='currentColor'
      />
    </svg>
  )
}
