import type { Icon } from './types'

export const IconStrategy: Icon = ({
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
      data-slot='ui-icon-strategy'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <circle opacity='.2' cx='18.08' cy='18.08' r='3.08' fill='currentColor' />
      <circle cx='18.08' cy='18.08' r='3.08' stroke='currentColor' strokeWidth={strokeWidth} />
      <path
        d='m16.56 4.42.53.39c1.54 1.1 2.3 1.64 2.44 2.46s-.41 1.58-1.51 3.12l-.38.53'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M5.86 20.61c.54-3.99 1.89-6.53 4.96-9.35 2.69-2.46 4.85-3.5 8.34-3.97M3 3l5.5 5.5m0-5.5L3 8.5'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
