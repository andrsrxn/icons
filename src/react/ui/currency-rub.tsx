import type { Icon } from './types'

export const IconCurrencyRub: Icon = ({
  size = 24,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      data-slot='currency-rub'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path opacity='.2' d='M8.33 3.88h5.71a4.96 4.96 0 0 1 0 9.9H8.33z' fill='currentColor' />
      <path
        d='M5.28 16.84h8.38m-5.33 3.8V13.8m0 0V3.88h5.71a4.96 4.96 0 0 1 0 9.9zm0 0H5.28'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
