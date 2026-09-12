import type { Icon } from './types'

export const IconCheckDouble: Icon = ({
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
      data-slot='icon-ui-check-double'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='m2.56 12.64 1.98 2.73c1.11 1.52 1.67 2.29 2.43 2.29s1.32-.77 2.43-2.3l6.88-9.55'
        stroke='currentColor'
      />
      <path
        d='m7.72 12.64 1.98 2.73c1.1 1.52 1.66 2.29 2.43 2.29s1.32-.77 2.43-2.3l6.88-9.55'
        stroke='currentColor'
      />
    </svg>
  )
}
