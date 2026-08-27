import type { Icon } from './types'

export const IconSortOneZero: Icon = ({
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
      data-slot='ui-icon-sort-one-zero'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='m11.74 17.45-.99 1c-1.33 1.33-2 2-2.83 2s-1.5-.67-2.83-2l-.99-1M7.92 3.39V20.3'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <rect
        x='15.6'
        y='13.25'
        width='4.2'
        height='7.26'
        rx='2'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='m15.5 5.55 1.47-1.33c.71-.64 1.07-.96 1.37-.83s.3.61.3 1.58v5.46'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
