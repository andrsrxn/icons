import type { Icon } from './types'

export const IconCurrencyGel: Icon = ({
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
      data-slot='icon-ui-currency-gel'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M3.44 21.28h17.12' stroke='currentColor' />
      <path d='M14.02 11.74V2.72' stroke='currentColor' />
      <path d='M9.98 11.74V2.72' stroke='currentColor' />
      <path
        d='M19.9 10.3a7.2 7.2 0 0 0-7.04-4.8c-4.26 0-8.15 2.25-8.15 7.86 0 5.6 4.45 7.92 8.15 7.92'
        stroke='currentColor'
      />
    </svg>
  )
}
