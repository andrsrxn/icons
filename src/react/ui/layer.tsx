import type { Icon } from './types'

export const IconLayer: Icon = ({
  size = 24,
  strokeWidth = 1.5,
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
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='ui-icon-layer'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M3.18 10.95 10.9 7.9a3 3 0 0 1 2.2 0l7.75 3.04a1 1 0 0 1 .02 1.85l-7.71 3.24a3 3 0 0 1-2.33 0L3.16 12.8a1 1 0 0 1 .02-1.85'
        fill='currentColor'
      />
      <path
        d='M5.46 10.05 9.8 8.34c1.09-.43 1.63-.64 2.2-.64.56 0 1.1.21 2.19.64l4.36 1.7c1.95.77 2.93 1.15 2.93 1.83.01.67-.95 1.07-2.88 1.88l-4.28 1.8h0c-1.15.48-1.72.72-2.32.72-.61 0-1.18-.24-2.33-.73l-4.25-1.79c-1.92-.8-2.88-1.21-2.88-1.88.01-.68.98-1.06 2.92-1.82'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
