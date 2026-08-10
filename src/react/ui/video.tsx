import type { Icon } from './types'

export const IconVideo: Icon = ({
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
      data-slot='video'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M3.58 10.68c0-1.89 0-2.83.58-3.42.59-.58 1.53-.58 3.42-.58h4.16c1.88 0 2.83 0 3.41.58.59.59.59 1.53.59 3.42v2.64c0 1.89 0 2.83-.59 3.42-.58.58-1.53.58-3.41.58H7.58c-1.89 0-2.83 0-3.42-.58-.58-.59-.58-1.53-.58-3.42z'
        fill='currentColor'
      />
      <path
        d='M3.58 10.68c0-1.89 0-2.83.58-3.42.59-.58 1.53-.58 3.42-.58h4.16c1.88 0 2.83 0 3.41.58.59.59.59 1.53.59 3.42v2.64c0 1.89 0 2.83-.59 3.42-.58.58-1.53.58-3.41.58H7.58c-1.89 0-2.83 0-3.42-.58-.58-.59-.58-1.53-.58-3.42zm12.16.39c0-.53 0-.8.08-1.03q.13-.37.4-.63c.2-.16.43-.27.92-.48 1.05-.46 1.57-.69 2-.63.43.07.82.32 1.06.7.22.36.22.93.22 2.07v1.88c0 1.14 0 1.7-.22 2.07a1.5 1.5 0 0 1-1.06.7c-.42.06-.94-.17-1.99-.62a3 3 0 0 1-.92-.48 1.5 1.5 0 0 1-.41-.63c-.08-.24-.08-.5-.08-1.04z'
        stroke='currentColor'
        strokeWidth='1.5'
      />
    </svg>
  )
}
