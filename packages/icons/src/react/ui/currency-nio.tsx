import type { Icon } from './types'

export const IconCurrencyNio: Icon = ({
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
      data-slot='icon-ui-currency-nio'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M22.1 7.84c-.37-1.24-2.06-2.2-4.06-2.2s-4.17.83-4.17 3.32c0 4.87 7.98 1.08 8.34 5.87.18 2.29-2.13 3.52-4.17 3.52-2.03 0-3.52-.96-4.17-2.22'
        stroke='currentColor'
      />
      <path d='M18.05 19.92V4.08' stroke='currentColor' />
      <path
        d='M10.56 6.66s-.84-1.01-3.27-1.01c-2.42 0-5.5 1.81-5.5 6.33s3 6.37 5.5 6.37c2.33 0 3.27-.96 3.27-.96'
        stroke='currentColor'
      />
    </svg>
  )
}
