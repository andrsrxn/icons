import type { Icon } from './types'

export const IconSearchCode: Icon = ({
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
      data-slot='icon-ui-search-code'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M17.8 10.26a7.61 7.61 0 1 1-15.23 0 7.61 7.61 0 0 1 15.22 0'
        fill='currentColor'
      />
      <path d='m15.6 15.56 5.78 5.77' stroke='currentColor' />
      <path d='M17.8 10.26a7.6 7.6 0 0 1-7.62 7.6 7.61 7.61 0 1 1 7.61-7.6' stroke='currentColor' />
      <path
        d='M11.98 7.53c1.32 1.1 1.97 1.64 2.11 2.34a2 2 0 0 1 0 .77c-.13.7-.8 1.25-2.11 2.35'
        stroke='currentColor'
      />
      <path
        d='M8.39 7.53C7.07 8.63 6.4 9.17 6.27 9.87a2 2 0 0 0 0 .77c.14.7.8 1.25 2.12 2.35'
        stroke='currentColor'
      />
    </svg>
  )
}
