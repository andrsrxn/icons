import type { Icon } from './types'

export const IconCurrencyIls: Icon = ({
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
      data-slot='icon-ui-currency-ils'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M1.82 4.3v15.4' stroke='currentColor' />
      <path
        d='M1.82 4.3h3.57c4.66 0 7 0 8.46 1.43l.05.06c1.44 1.45 1.44 3.79 1.44 8.46'
        stroke='currentColor'
      />
      <path
        d='M8.6 9.98v9.73h3.58c4.72 0 7.07 0 8.54-1.47 1.46-1.46 1.46-3.82 1.46-8.53V4.59'
        stroke='currentColor'
      />
    </svg>
  )
}
