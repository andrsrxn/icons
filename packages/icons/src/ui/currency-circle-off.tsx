import type { Icon } from './types'

export const IconCurrencyCircleOff: Icon = ({
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
      data-slot='icon-ui-currency-circle-off'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M1.69 12a10.31 10.31 0 1 0 20.62 0 10.31 10.31 0 0 0-20.62 0'
        fill='currentColor'
      />
      <path
        d='M12 6.67v-1.3m0 13.26v-1.3M1.7 12a10.31 10.31 0 1 1 20.61 0A10.31 10.31 0 0 1 1.7 12m1.05-9.26 18.5 18.52'
        stroke='currentColor'
      />
      <path
        d='M8.41 15.35c.56 1.03 1.82 1.81 3.56 1.81 1.28 0 2.68-.54 3.27-1.56m.18-6.98c-.3-1.01-1.75-1.78-3.45-1.78q-.8 0-1.55.2M8.5 8.84q-.09.32-.09.69c0 1.86 1.5 2.16 3.14 2.37m3.49.63q.17.09.27.3'
        stroke='currentColor'
      />
    </svg>
  )
}
