import type { Icon } from './types'

export const IconExperiment: Icon = ({
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
      data-slot='icon-ui-experiment'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='m3.88 16.5 1.58-2.08a2 2 0 0 1 1.72-.78l1.78.11a2 2 0 0 1 .43.08l4.64 1.36a2 2 0 0 0 1.26-.04l1.37-.51a2 2 0 0 1 2.46.92l1.17 2.15a2 2 0 0 1-.06 2.02l-1 1.6a2 2 0 0 1-1.7.93H6.64a2 2 0 0 1-1.81-1.16l-1.18-2.55a2 2 0 0 1 .23-2.05'
        fill='currentColor'
      />
      <path
        d='M8.66 2.2v5.03c0 1.24 0 1.86-.18 2.45a8 8 0 0 1-1.24 2.1l-3.11 4.5a3.82 3.82 0 0 0 3.14 6h9.46a3.82 3.82 0 0 0 3.14-6l-3.12-4.49a8 8 0 0 1-1.25-2.12c-.18-.58-.18-1.2-.18-2.45V2.21'
        stroke='currentColor'
      />
      <path
        d='M5.36 14.65a6.5 6.5 0 0 1 3.76-1.08c1.87 0 4.12 1.39 5.95 1.39s2.68-.75 3.03-1.16'
        stroke='currentColor'
      />
      <path d='M6.2 1.8h11.6' stroke='currentColor' />
    </svg>
  )
}
