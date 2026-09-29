import type { Icon } from './types'

export const IconBackgroundSparkle: Icon = ({
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
      data-slot='icon-ui-background-sparkle'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M2.68 8.68c0-2.83 0-4.24.88-5.12s2.3-.88 5.12-.88h10.24L17.1 4.72 19 6.85l2.31-1.5v9.97c0 2.83 0 4.24-.88 5.12s-2.3.88-5.12.88H8.68c-2.83 0-4.24 0-5.12-.88s-.88-2.3-.88-5.12z'
        fill='currentColor'
      />
      <path
        d='M21.32 10.99v4.33c0 2.83 0 4.24-.88 5.12s-2.3.88-5.12.88H8.68c-2.83 0-4.24 0-5.12-.88s-.88-2.3-.88-5.12V8.68c0-2.83 0-4.24.88-5.12s2.3-.88 5.12-.88h4.28'
        stroke='currentColor'
      />
      <path d='m3 15.04 6.05 6.05' stroke='currentColor' />
      <path d='m2.88 8.94 12.27 12.28' stroke='currentColor' />
      <path d='m3.55 3.64 16.9 16.9' stroke='currentColor' />
      <path d='m8.73 2.85 12.51 12.52' stroke='currentColor' />
      <path d='M15.8 4.8c1.6 0 3.33-1.74 3.33-3.34' stroke='currentColor' />
      <path d='M22.47 4.8c-1.6 0-3.34-1.74-3.34-3.34' stroke='currentColor' />
      <path d='M15.8 4.8c1.6 0 3.33 1.76 3.33 3.33' stroke='currentColor' />
      <path d='M22.47 4.8c-1.58 0-3.34 1.74-3.34 3.33' stroke='currentColor' />
    </svg>
  )
}
