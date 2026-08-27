import type { Icon } from './types'

export const IconBlocks: Icon = ({
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
      data-slot='ui-icon-blocks'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect opacity='.2' x='2.84' y='13.71' width='7.65' height='7.65' rx='2' fill='currentColor' />
      <rect opacity='.2' x='2.84' y='6.05' width='7.65' height='7.65' rx='2' fill='currentColor' />
      <rect opacity='.2' x='10.5' y='13.71' width='7.65' height='7.65' rx='2' fill='currentColor' />
      <rect opacity='.2' x='13.76' y='2.75' width='7.48' height='7.48' rx='2' fill='currentColor' />
      <rect
        x='2.84'
        y='13.71'
        width='7.65'
        height='7.65'
        rx='2'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <rect
        x='2.84'
        y='6.05'
        width='7.65'
        height='7.65'
        rx='2'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <rect
        x='10.5'
        y='13.71'
        width='7.65'
        height='7.65'
        rx='2'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <rect
        x='13.76'
        y='2.75'
        width='7.48'
        height='7.48'
        rx='2'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
