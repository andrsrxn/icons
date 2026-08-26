import type { Icon } from './types'

export const IconArrowBottomLeft: Icon = ({
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
      data-slot='ui-icon-arrow-bottom-left'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M16.5 18.2H9.7c-1.9 0-2.84 0-3.42-.58-.6-.59-.6-1.53-.6-3.42V7.38m1.16 9.78L17.96 6.04'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
