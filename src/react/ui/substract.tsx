import type { Icon } from './types'

export const IconSubstract: Icon = ({
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
      data-slot='substract'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M3.51 11.19c0 1.88 0 2.83.59 3.41.58.59 1.53.59 3.41.59h3.67c1.89 0 2.83 0 3.42-.59.58-.58.58-1.53.58-3.41V7.52c0-1.89 0-2.83-.58-3.42-.59-.58-1.53-.58-3.42-.58H7.51c-1.88 0-2.83 0-3.41.58-.59.59-.59 1.53-.59 3.42z'
        fill='currentColor'
      />
      <path
        d='M14.65 8.67h1.84c1.88 0 2.83 0 3.41.58.59.59.59 1.53.59 3.42v3.67c0 1.88 0 2.83-.59 3.41-.58.59-1.53.59-3.41.59h-3.67c-1.89 0-2.83 0-3.42-.59-.58-.58-.58-1.53-.58-3.41V14.5M7.52 3.52h3.66c1.89 0 2.83 0 3.42.58.58.59.58 1.53.58 3.42v3.67c0 1.88 0 2.83-.58 3.41-.59.59-1.53.59-3.42.59H7.51c-1.88 0-2.83 0-3.41-.59-.59-.58-.59-1.53-.59-3.41V7.52c0-1.89 0-2.83.59-3.42.58-.58 1.53-.58 3.41-.58Z'
        stroke='currentColor'
        strokeWidth='1.5'
      />
    </svg>
  )
}
