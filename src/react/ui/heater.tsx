import type { Icon } from './types'

export const IconHeater: Icon = ({
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
      data-slot='heater'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect opacity='.2' x='3.75' y='9.86' width='16.51' height='9' rx='2' fill='currentColor' />
      <rect
        x='3.75'
        y='9.86'
        width='16.51'
        height='9'
        rx='2'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <path
        d='M7 18.86v1.54m10-1.54v1.54m-9-7.84v3.6m8-3.6v3.6m-4-3.6v3.6m1.13-12.68.58.5c.5.43.45 1.2-.09 1.57a.98.98 0 0 0 0 1.63l.52.36M9.23 3.48l.56.5a1 1 0 0 1-.09 1.57 1 1 0 0 0 0 1.63l.5.36'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
