import type { Icon } from './types'

export const IconSparkle: Icon = ({
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
      data-slot='icon-ui-sparkle'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M14.92 8.82 12 3.9 9.23 8.44 3.94 12l5.29 2.93L12 20.77l2.92-5.84 5.57-3.2z'
        fill='currentColor'
      />
      <path d='M1.79 12C6.72 12 12 6.68 12 1.79' stroke='currentColor' />
      <path d='M22.21 12C17.31 12 12 6.7 12 1.79' stroke='currentColor' />
      <path d='M1.79 12C6.69 12 12 17.4 12 22.21' stroke='currentColor' />
      <path d='M22.21 12C17.37 12 12 17.33 12 22.21' stroke='currentColor' />
    </svg>
  )
}
