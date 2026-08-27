import type { Icon } from './types'

export const IconCurrencyGtq: Icon = ({
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
      data-slot='ui-icon-currency-gtq'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M3 11.64a8.72 8.72 0 1 0 17.43 0 8.72 8.72 0 0 0-17.43 0'
        fill='currentColor'
      />
      <path
        d='M3 11.64a8.7 8.7 0 0 0 8.72 8.72 8.72 8.72 0 1 0-8.71-8.72m9.79 2.01L21 21'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
