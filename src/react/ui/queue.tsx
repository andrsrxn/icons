import type { Icon } from './types'

export const IconQueue: Icon = ({
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
      data-slot='queue'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect opacity='.2' x='3.75' y='12.55' width='16.51' height='7.6' rx='2' fill='currentColor' />
      <path d='M20 4.55H4m16 4H4' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' />
      <rect
        x='3.75'
        y='12.55'
        width='16.51'
        height='7.6'
        rx='2'
        stroke='currentColor'
        strokeWidth='1.5'
      />
    </svg>
  )
}
