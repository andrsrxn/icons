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
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
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
      <path
        fill='currentColor'
        d='M8.326 3.875h5.718a4.956 4.956 0 0 1 0 9.912H8.326V3.875Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M5.277 16.836h8.386m-5.337 3.812v-6.861m0 0V3.875h5.718a4.956 4.956 0 1 1 0 9.912H8.326Zm0 0h-3.05'
      />
    </svg>
  )
}
