import type { Icon } from './types'

export const IconLock: Icon = ({
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
      data-slot='ui-icon-lock'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect
        opacity='.2'
        x='4.19'
        y='9.52'
        width='15.62'
        height='11.65'
        rx='3'
        fill='currentColor'
      />
      <rect
        x='4.19'
        y='9.52'
        width='15.62'
        height='11.65'
        rx='3'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='m15.96 9.52-.38-3.6a3.57 3.57 0 0 0-7.1-.03l-.41 3.63'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M13 15.09a1 1 0 1 1-2 0 1 1 0 0 1 2 0'
        fill='currentColor'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
