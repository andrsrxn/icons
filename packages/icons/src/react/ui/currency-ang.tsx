import type { Icon } from './types'

export const IconCurrencyAng: Icon = ({
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
      data-slot='icon-ui-currency-ang'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M11.68 6.5v11.27' stroke='currentColor' />
      <path d='M11.68 14.63v4a2.82 2.82 0 0 1-5.65 0v-.52' stroke='currentColor' />
      <path
        d='M11.68 9.37V5.7c0-1.74 1.4-3.15 3.14-3.15h.61c1.4 0 2.54 1.14 2.54 2.54'
        stroke='currentColor'
      />
      <path d='M15.1 8.46H8.25' stroke='currentColor' />
    </svg>
  )
}
