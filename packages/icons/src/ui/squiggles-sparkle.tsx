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
        d='M2.3 5.5s.84-1.1 1.96-1.55a5.4 5.4 0 0 1 4.44 0c1.34.67 1.6 2.5.64 3.27-1.98 1.59-5.06.27-6.72 2-1.6 1.68-.81 3.78 1.33 4.05 4.75.58 5.98-2.8 9.4-3.4 1.77-.32 3.44.6 3.44 2.6 0 2.2-3.6 5.7-8.34 8.15-3 1.55-5.79.23-5.1-2.22.47-1.7 2.58-3.01 5.35-2.87 1.5.08 2.95.93 4.01 1.8a18 18 0 0 1 2.17 2.13'
        stroke='currentColor'
      />
      <path
        opacity='.2'
        d='m19.77 4.04-1-1.9-1.03 1.9-1.95 1.08 1.95 1 1.02 2.23 1.01-2.22 2.12-1.1z'
        fill='currentColor'
      />
      <path d='M15.33 5.3c1.72 0 3.57-1.86 3.57-3.57' stroke='currentColor' />
      <path d='M22.48 5.3c-1.72 0-3.58-1.85-3.58-3.57' stroke='currentColor' />
      <path d='M15.33 5.3c1.71 0 3.57 1.9 3.57 3.58' stroke='currentColor' />
      <path d='M22.48 5.3c-1.7 0-3.58 1.87-3.58 3.58' stroke='currentColor' />
    </svg>
  )
}
