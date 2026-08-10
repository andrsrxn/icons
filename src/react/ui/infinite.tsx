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
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
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
        d='M12.02 11.91c-1.81 2.12-3.6 4.27-6.14 3.59C4.4 15.1 3.6 13.53 3.6 12s.8-3.1 2.27-3.5c2.6-.7 4.4 1.34 6.14 3.41Zm0 0c1.78-2.06 3.57-4.1 6.11-3.41 1.48.4 2.34 1.97 2.34 3.5s-.86 3.1-2.34 3.5c-2.56.69-4.31-1.47-6.1-3.59Z'
        stroke='currentColor'
        strokeWidth='1.5'
      />
    </svg>
  )
}
