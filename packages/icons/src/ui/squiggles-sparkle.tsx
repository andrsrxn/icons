import type { Icon } from './types'

export const IconSquigglesSparkle: Icon = ({
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
      data-slot='icon-ui-squiggles-sparkle'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M2.32 4.82s.88-1.14 2.05-1.61A5.6 5.6 0 0 1 9 3.2c1.4.7 1.67 2.6.67 3.4-2.07 1.66-5.29.28-7.02 2.1-1.66 1.75-.84 3.94 1.4 4.21 4.95.61 6.57-3.25 10.13-3.88 1.85-.33 3.6.62 3.6 2.72 0 2.28-4.1 6.28-9.05 8.84-3.12 1.61-6.03.23-5.31-2.33.49-1.76 2.7-3.14 5.58-2.99 1.56.08 3.08.97 4.19 1.89a19 19 0 0 1 2.25 2.2'
        stroke='currentColor'
      />
      <path
        opacity='.2'
        d='m20.17 4.36-.83-1.57-.85 1.57-1.6.89 1.6.82.85 1.84.83-1.84 1.74-.9z'
        fill='currentColor'
      />
      <path d='M16.5 5.4c1.43 0 2.95-1.54 2.95-2.94' stroke='currentColor' />
      <path d='M22.4 5.4c-1.42 0-2.95-1.53-2.95-2.94' stroke='currentColor' />
      <path d='M16.5 5.4c1.42 0 2.95 1.55 2.95 2.94' stroke='currentColor' />
      <path d='M22.4 5.4c-1.4 0-2.95 1.53-2.95 2.94' stroke='currentColor' />
    </svg>
  )
}
