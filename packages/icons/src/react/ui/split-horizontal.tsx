import type { Icon } from './types'

export const IconSplitHorizontal: Icon = ({
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
      data-slot='ui-icon-split-horizontal'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect
        opacity='.2'
        x='2.75'
        y='5.28'
        width='18.49'
        height='13.44'
        rx='3'
        fill='currentColor'
      />
      <rect
        x='2.75'
        y='5.28'
        width='18.49'
        height='13.44'
        rx='3'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path d='M12 3.04v17.92' stroke='currentColor' strokeWidth={strokeWidth} />
    </svg>
  )
}
