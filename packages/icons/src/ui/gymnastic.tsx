import type { Icon } from './types'

export const IconGymnastic: Icon = ({
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
      data-slot='icon-ui-gymnastic'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        width='4.52'
        height='3.26'
        rx='1'
        transform='matrix(0 -1 -1 0 9.28 12.42)'
        fill='currentColor'
      />
      <rect
        opacity='.2'
        width='4.52'
        height='3.26'
        rx='1'
        transform='matrix(0 -1 -1 0 18.12 9.22)'
        fill='currentColor'
      />
      <path d='M9.33 10.4a5.95 5.95 0 1 1-3.35 0' stroke='currentColor' />
      <path
        d='M13.35 18.09s1.37.78 3 .78a5.95 5.95 0 0 0 5.94-5.95c0-2.72-1.99-5.26-4.12-5.72'
        stroke='currentColor'
      />
      <path d='M10.73 10.96a6 6 0 0 1 4-3.76' stroke='currentColor' />
      <path d='M7.65 7.9V5.15' stroke='currentColor' />
      <rect
        width='4.52'
        height='3.26'
        rx='1'
        transform='matrix(0 -1 -1 0 9.28 12.42)'
        stroke='currentColor'
      />
      <path d='M16.5 4.7V1.94' stroke='currentColor' />
      <rect
        width='4.52'
        height='3.26'
        rx='1'
        transform='matrix(0 -1 -1 0 18.12 9.22)'
        stroke='currentColor'
      />
    </svg>
  )
}
