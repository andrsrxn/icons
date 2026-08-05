import type { Icon } from './types'

export const IconInfinite: Icon = ({
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
      data-slot='infinite'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        stroke='currentColor'
        strokeWidth='1.5'
        d='M12.024 11.91c-1.815 2.116-3.605 4.27-6.146 3.59-1.476-.396-2.273-1.973-2.273-3.501 0-1.529.797-3.105 2.273-3.5 2.606-.7 4.393 1.338 6.146 3.411Zm0 0c1.772-2.064 3.568-4.092 6.107-3.412 1.477.396 2.34 1.972 2.34 3.501 0 1.528-.863 3.105-2.34 3.5-2.559.687-4.315-1.47-6.107-3.589Z'
      />
    </svg>
  )
}
