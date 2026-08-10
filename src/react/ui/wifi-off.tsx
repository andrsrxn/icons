import type { Icon } from './types'

export const IconWifiOff: Icon = ({
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
      data-slot='wifi-off'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M8.23 15.25S9.5 13.69 12 13.69c.79 0 1.46.16 2 .37m-8.39-1.73S7.77 9.55 12 9.55s6.39 2.78 6.39 2.78M3.48 8.81S6.35 5.3 12 5.3s8.52 3.5 8.52 3.5M3.5 3.5l17 17m-7.68-2.08a.82.82 0 1 1-1.64 0 .82.82 0 0 1 1.64 0Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
