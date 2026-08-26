import type { Icon } from './types'

export const IconBuildings: Icon = ({
  size = 24,
  strokeWidth = 1.5,
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
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='ui-icon-buildings'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M14.09 21.21V8.6h1.7c1.9 0 2.83 0 3.42.59s.59 1.53.59 3.41v8.62z'
        fill='currentColor'
      />
      <path
        d='M4.57 21.21V6.8c0-1.89 0-2.83.59-3.42.58-.58 1.53-.58 3.41-.58h1.15c1.88 0 2.83 0 3.41.58.59.59.59 1.53.59 3.42v14.4m0-12.88h2.08c1.88 0 2.82 0 3.41.59.59.58.59 1.53.59 3.41v8.9m1.94-.01H2.26m8.47-13.32H7.56M10.73 12H7.56m3.17 4.11H7.56'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M17.08 12a.41.41 0 1 1-.83 0 .41.41 0 0 1 .83 0'
        fill='currentColor'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
