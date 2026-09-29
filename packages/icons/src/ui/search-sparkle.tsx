import type { Icon } from './types'

export const IconSearchSparkle: Icon = ({
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
      data-slot='icon-ui-search-sparkle'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M17.8 10.26a7.61 7.61 0 1 1-1.8-4.9c-1.65 1.76.85 3.05 1.8 4.9'
        fill='currentColor'
      />
      <path d='m15.7 15.65 5.68 5.68' stroke='currentColor' />
      <path d='M16.77 14.04c-.13.23-.17.32-.32.54A7.6 7.6 0 1 1 12.7 3.07' stroke='currentColor' />
      <path d='M13.6 6.66c1.88 0 3.89-2.02 3.89-3.89' stroke='currentColor' />
      <path d='M21.38 6.66c-1.87 0-3.89-2.02-3.89-3.89' stroke='currentColor' />
      <path d='M13.6 6.67c1.86 0 3.89 2.05 3.89 3.89' stroke='currentColor' />
      <path d='M21.38 6.67c-1.84 0-3.89 2.03-3.89 3.89' stroke='currentColor' />
    </svg>
  )
}
