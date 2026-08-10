import type { Icon } from './types'

export const IconStand: Icon = ({
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
      data-slot='stand'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M3.52 8.5c0-1.29 0-1.93.58-2.33.59-.4 1.53-.4 3.42-.4H16c1.89 0 2.83 0 3.41.4S20 7.21 20 8.5v5.78c0 1.28 0 1.92-.59 2.32-.58.4-1.52.4-3.41.4H7.52c-1.89 0-2.83 0-3.42-.4s-.58-1.04-.58-2.32z'
        fill='currentColor'
      />
      <path
        d='M12 5.69V3.4m0 17.18V17m-6.38 3.59L11 17m7.38 3.59L13 17m-5.48 0H16c1.89 0 2.83 0 3.41-.59.59-.58.59-1.52.59-3.41V9.77c0-1.88 0-2.83-.59-3.41-.58-.59-1.52-.59-3.41-.59H7.52c-1.89 0-2.83 0-3.42.59-.58.58-.58 1.53-.58 3.41V13c0 1.89 0 2.83.58 3.41.59.59 1.53.59 3.42.59Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
