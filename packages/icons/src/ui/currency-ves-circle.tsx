import type { Icon } from './types'

export const IconCurrencyVesCircle: Icon = ({
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
      data-slot='icon-ui-currency-ves-circle'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M1.69 12a10.31 10.31 0 1 0 20.62 0 10.31 10.31 0 0 0-20.62 0'
        fill='currentColor'
      />
      <path d='M6.64 16.98V7.02' stroke='currentColor' />
      <path d='M6.71 7.02H8.8a2.42 2.42 0 0 1 0 4.83H6.71' stroke='currentColor' />
      <path d='M6.71 11.85H9.5a2.56 2.56 0 1 1 0 5.13H6.7' stroke='currentColor' />
      <path
        d='M18.2 12.3c-.15-.55-.9-.97-1.8-.97-.88 0-1.85.37-1.85 1.47 0 2.17 3.55.48 3.71 2.61.08 1.02-.95 1.57-1.85 1.57s-1.57-.42-1.86-.99'
        stroke='currentColor'
      />
      <path d='M1.7 12A10.3 10.3 0 0 0 12 22.31 10.31 10.31 0 1 0 1.7 12' stroke='currentColor' />
    </svg>
  )
}
