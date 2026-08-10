import type { Icon } from './types'

export const IconCrop: Icon = ({
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
      data-slot='crop'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M6.1 10c0-1.89 0-2.83.58-3.41S8.2 6 10.09 6H14c1.89 0 2.83 0 3.41.59C18 7.17 18 8.1 18 10v3.9c0 1.9 0 2.84-.59 3.42-.58.59-1.52.59-3.41.59h-3.9c-1.9 0-2.84 0-3.42-.59-.59-.58-.59-1.53-.59-3.41z'
        fill='currentColor'
      />
      <path
        d='M3.41 6H14c1.89 0 2.83 0 3.41.6.6.58.6 1.52.6 3.4v10.6m2.59-2.62H10.03c-1.89 0-2.83 0-3.42-.58-.58-.59-.58-1.53-.58-3.42V3.41'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
