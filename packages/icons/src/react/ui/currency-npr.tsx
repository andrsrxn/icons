import type { Icon } from './types'

export const IconCurrencyNpr: Icon = ({
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
      data-slot='icon-ui-currency-npr'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M21.37 13.17c-.24-.84-1.39-1.48-2.73-1.48s-2.81.56-2.81 2.23c0 3.29 5.38.73 5.62 3.96.12 1.55-1.44 2.38-2.81 2.38s-2.37-.65-2.81-1.5'
        stroke='currentColor'
      />
      <path d='M15.83 8.28H2.09' stroke='currentColor' />
      <path d='M4.45 20.26V3.74' stroke='currentColor' />
      <path d='m12.63 20.26-4.67-7.43' stroke='currentColor' />
      <path d='M4.57 3.74H8.8a4.54 4.54 0 1 1 0 9.09H4.57' stroke='currentColor' />
    </svg>
  )
}
