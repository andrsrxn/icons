import type { Icon } from './types'

export const IconCurrencyBrlCircle: Icon = ({
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
      data-slot='icon-ui-currency-brl-circle'
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
      <path
        d='M18.41 9.34c-.23-.79-1.3-1.4-2.58-1.4-1.27 0-2.66.53-2.66 2.12 0 3.1 5.09.69 5.32 3.75.11 1.46-1.36 2.24-2.66 2.24s-2.25-.6-2.66-1.42'
        stroke='currentColor'
      />
      <path d='M15.83 17.06V6.94' stroke='currentColor' />
      <path d='M6.06 16.3V7.95' stroke='currentColor' />
      <path d='m10.2 16.3-2.36-3.76' stroke='currentColor' />
      <path d='M6.13 7.95h2.13a2.3 2.3 0 0 1 0 4.6H6.13' stroke='currentColor' />
      <path d='M1.7 12A10.3 10.3 0 0 0 12 22.31 10.31 10.31 0 1 0 1.7 12' stroke='currentColor' />
    </svg>
  )
}
