import type { Icon } from './types'

export const IconStand: Icon = ({
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
      data-slot='ui-icon-stand'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect opacity='.2' x='3' y='5.1' width='18' height='11.53' rx='3' fill='currentColor' />
      <rect
        x='3'
        y='5.1'
        width='18'
        height='11.53'
        rx='3'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M12 2.54V5.1m0 11.53v4.42m0-4.42-4.41 4.42M12 16.63l4.41 4.42'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
