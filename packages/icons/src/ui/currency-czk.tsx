import type { Icon } from './types'

export const IconCurrencyCzk: Icon = ({
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
      data-slot='icon-ui-currency-czk'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M2.72 20.28V3.72' stroke='currentColor' />
      <path d='m10.92 20.28-5.78-6.54' stroke='currentColor' />
      <path d='m2.87 16.1 7.42-8.17' stroke='currentColor' />
      <path
        d='m14.57 5.33 1.12 1.12c.7.7 1.04 1.04 1.47 1.03.43 0 .76-.37 1.42-1.1l.95-1.05'
        stroke='currentColor'
      />
      <path
        d='M20.45 11.2s-.65-.78-2.53-.78-4.27 1.4-4.27 4.91c0 3.5 2.34 4.95 4.27 4.95 1.8 0 2.53-.75 2.53-.75'
        stroke='currentColor'
      />
    </svg>
  )
}
