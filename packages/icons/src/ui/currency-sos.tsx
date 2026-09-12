import type { Icon } from './types'

export const IconCurrencySos: Icon = ({
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
      data-slot='icon-ui-currency-sos'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M17.95 5.87c-.53-1.82-3.02-3.22-5.96-3.22S5.86 3.87 5.86 7.52c0 7.17 11.74 1.6 12.27 8.64.26 3.37-3.14 5.19-6.14 5.19s-5.17-1.42-6.13-3.28'
        stroke='currentColor'
      />
    </svg>
  )
}
