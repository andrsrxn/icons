import type { Icon } from './types'

export const IconCurrencyAfn: Icon = ({
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
      data-slot='icon-ui-currency-afn'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M7.65 14.99h8.13m0 0h.17m0 0h-.17c-.52-.02-2.21-.24-3.96-2.09-3.25-3.43-.83-7.3 2.08-6.59 3.1.77 2.57 5.79 2.05 8.68'
        stroke='currentColor'
      />
      <path
        d='M14.09 2.5a.8.8 0 1 1-1.6 0 .8.8 0 0 1 1.6 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path d='M11.7 22.3v-4.58' stroke='currentColor' />
    </svg>
  )
}
