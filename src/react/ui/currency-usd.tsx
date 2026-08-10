import type { Icon } from './types'

export const IconCurrencyUsd: Icon = ({
  size = 24,
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
      data-slot='currency-usd'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M12 12h2a3.34 3.34 0 1 1 0 6.67h-2zm0-6.67h-1.33a3.34 3.34 0 1 0 0 6.67H12z'
        fill='currentColor'
        opacity='.2'
      />
      <path
        d='M12 3.32v17.36m4.67-12.02a3.34 3.34 0 0 0-3.34-3.33h-2.66a3.34 3.34 0 0 0 0 6.67H14a3.34 3.34 0 0 1 0 6.67h-4a3.34 3.34 0 0 1-3.34-3.33'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
