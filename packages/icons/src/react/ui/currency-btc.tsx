import type { Icon } from './types'

export const IconCurrencyBtc: Icon = ({
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
      data-slot='icon-ui-currency-btc'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M7.89 19.99V4h6.3l2.75 2.5-.98 5.17 2.77 3.99-2.77 4.12-6.46.21z'
        fill='currentColor'
      />
      <path d='M5.27 3.99h8.28a3.7 3.7 0 1 1 0 7.39H11.5' stroke='currentColor' />
      <path d='M11.5 11.38h2.74a4.31 4.31 0 0 1 0 8.62H5.27' stroke='currentColor' />
      <path d='M7.66 3.99v16' stroke='currentColor' />
      <path d='M7.66 2.3v1.41' stroke='currentColor' />
      <path d='M7.66 20.29v1.39' stroke='currentColor' />
      <path d='M11.88 2.3v1.41' stroke='currentColor' />
      <path d='M11.88 20.29v1.39' stroke='currentColor' />
    </svg>
  )
}
