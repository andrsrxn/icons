import type { Icon } from './types'

export const IconMinimize: Icon = ({
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
      data-slot='ui-icon-minimize'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M21 15.87h-1.09c-1.88 0-2.83 0-3.41.58-.59.59-.59 1.53-.59 3.42v1.1m-12.88-5.1h1.09c1.88 0 2.83 0 3.41.58.59.59.59 1.53.59 3.42v1.1M20.97 8.15H19.9c-1.89 0-2.83 0-3.42-.58-.58-.6-.58-1.53-.58-3.42V3.09M3.06 8.15h1.06c1.89 0 2.83 0 3.42-.58.58-.6.58-1.53.58-3.42V3.09'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
