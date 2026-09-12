import type { Icon } from './types'

export const IconCurrencyBrl: Icon = ({
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
      data-slot='icon-ui-currency-brl'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M22.34 7.4c-.4-1.36-2.26-2.4-4.46-2.4s-4.6.9-4.6 3.64c0 5.38 8.8 1.2 9.2 6.48.19 2.52-2.36 3.89-4.6 3.89-2.25 0-3.88-1.06-4.6-2.46'
        stroke='currentColor'
      />
      <path d='M17.88 20.74V3.26' stroke='currentColor' />
      <path d='M1.75 19.44V5' stroke='currentColor' />
      <path d='m8.9 19.44-4.08-6.5' stroke='currentColor' />
      <path d='M1.86 5h3.7a3.97 3.97 0 0 1 0 7.94h-3.7' stroke='currentColor' />
    </svg>
  )
}
