import type { Icon } from './types'

export const IconUngroup: Icon = ({
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
      data-slot='ungroup'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect
        opacity='.2'
        x='12.64'
        y='12.64'
        width='7.36'
        height='7.36'
        rx='1.5'
        fill='currentColor'
      />
      <rect
        x='4'
        y='4'
        width='7.36'
        height='7.36'
        rx='1.5'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <rect
        x='12.64'
        y='12.64'
        width='7.36'
        height='7.36'
        rx='1.5'
        stroke='currentColor'
        strokeWidth='1.5'
      />
    </svg>
  )
}
