import type { Icon } from './types'

export const IconArrowUpLeft: Icon = ({
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
      data-slot='ui-icon-arrow-up-left'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M5.67 16.92v-6.88c0-1.9 0-2.84.58-3.42s1.53-.59 3.42-.59h6.89m1.46 12.56L6.82 7.39'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
