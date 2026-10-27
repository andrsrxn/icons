import type { Icon } from './types'

export const IconCurrencyUahCircle: Icon = ({
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
      data-slot='icon-ui-currency-uah-circle'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M1.69 12.13a10.31 10.31 0 1 0 20.62 0 10.31 10.31 0 0 0-20.62 0'
        fill='currentColor'
      />
      <path d='M6.98 10.26h10.04' stroke='currentColor' />
      <path d='M6.98 13.74h10.04' stroke='currentColor' />
      <path
        d='M8.5 7.8c.31-1.25 1.78-2.21 3.5-2.21 1.73 0 3.84 1.1 3.62 3.17-.48 4.3-6.47 2.22-7.22 6.1-.42 2.12 1.84 3.55 3.6 3.55 1.77 0 3.05-.97 3.62-2.25'
        stroke='currentColor'
      />
      <path
        d='M1.7 12.13a10.31 10.31 0 1 1 20.61 0 10.31 10.31 0 0 1-20.62 0'
        stroke='currentColor'
      />
    </svg>
  )
}
