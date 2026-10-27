import type { Icon } from './types'

export const IconCurrencyVnd: Icon = ({
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
      data-slot='icon-ui-currency-vnd'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M15.33 9.64h-4.98a4.59 4.59 0 0 0 0 9.18h2.37a2.6 2.6 0 0 0 2.61-2.6V1.66'
        stroke='currentColor'
      />
      <path d='M10.55 4.96h7.68' stroke='currentColor' />
      <path d='M6.03 22.24H16.5' stroke='currentColor' />
    </svg>
  )
}
