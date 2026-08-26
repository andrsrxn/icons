import type { Icon } from './types'

export const IconListCollapse: Icon = ({
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
      data-slot='ui-icon-list-collapse'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M21.19 6H2.8m8.01 6h-8m8 6h-8m11.25-7.2.46.45c1.33 1.34 2 2 2.83 2s1.5-.66 2.83-2l.46-.45m-6.58 8.38.46-.45c1.33-1.34 2-2 2.83-2s1.5.66 2.83 2l.46.45'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
