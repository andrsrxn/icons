import type { Icon } from './types'

export const IconCurrencyVndCircle: Icon = ({
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
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      data-slot='icon-ui-currency-vnd-circle'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M1.69 12.15a10.31 10.31 0 1 0 20.62 0 10.31 10.31 0 0 0-20.62 0'
        fill='currentColor'
      />
      <path
        d='M14.1 10.54h-3.14a2.9 2.9 0 1 0 0 5.79h1.5c.9 0 1.64-.74 1.64-1.65V5.51'
        stroke='currentColor'
      />
      <path d='M11.09 7.59h4.84' stroke='currentColor' />
      <path d='M8.24 18.49h6.59' stroke='currentColor' />
      <path
        d='M1.7 12.15a10.31 10.31 0 1 1 20.61 0 10.31 10.31 0 0 1-20.62 0'
        stroke='currentColor'
      />
    </svg>
  )
}
