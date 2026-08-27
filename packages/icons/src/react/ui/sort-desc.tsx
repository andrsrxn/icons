import type { Icon } from './types'

export const IconSortDesc: Icon = ({
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
      data-slot='ui-icon-sort-desc'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M17.92 5.15H3.19m10 6h-10m7 6h-7m11.46-.5.44.44c1.33 1.33 2 2 2.82 2 .83 0 1.5-.66 2.83-2l.45-.44m-3.27-7.5v9.6'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
