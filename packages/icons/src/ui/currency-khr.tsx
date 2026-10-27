import type { Icon } from './types'

export const IconCurrencyKhr: Icon = ({
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
      data-slot='icon-ui-currency-khr'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M10.75 17.76c-1.58-2-4.86-.26-3.57 2.36 1.04 2.11 4.03 2.11 6.51 2.11V9.87c0-.45 0-.67-.09-.87s-.26-.34-.6-.64h0L10.4 6.1c-.7-.61-1.05-.92-1.08-1.33s.27-.77.88-1.48l.03-.03c.6-.7.9-1.06 1.3-1.1.42-.03.77.26 1.49.85l1.55 1.27'
        stroke='currentColor'
      />
      <path d='M17.14 12h-6.96' stroke='currentColor' />
    </svg>
  )
}
