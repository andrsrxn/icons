import type { Icon } from './types'

export const IconAnchor: Icon = ({
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
      data-slot='ui-icon-anchor'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <circle opacity='.2' cx='12' cy='5.16' r='2.58' fill='currentColor' />
      <path d='M12 21.5V7.76' stroke='currentColor' strokeWidth={strokeWidth} />
      <circle cx='12' cy='5.16' r='2.58' stroke='currentColor' strokeWidth={strokeWidth} />
      <path
        d='M19.7 14.86c0 3.05-3.44 6.65-7.7 6.65s-7.7-3.6-7.7-6.65M15.52 12H8.48'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='m6.19 15.4-.55-.36c-.69-.46-1.04-.68-1.4-.63-.37.04-.65.35-1.2.97l-.43.5m15.21-.48.54-.36c.69-.45 1.04-.68 1.4-.63.38.04.65.35 1.2.97l.43.5'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
