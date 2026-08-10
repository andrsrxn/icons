import type { Icon } from './types'

export const IconWaveSquare: Icon = ({
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
      data-slot='wave-square'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M20.28 15v1c0 1.89 0 2.83-.58 3.41-.59.59-1.53.59-3.42.59h-.24c-1.89 0-2.83 0-3.42-.59-.58-.58-.58-1.52-.58-3.41V8c0-1.89 0-2.83-.59-3.41C10.87 4 9.92 4 8.04 4h-.3c-1.9 0-2.83 0-3.42.59-.59.58-.59 1.52-.59 3.41'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
