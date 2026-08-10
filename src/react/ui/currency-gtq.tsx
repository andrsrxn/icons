import type { Icon } from './types'

export const IconCurrencyGtq: Icon = ({
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
      data-slot='currency-gtq'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M18.67 12A7.49 7.49 0 1 1 3.7 12a7.49 7.49 0 0 1 14.97 0'
        fill='currentColor'
      />
      <path
        d='m12.82 13.65 7.51 5.64M18.67 12A7.49 7.49 0 1 1 3.7 12a7.49 7.49 0 0 1 14.97 0Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
