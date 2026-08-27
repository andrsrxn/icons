import type { Icon } from './types'

export const IconAppWindow: Icon = ({
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
      data-slot='ui-icon-app-window'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect opacity='.2' x='2.7' y='4.53' width='18.61' height='14.93' rx='3' fill='currentColor' />
      <rect
        x='2.7'
        y='4.53'
        width='18.61'
        height='14.93'
        rx='3'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M7.07 8.2A.54.54 0 1 1 6 8.2a.54.54 0 0 1 1.07 0m4.08 0a.54.54 0 1 1-1.08 0 .54.54 0 0 1 1.08 0m4.07 0a.54.54 0 1 1-1.07 0 .54.54 0 0 1 1.07 0'
        fill='currentColor'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
