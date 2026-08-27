import type { Icon } from './types'

export const IconFunction: Icon = ({
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
      data-slot='ui-icon-function'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M6.14 18c-.2 1.28.15 2.6 1.52 3 1.8.54 3.16-1.22 3.78-3 2.03-5.86 2.54-7 4.01-12.49C15.82 4.15 16.61 3.14 18 3c1.4-.14 2.87.99 2.5 2.51M8.04 11.24H18'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
