import type { Icon } from './types'

export const IconMouseMiddleClick: Icon = ({
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
      data-slot='ui-icon-mouse-middle-click'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M6.94 14.2h10.08v2.86a5.04 5.04 0 0 1-10.08 0zm5.04-2c-.6 0-1.08-.48-1.08-1.08V9.57a1.09 1.09 0 0 1 2.17 0v1.55c0 .6-.49 1.08-1.09 1.08'
        fill='currentColor'
      />
      <rect
        x='6.94'
        y='5.81'
        width='10.08'
        height='16.29'
        rx='5.04'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path d='M6.94 14.34h10.08' stroke='currentColor' strokeWidth={strokeWidth} />
      <rect
        x='10.63'
        y='8.38'
        width='2.8'
        height='3.94'
        rx='1.4'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M12 14.31v-1.99m0-3.97V6.33m1.59-2.97.79-1.7m-3.97 1.7-.83-1.7'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
