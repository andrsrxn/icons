import type { Icon } from './types'

export const IconRobot: Icon = ({
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
      data-slot='ui-icon-robot'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect opacity='.2' x='5.5' y='8.33' width='12.99' height='12.99' rx='3' fill='currentColor' />
      <path
        d='M14.8 16.96c-.6.6-1.55.98-2.8.98a4.3 4.3 0 0 1-2.81-.98m.67-4.87v1.49m4.48-1.49v1.49M3 12.43v4.8m18-4.8v4.8M12 6.4v1.93'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <rect
        x='5.5'
        y='8.33'
        width='12.99'
        height='12.99'
        rx='3'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M10.46 4.46A1.53 1.53 0 0 0 12 6a1.54 1.54 0 1 0-1.54-1.54'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        opacity='.2'
        d='M10.43 4.66a1.54 1.54 0 1 0 3.08 0 1.54 1.54 0 0 0-3.08 0'
        fill='currentColor'
      />
    </svg>
  )
}
