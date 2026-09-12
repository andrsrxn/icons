import type { Icon } from './types'

export const IconCurrencyPen: Icon = ({
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
      data-slot='icon-ui-currency-pen'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='m14.47 19.55 4.39-15.1' stroke='currentColor' />
      <path
        d='M21.3 18.82a.73.73 0 1 1-1.46 0 .73.73 0 0 1 1.47 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M11.02 7.4C10.65 6.05 8.92 5 6.9 5s-4.25.9-4.25 3.64c0 5.38 8.13 1.2 8.5 6.48.17 2.52-2.18 3.89-4.25 3.89a4.5 4.5 0 0 1-4.25-2.46'
        stroke='currentColor'
      />
    </svg>
  )
}
