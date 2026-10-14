import type { Icon } from './types'

export const IconCurrencyPabCircle: Icon = ({
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
      data-slot='icon-ui-currency-pab-circle'
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
      <path d='m13.86 16.4 2.56-8.8' stroke='currentColor' />
      <path d='M6.78 16.4V7.6' stroke='currentColor' />
      <path d='M6.84 7.6h1.84a2.13 2.13 0 1 1 0 4.27H6.84' stroke='currentColor' />
      <path d='M6.84 11.87H9.3a2.26 2.26 0 1 1 0 4.52H6.84' stroke='currentColor' />
      <path
        d='M17.96 15.97a.43.43 0 1 1-.85 0 .43.43 0 0 1 .85 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path d='M1.7 12A10.3 10.3 0 0 0 12 22.31 10.31 10.31 0 1 0 1.7 12' stroke='currentColor' />
    </svg>
  )
}
