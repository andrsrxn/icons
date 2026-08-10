import type { Icon } from './types'

export const IconMapPinLine: Icon = ({
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
      data-slot='map-pin-line'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M15.82 7.63a3.82 3.82 0 1 1-7.64 0 3.82 3.82 0 0 1 7.64 0'
        fill='currentColor'
      />
      <path
        d='M12 11.56v9.07m3.82-13a3.82 3.82 0 1 1-7.64 0 3.82 3.82 0 0 1 7.64 0Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
