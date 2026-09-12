import type { Icon } from './types'

export const IconCurrencyPab: Icon = ({
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
      data-slot='icon-ui-currency-pab'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='m14.47 19.55 4.39-15.1' stroke='currentColor' />
      <path d='M2.8 19.55V4.45' stroke='currentColor' />
      <path d='M2.9 4.45h3.15a3.66 3.66 0 1 1 0 7.33H2.9' stroke='currentColor' />
      <path d='M2.9 11.78h4.22a3.88 3.88 0 0 1 0 7.77H2.9' stroke='currentColor' />
      <path
        d='M21.3 18.82a.73.73 0 1 1-1.46 0 .73.73 0 0 1 1.47 0'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
