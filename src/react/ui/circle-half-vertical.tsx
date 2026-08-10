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
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
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
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12 3.52a8.48 8.48 0 1 0 0 16.96z'
        fill='currentColor'
      />
      <path
        d='M12 20.48a8.48 8.48 0 0 0 0-16.96m0 16.96a8.48 8.48 0 1 1 0-16.96m0 16.96V3.52'
        stroke='currentColor'
        strokeWidth='1.5'
      />
    </svg>
  )
}
