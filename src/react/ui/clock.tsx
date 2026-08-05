import type { Icon } from './types'

export const IconClock: Icon = ({
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
      data-slot='clock'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        fill='currentColor'
        d='M20.398 12a8.398 8.398 0 1 1-16.796 0 8.398 8.398 0 0 1 16.796 0Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M10.95 7.525v3.058c0 1.181 0 1.772.29 2.25s.814.75 1.861 1.297l2.298 1.198M20.398 12a8.398 8.398 0 1 1-16.796 0 8.398 8.398 0 0 1 16.796 0Z'
      />
    </svg>
  )
}
