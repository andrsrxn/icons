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
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
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
        fill='currentColor'
        d='M15.817 7.63a3.817 3.817 0 1 1-7.634 0 3.817 3.817 0 0 1 7.634 0Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M12 11.56v9.066M15.817 7.63a3.817 3.817 0 1 1-7.634 0 3.817 3.817 0 0 1 7.634 0Z'
      />
    </svg>
  )
}
