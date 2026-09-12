import type { Icon } from './types'

export const IconLayer: Icon = ({
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
      data-slot='icon-ui-layer'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='m2.32 10.93 8.58-3.37a3 3 0 0 1 2.19 0l8.62 3.37a1 1 0 0 1 .02 1.86l-8.57 3.6a3 3 0 0 1-2.33 0l-8.53-3.6a1 1 0 0 1 .02-1.86'
        fill='currentColor'
      />
      <path
        d='m4.6 10.04 5.2-2.05a6 6 0 0 1 2.2-.64c.56 0 1.1.21 2.19.64l5.22 2.04c1.95.77 2.92 1.15 2.93 1.82 0 .68-.96 1.08-2.88 1.9l-5.14 2.15h0c-1.15.48-1.72.72-2.33.72-.6 0-1.18-.24-2.32-.73l-5.11-2.15c-1.92-.81-2.88-1.21-2.87-1.89s.97-1.05 2.91-1.81'
        stroke='currentColor'
      />
    </svg>
  )
}
