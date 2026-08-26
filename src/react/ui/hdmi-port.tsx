import type { Icon } from './types'

export const IconHdmiPort: Icon = ({
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
      data-slot='ui-icon-hdmi-port'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M2.62 10.48c0-1.88 0-2.83.59-3.41.58-.59 1.53-.59 3.41-.59h10.76c1.88 0 2.83 0 3.41.59.59.58.59 1.53.59 3.41v1.7c0 .74 0 1.1-.11 1.42a2 2 0 0 1-.65.92c-.26.2-.6.33-1.3.57l-.37.13-.1.04a2 2 0 0 0-1.11 1.05l-.07.13a2 2 0 0 1-1.7 1.08H7.88a1.8 1.8 0 0 1-1.68-1.16A1.8 1.8 0 0 0 5 15.27l-.42-.12c-.48-.13-.72-.2-.91-.3a2 2 0 0 1-1-1.33c-.05-.21-.05-.46-.05-.95z'
        fill='currentColor'
      />
      <path
        d='M2.62 10.74c0-1.17 0-1.76.16-2.23a3 3 0 0 1 1.87-1.87c.47-.16 1.06-.16 2.23-.16h10.24c1.17 0 1.76 0 2.23.16a3 3 0 0 1 1.87 1.87c.16.47.16 1.06.16 2.23v2.3c0 1.08-.88 1.96-1.96 1.96-.73 0-1.4.4-1.74 1.06l-.1.2c-.4.77-1.2 1.25-2.07 1.25H8.46a2.6 2.6 0 0 1-2.22-1.25l-.21-.37A1.9 1.9 0 0 0 4.45 15a1.83 1.83 0 0 1-1.83-1.83zm3.43-.41h11.9'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
