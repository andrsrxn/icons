import type { Icon } from './types'

export const IconCurrencyRub: Icon = ({
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
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='ui-icon-currency-rub'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M15.87 3.38 9.4 2.82a1 1 0 0 0-1.09 1v8.68a1 1 0 0 0 1.03 1l6.68-.2a1 1 0 0 0 .84-.51l2.29-4.1a1 1 0 0 0-.04-1.04l-2.47-3.81a1 1 0 0 0-.76-.46'
        fill='currentColor'
      />
      <path
        d='M8.3 3.03v18.2m0-18.2h5.5a5.34 5.34 0 0 1 0 10.68H5.04m-.11 3.26h8.67'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
