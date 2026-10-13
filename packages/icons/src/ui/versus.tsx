import type { Icon } from './types'

export const IconVersus: Icon = ({
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
      data-slot='icon-ui-versus'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='m16.7 3.95-4.74 8.21-4.75 8.22' stroke='currentColor' />
      <path
        d='m3.27 3.39 1.86 5.5c.75 2.18 1.12 3.28 1.82 3.3.7 0 1.12-1.07 1.95-3.23l2.14-5.57'
        stroke='currentColor'
      />
      <path
        d='M20.58 13.25c-.24-.88-1.37-1.54-2.7-1.54-1.32 0-2.77.58-2.77 2.32 0 3.42 5.31.76 5.55 4.13.12 1.6-1.42 2.47-2.77 2.47-1.36 0-2.34-.67-2.78-1.56'
        stroke='currentColor'
      />
    </svg>
  )
}
