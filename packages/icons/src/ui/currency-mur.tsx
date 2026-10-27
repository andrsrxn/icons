import type { Icon } from './types'

export const IconCurrencyMur: Icon = ({
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
      data-slot='icon-ui-currency-mur'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M3.95 20.02V3.98' stroke='currentColor' />
      <path d='M11.9 20.02 7.36 12.8' stroke='currentColor' />
      <path d='M4.07 3.98h4.1a4.41 4.41 0 1 1 0 8.82h-4.1' stroke='currentColor' />
      <path
        d='M21.36 12.64c-.25-.87-1.44-1.54-2.84-1.54s-2.93.58-2.93 2.32c0 3.42 5.6.76 5.86 4.13.12 1.6-1.5 2.47-2.93 2.47s-2.47-.67-2.93-1.56'
        stroke='currentColor'
      />
      <path d='M1.73 8.39h13.2' stroke='currentColor' />
    </svg>
  )
}
