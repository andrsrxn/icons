import type { Icon } from './types'

export const IconListSparkle: Icon = ({
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
      data-slot='icon-ui-list-sparkle'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M19.45 14.04 18.37 12l-1.1 2.04-2.08 1.16 2.09 1.07 1.1 2.39 1.07-2.39 2.28-1.18z'
        fill='currentColor'
      />
      <path d='M21.42 6H2.67' stroke='currentColor' />
      <path d='M12.42 12H2.67' stroke='currentColor' />
      <path d='M12.42 18H2.67' stroke='currentColor' />
      <path d='M14.42 15.1c1.95 0 4.04-2.11 4.04-4.04' stroke='currentColor' />
      <path d='M22.5 15.1c-1.95 0-4.04-2.1-4.04-4.04' stroke='currentColor' />
      <path d='M14.42 15.1c1.94 0 4.04 2.12 4.04 4.02' stroke='currentColor' />
      <path d='M22.5 15.1c-1.92 0-4.04 2.1-4.04 4.02' stroke='currentColor' />
    </svg>
  )
}
