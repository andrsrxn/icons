import type { Icon } from './types'

export const IconGripHorizontal: Icon = ({
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
      data-slot='ui-icon-grip-horizontal'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M4.21 14.62a.84.84 0 1 1 0 1.69.84.84 0 0 1 0-1.7m7.79.01a.84.84 0 1 1 0 1.69.84.84 0 0 1 0-1.7m7.79.01a.84.84 0 1 1 0 1.69.84.84 0 0 1 0-1.7M4.21 7.7a.84.84 0 1 1 0 1.68.84.84 0 0 1 0-1.69M12 7.7a.84.84 0 1 1 0 1.68.84.84 0 0 1 0-1.69m7.79.01a.84.84 0 1 1 0 1.68.84.84 0 0 1 0-1.69'
        fill='currentColor'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
