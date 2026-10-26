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
        d='m1.68 12.89 2.44 3.35c1.12 1.53 1.67 2.3 2.44 2.3.76 0 1.32-.77 2.42-2.3l7.86-10.9'
        stroke='currentColor'
      />
      <path
        d='m7.16 12.89 2.44 3.35c1.11 1.53 1.67 2.3 2.43 2.3s1.32-.77 2.43-2.3l7.86-10.9'
        stroke='currentColor'
      />
    </svg>
  )
}
