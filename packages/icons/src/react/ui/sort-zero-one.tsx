import type { Icon } from './types'

export const IconSortZeroOne: Icon = ({
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
      data-slot='icon-ui-sort-zero-one'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='m11.74 6.45-.99-.98c-1.33-1.34-2-2-2.83-2s-1.5.66-2.83 2l-.99.98'
        stroke='currentColor'
      />
      <path d='M7.92 20.52V3.6' stroke='currentColor' />
      <rect x='15.6' y='13.25' width='4.2' height='7.26' rx='2' stroke='currentColor' />
      <path
        d='m15.5 5.55 1.47-1.33c.71-.64 1.07-.96 1.37-.83s.3.61.3 1.58v5.46'
        stroke='currentColor'
      />
    </svg>
  )
}
