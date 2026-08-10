import type { Icon } from './types'

export const IconMapPinLineArea: Icon = ({
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
      data-slot='map-pin-line-area'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M15.26 6.97a3.26 3.26 0 1 1-6.52 0 3.26 3.26 0 0 1 6.52 0m5.03 10.32c0 1.78-3.71 3.22-8.29 3.22s-8.29-1.44-8.29-3.22 3.71-3.22 8.29-3.22 8.29 1.44 8.29 3.22'
        fill='currentColor'
        opacity='.2'
      />
      <path
        d='M12 10.24a3.26 3.26 0 1 0 0-6.53 3.26 3.26 0 0 0 0 6.53Zm0 0v6.94m3.65-2.78c2.75.52 4.64 1.62 4.64 2.89 0 1.78-3.71 3.22-8.29 3.22s-8.29-1.44-8.29-3.22c0-1.27 1.89-2.37 4.64-2.9'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
