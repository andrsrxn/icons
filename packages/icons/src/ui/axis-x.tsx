import type { Icon } from './types'

export const IconAxisX: Icon = ({
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
      data-slot='icon-ui-axis-x'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='m17.58 14.63 1.3 1.3c1 1 1.5 1.5 1.5 2.12s-.5 1.12-1.5 2.12l-1.3 1.3'
        stroke='currentColor'
      />
      <path
        d='M19.94 18.05H6.87c-.81 0-1.22 0-1.54-.12a2 2 0 0 1-1.21-1.21C4 16.4 4 15.99 4 15.18'
        stroke='currentColor'
      />
      <path d='M4 8.86v2.37' stroke='currentColor' />
      <path d='M4 2.6v2.37' stroke='currentColor' />
    </svg>
  )
}
