import type { Icon } from './types'

export const IconTouchpad: Icon = ({
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
      data-slot='touchpad'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect opacity='.2' x='3.81' y='12' width='16.38' height='6.14' rx='2' fill='currentColor' />
      <rect
        x='3.81'
        y='5.86'
        width='16.38'
        height='12.29'
        rx='2'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <path
        d='M3.8 12h16.4M12 18.14V12'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
