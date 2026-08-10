import type { Icon } from './types'

export const IconRecord: Icon = ({
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
      data-slot='record'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M17.15 12a5.15 5.15 0 1 1-10.3 0 5.15 5.15 0 0 1 10.3 0'
        fill='currentColor'
      />
      <path
        d='M17.15 12a5.15 5.15 0 1 1-10.3 0 5.15 5.15 0 0 1 10.3 0Z'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <path
        d='M20.45 12a8.45 8.45 0 1 1-16.9 0 8.45 8.45 0 0 1 16.9 0Z'
        stroke='currentColor'
        strokeWidth='1.5'
      />
    </svg>
  )
}
