import type { Icon } from './types'

export const IconHighDefinition: Icon = ({
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
      data-slot='ui-icon-high-definition'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M10.45 7.35v9.3m-6.28-9.3v9.3m0-4.65h6.28m3.32-3.03v6.06c0 .82 0 1.23.31 1.53.32.3.67.27 1.38.23 1.93-.12 4.8-.94 4.8-4.79s-2.87-4.67-4.8-4.79c-.7-.04-1.06-.06-1.38.23s-.31.71-.31 1.53M21.19 20H2.8M21.19 4H2.8'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
