import type { Icon } from './types'

export const IconShipWheel: Icon = ({
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
      data-slot='ship-wheel'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <circle opacity='.2' cx='12' cy='12' r='3' fill='currentColor' />
      <circle cx='12' cy='12' r='3' stroke='currentColor' strokeWidth='1.5' />
      <circle cx='12' cy='12' r='7' stroke='currentColor' strokeWidth='1.5' />
      <path
        d='M3.4 12H9m6 0h5.6M12 20.6V15m0-6V3.4M19 19l-4.56-4.55M9.56 9.57 5 5m0 14 4.56-4.55m4.88-4.88L18.99 5'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
