import type { Icon } from './types'

export const IconSwap: Icon = ({
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
      data-slot='icon-ui-swap'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect opacity='.2' x='2.68' y='2.65' width='8.32' height='8.32' rx='2' fill='currentColor' />
      <rect opacity='.2' x='13' y='13.03' width='8.32' height='8.32' rx='2' fill='currentColor' />
      <rect x='13' y='13.03' width='8.32' height='8.32' rx='2' stroke='currentColor' />
      <rect x='2.68' y='2.65' width='8.32' height='8.32' rx='2' stroke='currentColor' />
      <path
        d='M18.28 9.24v-1c0-1.88 0-2.83-.6-3.41-.58-.59-1.52-.59-3.4-.59h-.23'
        stroke='currentColor'
      />
      <path d='M5.72 14.7v1c0 1.88 0 2.82.59 3.4.59.6 1.53.6 3.41.6h.23' stroke='currentColor' />
      <path
        d='M20.9 7.96c-1.08 1.07-1.61 1.6-2.27 1.7a2 2 0 0 1-.6 0c-.64-.1-1.18-.63-2.26-1.7'
        stroke='currentColor'
      />
      <path
        d='M3.1 15.98c1.08-1.08 1.61-1.62 2.27-1.71a2 2 0 0 1 .6 0c.64.1 1.18.63 2.26 1.7'
        stroke='currentColor'
      />
    </svg>
  )
}
