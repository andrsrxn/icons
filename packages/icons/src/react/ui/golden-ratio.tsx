import type { Icon } from './types'

export const IconGoldenRatio: Icon = ({
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
      data-slot='icon-ui-golden-ratio'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M1.7 18.12c0-5.19 3.86-11.9 11.12-12.24 6.76-.3 10.08 4.03 9.34 8.05a5.1 5.1 0 0 1-5.07 4.43c-3.92.22-5.08-2.5-4.96-4.17.16-2.24 1.78-3.31 3.26-3.31 1.5 0 2.9 1.43 1.92 3.31'
        stroke='currentColor'
      />
    </svg>
  )
}
