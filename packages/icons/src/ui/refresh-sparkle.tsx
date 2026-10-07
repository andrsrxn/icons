import type { Icon } from './types'

export const IconRefreshSparkle: Icon = ({
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
      data-slot='icon-ui-refresh-sparkle'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M20.38 8.6c-2.24-3.19-4.95-5.38-8.8-5.38-3.84 0-6.7 1.32-8.43 5'
        stroke='currentColor'
      />
      <path d='M3.65 15.4c2.24 3.14 4.92 5.38 8.77 5.38q.76 0 1.47-.1' stroke='currentColor' />
      <path
        d='M21.34 4.23v1.3c0 1.9 0 2.84-.58 3.43-.59.58-1.53.58-3.42.58h-1.31'
        stroke='currentColor'
      />
      <path
        d='M2.66 19.77v-1.3c0-1.9 0-2.84.58-3.43.59-.58 1.53-.58 3.42-.58h1.31'
        stroke='currentColor'
      />
      <path
        opacity='.2'
        d='m19.36 15.7-1.06-2-1.07 2-2.04 1.13 2.04 1.06 1.07 2.33 1.06-2.33 2.23-1.16z'
        fill='currentColor'
      />
      <path d='M14.7 17.03c1.81 0 3.75-1.96 3.75-3.75' stroke='currentColor' />
      <path d='M22.2 17.03c-1.8 0-3.75-1.95-3.75-3.75' stroke='currentColor' />
      <path d='M14.7 17.03c1.8 0 3.75 1.98 3.75 3.75' stroke='currentColor' />
      <path d='M22.2 17.03c-1.78 0-3.75 1.95-3.75 3.75' stroke='currentColor' />
    </svg>
  )
}
