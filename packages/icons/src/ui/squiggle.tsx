import type { Icon } from './types'

export const IconSquiggle: Icon = ({
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
      data-slot='icon-ui-squiggle'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M4.55 4.93s.88-1.14 2.05-1.6a5.6 5.6 0 0 1 4.63 0c1.4.69 1.67 2.6.67 3.4-2.07 1.66-5.29.28-7.02 2.1-1.66 1.74-.84 3.93 1.4 4.2 4.95.62 6.57-3.24 10.13-3.88 1.85-.33 3.59.63 3.59 2.72 0 2.29-4.1 6.28-9.04 8.84-3.12 1.62-6.03.23-5.31-2.32.49-1.77 2.7-3.14 5.58-3a7.6 7.6 0 0 1 4.18 1.89 20 20 0 0 1 2.26 2.21'
        stroke='currentColor'
      />
    </svg>
  )
}
