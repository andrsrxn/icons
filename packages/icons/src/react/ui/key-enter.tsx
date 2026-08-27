import type { Icon } from './types'

export const IconKeyEnter: Icon = ({
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
      data-slot='ui-icon-key-enter'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M3.38 13.53H16.7c1.89 0 2.83 0 3.42-.59.58-.58.58-1.53.58-3.41V7.49'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M6.11 17.38 5.1 16.36c-1.34-1.33-2-2-2-2.83s.66-1.5 2-2.83l1-1.02'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
