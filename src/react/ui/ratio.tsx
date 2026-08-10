import type { Icon } from './types'

export const IconRatio: Icon = ({
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
      data-slot='ratio'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect opacity='.2' x='7' y='7' width='10' height='10' rx='2' fill='currentColor' />
      <rect
        x='3.75'
        y='7'
        width='16.51'
        height='10'
        rx='2'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <rect
        x='7'
        y='20.25'
        width='16.51'
        height='10'
        rx='2'
        transform='rotate(-90 7 20.25)'
        stroke='currentColor'
        strokeWidth='1.5'
      />
    </svg>
  )
}
