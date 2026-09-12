import type { Icon } from './types'

export const IconCrown: Icon = ({
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
      data-slot='icon-ui-crown'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        x='3.37'
        y='16.57'
        width='16.8'
        height='4.77'
        rx='1.5'
        fill='currentColor'
      />
      <rect x='3.37' y='16.57' width='16.8' height='4.77' rx='1.5' stroke='currentColor' />
      <path
        d='m5.4 16.17-2.47-5.19c-.82-1.72-1.23-2.58-.8-3.07.4-.5 1.33-.23 3.16.3l1.07.3c.78.22 1.17.33 1.51.18s.5-.52.85-1.26l1.11-2.4c.83-1.78 1.24-2.67 1.9-2.66.65.02 1.03.93 1.77 2.76l.9 2.24c.32.77.47 1.15.8 1.32s.74.07 1.55-.13l2.12-.54c1.8-.45 2.7-.67 3.1-.18s0 1.33-.81 3l-2.57 5.28'
        stroke='currentColor'
      />
      <path
        d='M12.74 12.63a.74.74 0 1 1-1.48 0 .74.74 0 0 1 1.48 0'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
