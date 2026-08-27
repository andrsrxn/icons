import type { Icon } from './types'

export const IconBackground: Icon = ({
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
      data-slot='ui-icon-background'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect
        opacity='.2'
        x='2.68'
        y='2.68'
        width='18.64'
        height='18.64'
        rx='3'
        fill='currentColor'
      />
      <rect
        x='2.68'
        y='2.68'
        width='18.64'
        height='18.64'
        rx='3'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='m3 15.04 6.05 6.05M2.88 8.94l12.27 12.28M3.55 3.64l16.9 16.9M8.73 2.85l12.51 12.52M14.75 2.9l6.44 6.44'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
