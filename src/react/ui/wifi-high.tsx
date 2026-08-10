import type { Icon } from './types'

export const IconWifiHigh: Icon = ({
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
      data-slot='wifi-high'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M8.23 15.25S9.5 13.69 12 13.69s3.77 1.56 3.77 1.56M5.61 12.33S7.77 9.55 12 9.55s6.39 2.78 6.39 2.78M3.48 8.81S6.35 5.3 12 5.3s8.52 3.5 8.52 3.5m-7.7 9.6a.82.82 0 1 1-1.64 0 .82.82 0 0 1 1.64 0Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
