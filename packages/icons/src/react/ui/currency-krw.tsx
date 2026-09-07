import type { Icon } from './types'

export const IconCurrencyKrw: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

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
      data-slot='ui-icon-currency-krw'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      aria-labelledby={isLabelled && title && !ariaLabel ? 'currency-krw-title' : undefined}
      focusable={isLabelled ? undefined : false}
      className={`ui-icon ${className ?? ''}`.trim()}
      {...props}>
      {isLabelled && title && !ariaLabel ? <title id={'currency-krw-title'}>{title}</title> : null}
      <path
        d='M2.6 12.56h18.8M3.44 5.99l4.28 13.25M12 5.99l4.28 13.25M12 5.99 7.72 19.24M20.56 5.99l-4.28 13.25'
        stroke='currentColor'
      />
    </svg>
  )
}
