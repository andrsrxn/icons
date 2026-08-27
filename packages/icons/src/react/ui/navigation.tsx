import type { Icon } from './types'

export const IconNavigation: Icon = ({
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
      data-slot='ui-icon-navigation'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M4.69 9.8C3.34 6.23 2.66 4.45 3.57 3.53c.92-.91 2.7-.24 6.27 1.12L16.11 7c3.59 1.36 5.39 2.04 5.55 3.22a2 2 0 0 1 0 .51c-.14 1.18-1.92 1.9-5.5 3.33-.68.28-1.03.41-1.3.66l-.13.14c-.25.26-.38.6-.66 1.3-1.4 3.51-2.1 5.27-3.25 5.43a2 2 0 0 1-.59 0c-1.15-.18-1.82-1.95-3.16-5.5z'
        fill='currentColor'
      />
      <path
        d='M4.69 9.8C3.34 6.23 2.66 4.45 3.57 3.53c.92-.91 2.7-.24 6.27 1.12L16.11 7c3.59 1.36 5.39 2.04 5.55 3.22a2 2 0 0 1 0 .51c-.14 1.18-1.92 1.9-5.5 3.33-.68.28-1.03.41-1.3.66l-.13.14c-.25.26-.38.6-.66 1.3-1.4 3.51-2.1 5.27-3.25 5.43a2 2 0 0 1-.59 0c-1.15-.18-1.82-1.95-3.16-5.5z'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
