import type { Icon } from './types'

export const IconScanUser: Icon = ({
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
      data-slot='ui-icon-scan-user'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M16.22 11.05a4.21 4.21 0 1 1-8.43 0 4.21 4.21 0 0 1 8.43 0'
        fill='currentColor'
      />
      <path
        d='M16.21 11.05a4.2 4.2 0 0 1-4.21 4.2 4.21 4.21 0 1 1 4.21-4.2m-.28 10.27c2.27 0 3.4 0 4.2-.57a3 3 0 0 0 .64-.65c.58-.8.58-1.93.58-4.2M15.97 2.71c2.23 0 3.35 0 4.13.56a3 3 0 0 1 .69.69c.56.78.56 1.9.56 4.14M8.07 21.32c-2.27 0-3.4 0-4.2-.58a3 3 0 0 1-.64-.64c-.58-.8-.58-1.93-.58-4.2M8.07 2.71c-2.27 0-3.4 0-4.2.58a3 3 0 0 0-.64.65c-.58.79-.58 1.92-.58 4.2'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path d='M16.78 16.75a8.3 8.3 0 0 0-9.56 0' stroke='currentColor' strokeWidth={strokeWidth} />
    </svg>
  )
}
