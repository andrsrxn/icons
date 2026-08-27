import type { Icon } from './types'

export const IconBomb: Icon = ({
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
      data-slot='ui-icon-bomb'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <circle opacity='.2' cx='9.55' cy='13.61' r='7.07' fill='currentColor' />
      <circle cx='9.55' cy='13.61' r='7.07' stroke='currentColor' strokeWidth={strokeWidth} />
      <path
        d='M5.77 12.97c.19-.76.4-1.18.9-1.78a4 4 0 0 1 1.88-1.32m7.28 1.48 1.56-1.56c.66-.67 1-1 1-1.42s-.34-.74-1-1.41l-1.17-1.17c-.67-.67-1-1-1.42-1s-.75.33-1.41 1l-1.56 1.56m5.27-1.2c.74-.6 1.03-2.2 2.6-2.13 1.16.06 1.91 1.13 1.84 2.3-.1 1.6-1.1 2.9.11 4.04'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
