import type { Icon } from './types'

export const IconCurrencyBtd: Icon = ({
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
      data-slot='icon-ui-currency-btd'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M18 8.51H5.6' stroke='currentColor' />
      <path
        d='M6 4.87c0-1.21.98-2.2 2.2-2.2h.13A2.33 2.33 0 0 1 10.65 5v12.65a3.67 3.67 0 0 0 3.68 3.68h.46A3.2 3.2 0 0 0 18 18.12v-1.45a1.77 1.77 0 0 0-3.54 0v.3'
        stroke='currentColor'
      />
    </svg>
  )
}
