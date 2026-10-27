import type { Icon } from './types'

export const IconCurrencyIlsCircle: Icon = ({
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
      data-slot='icon-ui-currency-ils-circle'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M1.7 12.29a10.31 10.31 0 1 0 20.63 0 10.31 10.31 0 0 0-20.62 0'
        fill='currentColor'
      />
      <path d='M6.49 7.96v8.66' stroke='currentColor' />
      <path
        d='M6.49 7.96h2c2.43 0 3.65 0 4.47.66a3 3 0 0 1 .46.46c.66.82.66 2.04.66 4.47'
        stroke='currentColor'
      />
      <path
        d='M10.3 11.16v5.46h1.62c2.83 0 4.25 0 5.12-.88s.88-2.3.88-5.12v-2.5'
        stroke='currentColor'
      />
      <path
        d='M1.72 12.29a10.31 10.31 0 1 1 20.62 0 10.31 10.31 0 0 1-20.62 0'
        stroke='currentColor'
      />
    </svg>
  )
}
