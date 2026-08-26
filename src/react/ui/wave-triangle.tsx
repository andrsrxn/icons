import type { Icon } from './types'

export const IconWaveTriangle: Icon = ({
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
      data-slot='ui-icon-wave-triangle'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M2.92 8.09C4.4 5.66 5.14 4.45 6.21 4.4h.2c1.06.07 1.78 1.3 3.22 3.74l4.28 7.3c1.58 2.7 2.36 4.04 3.52 4.02 1.17-.01 1.92-1.37 3.43-4.1l.14-.25'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
