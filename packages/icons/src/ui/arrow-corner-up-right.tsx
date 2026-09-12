import type { Icon } from './types'

export const IconArrowCornerUpRight: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='icon-ui-arrow-corner-up-right'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M19 8.5h-6.3c-3.77 0-5.66 0-6.83 1.17S4.7 12.72 4.7 16.49V19'
        stroke='currentColor'
      />
      <path
        d='m16.08 4.23 1.44 1.43c1.34 1.34 2 2 2 2.83s-.66 1.5-2 2.83l-1.44 1.44'
        stroke='currentColor'
      />
    </svg>
  )
}
