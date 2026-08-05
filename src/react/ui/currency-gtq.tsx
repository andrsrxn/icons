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
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
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
        fill='currentColor'
        d='M18.674 12a7.488 7.488 0 1 1-14.975 0 7.488 7.488 0 0 1 14.975 0Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='m12.82 13.65 7.511 5.642M18.674 12a7.488 7.488 0 1 1-14.975 0 7.488 7.488 0 0 1 14.975 0Z'
      />
    </svg>
  )
}
