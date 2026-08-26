import type { Icon } from './types'

export const IconExclude: Icon = ({
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
      data-slot='ui-icon-exclude'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path opacity='.2' d='M8.78 8.77h6.38v6.36H8.78z' fill='currentColor' />
      <rect
        x='2.74'
        y='2.7'
        width='12.98'
        height='12.98'
        rx='3'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <rect
        x='8.28'
        y='8.31'
        width='12.98'
        height='12.98'
        rx='3'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
