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
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
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
        fill='currentColor'
        d='M15.264 6.971a3.264 3.264 0 1 1-6.528 0 3.264 3.264 0 0 1 6.528 0Zm5.026 10.318c0 1.779-3.712 3.22-8.29 3.22-4.578 0-8.29-1.441-8.29-3.22 0-1.779 3.712-3.22 8.29-3.22 4.578 0 8.29 1.441 8.29 3.22Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M12 10.236a3.264 3.264 0 1 0 0-6.529 3.264 3.264 0 0 0 0 6.529Zm0 0v6.94m3.655-2.778c2.745.524 4.634 1.622 4.634 2.89 0 1.78-3.711 3.221-8.289 3.221-4.578 0-8.29-1.441-8.29-3.22 0-1.27 1.89-2.367 4.636-2.892'
      />
    </svg>
  )
}
