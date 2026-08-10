import type { Icon } from './types'

export const IconCircleHalfHorizontal: Icon = ({
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
      data-slot='circle-half-horizontal'
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
        d='M3.52 12a8.48 8.48 0 0 0 16.96 0z'
        fill='currentColor'
      />
      <path
        d='M20.48 12a8.48 8.48 0 1 0-16.96 0m16.96 0a8.48 8.48 0 0 1-16.96 0m16.96 0H3.52'
        stroke='currentColor'
        strokeWidth='1.5'
      />
    </svg>
  )
}
