import type { Icon } from './types'

export const IconCurrencyCny: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel?.trim())

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      data-slot='icon-ui-currency-cny'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M4.83 5.54h14.34' stroke='currentColor' />
      <path
        d='M14.39 10.54v4.4c0 .39 0 .58.02.74a3 3 0 0 0 2.65 2.66c.16.02.36.02.75.02h1.32a2.1 2.1 0 0 0 2.1-2.1'
        stroke='currentColor'
      />
      <path d='M2.77 18.36c2.15-.34 6.43-2.31 6.43-7.54' stroke='currentColor' />
      <path d='M2.77 9.86h18.46' stroke='currentColor' />
    </svg>
  )
}
