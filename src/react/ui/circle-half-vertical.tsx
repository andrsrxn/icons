import type { Icon } from './types'

export const IconCircleHalfVertical: Icon = ({
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
      data-slot='circle-half-vertical'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M12 3.52a8.48 8.48 0 0 0 0 16.96V3.52Z'
        clipRule='evenodd'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeWidth='1.5'
        d='M12 20.48a8.48 8.48 0 0 0 0-16.96m0 16.96a8.48 8.48 0 0 1 0-16.96m0 16.96V3.52'
      />
    </svg>
  )
}
