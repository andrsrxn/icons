import type { Icon } from './types'

export const IconWomen: Icon = ({
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
      data-slot='ui-icon-women'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <circle opacity='.2' cx='12.03' cy='4.73' r='2.26' fill='currentColor' />
      <path
        opacity='.2'
        d='M8.95 10.68c.43-.7.64-1.05.99-1.24s.75-.19 1.57-.19h.97c.88 0 1.32 0 1.67.21.36.22.56.6.98 1.37l1.9 3.56c.52.97-.19 2.15-1.29 2.15-.8 0-1.46.65-1.46 1.46v1.3c0 .68 0 1.02-.1 1.3a1.5 1.5 0 0 1-.84.83c-.27.1-.61.1-1.29.1-.67 0-1.01 0-1.28-.1a1.5 1.5 0 0 1-.83-.84c-.11-.27-.11-.6-.11-1.28v-1.35a1.5 1.5 0 0 0-1.42-1.42h-.48a1.5 1.5 0 0 1-1.22-2.2l.15-.24z'
        fill='currentColor'
      />
      <circle cx='12.03' cy='4.73' r='2.26' stroke='currentColor' strokeWidth={strokeWidth} />
      <path
        d='M8.95 10.68c.43-.7.64-1.05.99-1.24s.75-.19 1.57-.19h.97c.88 0 1.32 0 1.67.21.36.22.56.6.98 1.37l1.9 3.56c.52.97-.19 2.15-1.29 2.15-.8 0-1.46.65-1.46 1.46v1.3c0 .69 0 1.02-.1 1.3a1.5 1.5 0 0 1-.84.83c-.27.1-.61.1-1.29.1-.67 0-1.01 0-1.28-.1a1.5 1.5 0 0 1-.83-.84c-.11-.27-.11-.6-.11-1.28v-1.35a1.5 1.5 0 0 0-1.42-1.42h-.48a1.5 1.5 0 0 1-1.22-2.2l.15-.24z'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
