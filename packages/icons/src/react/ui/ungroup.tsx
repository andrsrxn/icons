import type { Icon } from './types'

export const IconUngroup: Icon = ({
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
      data-slot='ui-icon-ungroup'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect opacity='.2' x='12.64' y='3.92' width='7.43' height='7.43' rx='2' fill='currentColor' />
      <rect
        x='3.92'
        y='12.64'
        width='7.43'
        height='7.43'
        rx='2'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <rect
        x='12.64'
        y='3.92'
        width='7.43'
        height='7.43'
        rx='2'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
