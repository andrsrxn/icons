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
        d='M2.32 4.82s.88-1.14 2.05-1.61A5.6 5.6 0 0 1 9 3.2c1.4.7 1.67 2.6.67 3.4-2.07 1.66-5.29.28-7.02 2.1-1.66 1.75-.84 3.94 1.4 4.21 4.95.61 6.23-2.91 9.8-3.55 1.85-.32 3.59.63 3.59 2.72 0 2.29-3.77 5.95-8.7 8.5-3.13 1.62-6.04.24-5.32-2.32.49-1.76 2.7-3.14 5.58-2.99 1.56.08 3.08.97 4.19 1.89a19 19 0 0 1 2.25 2.2'
        stroke='currentColor'
      />
      <path
        opacity='.2'
        d='m19.98 3.75-.94-1.78-.96 1.78-1.82 1 1.82.94.96 2.08.94-2.08 1.98-1.03z'
        fill='currentColor'
      />
      <path d='M15.83 4.93c1.6 0 3.34-1.74 3.34-3.34' stroke='currentColor' />
      <path d='M22.5 4.93c-1.6 0-3.33-1.74-3.33-3.34' stroke='currentColor' />
      <path d='M15.83 4.93c1.6 0 3.34 1.76 3.34 3.33' stroke='currentColor' />
      <path d='M22.5 4.93c-1.58 0-3.33 1.74-3.33 3.33' stroke='currentColor' />
    </svg>
  )
}
