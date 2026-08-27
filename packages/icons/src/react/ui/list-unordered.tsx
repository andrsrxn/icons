import type { Icon } from './types'

export const IconListUnordered: Icon = ({
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
      data-slot='ui-icon-list-unordered'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path d='M21.61 6H8m13.61 6H8m13.61 6H8' stroke='currentColor' strokeWidth={strokeWidth} />
      <path
        d='M4 12a.66.66 0 1 1-1.32 0A.66.66 0 0 1 4 12m0-6a.66.66 0 1 1-1.32 0A.66.66 0 0 1 4 6m0 12a.66.66 0 1 1-1.32 0A.66.66 0 0 1 4 18'
        fill='currentColor'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
