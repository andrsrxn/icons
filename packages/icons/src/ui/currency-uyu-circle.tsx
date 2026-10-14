import type { Icon } from './types'

export const IconCurrencyUyuCircle: Icon = ({
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
      data-slot='icon-ui-currency-uyu-circle'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M1.69 12a10.31 10.31 0 1 0 20.62 0 10.31 10.31 0 0 0-20.62 0'
        fill='currentColor'
      />
      <path
        d='M10.63 9.47c-.22-.75-1.25-1.32-2.46-1.32s-2.53.5-2.53 2c0 2.96 4.84.66 5.06 3.57.1 1.38-1.3 2.13-2.53 2.13-1.24 0-2.13-.58-2.53-1.35'
        stroke='currentColor'
      />
      <path d='M8.17 16.8V7.2' stroke='currentColor' />
      <path d='M13.63 8.15v5.58a2.36 2.36 0 0 0 4.72 0V8.15' stroke='currentColor' />
      <path d='M1.7 12A10.3 10.3 0 0 0 12 22.31 10.31 10.31 0 1 0 1.7 12' stroke='currentColor' />
    </svg>
  )
}
