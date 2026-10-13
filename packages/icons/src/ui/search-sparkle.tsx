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
      <path d='M13.52 6.92c2.06 0 4.27-2.23 4.27-4.27' stroke='currentColor' />
      <path d='M22.07 6.92c-2.05 0-4.28-2.22-4.28-4.27' stroke='currentColor' />
      <path d='M13.52 6.92c2.05 0 4.27 2.26 4.27 4.28' stroke='currentColor' />
      <path d='M22.07 6.92c-2.03 0-4.28 2.23-4.28 4.28' stroke='currentColor' />
    </svg>
  )
}
