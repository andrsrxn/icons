import type { Icon } from './types'

export const IconCurrencyOff: Icon = ({
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
      data-slot='icon-ui-currency-off'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='M6.72 16.97c.83 1.52 2.7 2.68 5.27 2.68 1.9 0 3.97-.8 4.85-2.32'
        stroke='currentColor'
      />
      <path
        d='M17.11 6.99c-.46-1.5-2.6-2.64-5.12-2.64-1.17 0-2.4.22-3.38.76'
        stroke='currentColor'
      />
      <path d='M6.84 7.32q-.12.47-.12 1.02c0 2.76 2.24 3.2 4.65 3.51h.3' stroke='currentColor' />
      <path d='M15.89 12.78q.69.34 1.05 1.05' stroke='currentColor' />
      <path d='M12 4.35V2.48' stroke='currentColor' />
      <path d='M12 21.52v-1.87' stroke='currentColor' />
      <path d='m2.74 2.74 18.52 18.52' stroke='currentColor' />
    </svg>
  )
}
