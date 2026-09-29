import type { Icon } from './types'

export const IconSpline: Icon = ({
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
      data-slot='icon-ui-spline'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M8.09 18.6a2.72 2.72 0 1 1-5.44 0 2.72 2.72 0 0 1 5.44 0'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M21.56 6.23a2.72 2.72 0 1 1-5.44 0 2.72 2.72 0 0 1 5.44 0'
        fill='currentColor'
      />
      <path d='M16.12 5.82s-5.12-1.29-8.4 2c-3.87 3.87-2.35 8.06-2.35 8.06' stroke='currentColor' />
      <path
        d='M8.08 18.6a2.7 2.7 0 0 1-2.71 2.71 2.72 2.72 0 1 1 2.71-2.72'
        stroke='currentColor'
      />
      <path
        d='M21.56 6.23a2.7 2.7 0 0 1-2.72 2.72 2.72 2.72 0 1 1 2.72-2.72'
        stroke='currentColor'
      />
    </svg>
  )
}
