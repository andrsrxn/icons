import type { Icon } from './types'

export const IconCurrencyPenCircle: Icon = ({
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
      data-slot='icon-ui-currency-pen-circle'
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
      <path d='m13.7 16.67 2.71-9.34' stroke='currentColor' />
      <path
        d='M17.92 16.21a.45.45 0 1 1-.9 0 .45.45 0 0 1 .9 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M11.57 9.16c-.23-.84-1.3-1.49-2.55-1.49-1.26 0-2.63.56-2.63 2.26 0 3.32 5.03.73 5.25 4 .11 1.56-1.34 2.4-2.62 2.4a2.8 2.8 0 0 1-2.63-1.52'
        stroke='currentColor'
      />
      <path d='M1.7 12A10.3 10.3 0 0 0 12 22.31 10.31 10.31 0 1 0 1.7 12' stroke='currentColor' />
    </svg>
  )
}
