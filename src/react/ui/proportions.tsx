import type { Icon } from './types'

export const IconProportions: Icon = ({
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
      data-slot='proportions'
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
        d='M20.25 9.81c0-1.89 0-2.83-.58-3.41-.59-.59-1.53-.59-3.42-.59H5.6a2 2 0 0 0-1.84 1.85v.69a2 2 0 0 0 2.2 1.85h1.1c1.21 0 1.82 0 2.28.26a2 2 0 0 1 .76.76c.26.46.26 1.07.26 2.28v.7c0 1.88 0 2.82.58 3.4.6.59 1.53.59 3.41.59h1.91c1.89 0 2.83 0 3.42-.59.58-.58.58-1.52.58-3.41z'
        fill='currentColor'
      />
      <rect
        x='3.75'
        y='5.81'
        width='16.51'
        height='12.38'
        rx='2'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <path
        d='M3.75 9.95h6.98c1.88 0 2.83 0 3.41.59s.59 1.53.59 3.41v4.24H7.75c-1.89 0-2.83 0-3.42-.59-.58-.58-.58-1.52-.58-3.41z'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <path d='M10.38 18.19V9.95' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' />
    </svg>
  )
}
