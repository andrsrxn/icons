import type { Icon } from './types'

export const IconActivity: Icon = ({
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
      data-slot='icon-ui-activity'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M1.8 12.05h1.6c.66 0 1 0 1.26-.18.25-.18.37-.5.6-1.13L6.93 6.3c.98-2.64 1.47-3.96 2.22-3.9s1.04 1.43 1.61 4.18l2.3 10.95c.55 2.63.82 3.94 1.56 4s1.24-1.17 2.25-3.66l1.84-4.56c.24-.6.37-.91.62-1.08s.58-.17 1.23-.17h1.75'
        stroke='currentColor'
      />
    </svg>
  )
}
