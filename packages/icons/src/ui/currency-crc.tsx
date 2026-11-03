import type { Icon } from './types'

export const IconCurrencyCrc: Icon = ({
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
      data-slot='icon-ui-currency-crc'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='M19.03 6.4s-1.26-1.63-4.9-1.63-8.27 2.3-8.27 7.98c0 5.7 4.52 8.04 8.27 8.04 3.5 0 4.9-1.47 4.9-1.47'
        stroke='currentColor'
      />
      <path d='M13.94 2.32 5.28 21.68' stroke='currentColor' />
      <path d='M18.24 2.32 9.61 21.68' stroke='currentColor' />
    </svg>
  )
}
