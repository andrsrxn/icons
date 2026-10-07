import type { Icon } from './types'

export const IconCurrencyAmd: Icon = ({
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
      data-slot='icon-ui-currency-amd'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M20.48 9.26h-9.9' stroke='currentColor' />
      <path d='M20.48 14.4h-9.9' stroke='currentColor' />
      <path
        d='M15.53 21.21V8.73c0-3.28-2.7-5.94-5.97-5.94a6.03 6.03 0 0 0-6.04 6v.44'
        stroke='currentColor'
      />
    </svg>
  )
}
