import type { Icon } from './types'

export const IconMinimize: Icon = ({
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
      data-slot='minimize'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M20.63 8.79h-1.41c-1.9 0-2.83 0-3.42-.58-.59-.59-.59-1.53-.59-3.42V3.37m5.42 11.84h-1.41c-1.9 0-2.83 0-3.42.58-.59.59-.59 1.53-.59 3.42v1.42M3.37 8.8h1.41c1.9 0 2.83 0 3.42-.58.59-.59.59-1.53.59-3.42V3.37M3.37 15.2h1.41c1.9 0 2.83 0 3.42.58.59.59.59 1.53.59 3.42v1.42'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
