import type { Icon } from './types'

export const IconUserHeart: Icon = ({
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
      data-slot='icon-ui-user-heart'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M20.59 15.7c-.94 0-1.61.7-1.83 1.05a2.3 2.3 0 0 0-1.83-1.05c-1.17 0-2.05 1.33-1.67 2.74.37 1.4 2.6 2.55 3.5 3.56.88-1 3.12-2.15 3.5-3.56s-.5-2.74-1.67-2.74'
        stroke='currentColor'
      />
      <path
        opacity='.2'
        d='M15.4 7.92a5.33 5.33 0 1 1-10.65 0 5.33 5.33 0 0 1 10.66 0'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M18.38 21.84H1.78a8.4 8.4 0 0 1 8.3-8.46c2.36 0 4.49 1 6 2.62-1.82 2.88.2 3.93 2.3 5.84'
        fill='currentColor'
      />
      <path
        d='M15.4 7.92a5.3 5.3 0 0 1-5.33 5.33 5.33 5.33 0 1 1 5.34-5.33'
        stroke='currentColor'
      />
      <path d='M1.78 21.68a8.3 8.3 0 0 1 12.32-7.26' stroke='currentColor' />
    </svg>
  )
}
