import type { Icon } from './types'

export const IconCurrencyCup: Icon = ({
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
      data-slot='icon-ui-currency-cup'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M7.09 3.03v18.2' stroke='currentColor' />
      <path d='M7.09 3.03h5.5a5.34 5.34 0 0 1 0 10.68h-5.5' stroke='currentColor' />
      <path d='M3.6 9.97h17.32' stroke='currentColor' />
      <path d='M3.6 6.13h17.32' stroke='currentColor' />
    </svg>
  )
}
