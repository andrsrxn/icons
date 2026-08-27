import type { Icon } from './types'

export const IconGripVertical: Icon = ({
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
      data-slot='ui-icon-grip-vertical'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M9.38 4.21a.84.84 0 1 1-1.69 0 .84.84 0 0 1 1.7 0M9.38 12a.84.84 0 1 1-1.69 0 .84.84 0 0 1 1.7 0m-.01 7.79a.84.84 0 1 1-1.69 0 .84.84 0 0 1 1.7 0M16.3 4.21a.84.84 0 1 1-1.68 0 .84.84 0 0 1 1.69 0M16.3 12a.84.84 0 1 1-1.68 0 .84.84 0 0 1 1.69 0m-.01 7.79a.84.84 0 1 1-1.68 0 .84.84 0 0 1 1.69 0'
        fill='currentColor'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
