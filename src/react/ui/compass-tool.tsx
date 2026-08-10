import type { Icon } from './types'

export const IconCompassTool: Icon = ({
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
      data-slot='compass-tool'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M13.92 6.9a1.92 1.92 0 1 1-3.84 0 1.92 1.92 0 0 1 3.84 0'
        fill='currentColor'
      />
      <path
        d='M3.73 15.25S6.7 17.47 12 17.47s8.27-2.22 8.27-2.22m-9.23-6.43L4.76 20.35m8.2-11.53 6.28 11.53M12 4.97V3.36m1.92 3.54a1.92 1.92 0 1 1-3.84 0 1.92 1.92 0 0 1 3.84 0'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
