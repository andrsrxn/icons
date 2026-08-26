import type { Icon } from './types'

export const IconTent: Icon = ({
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
      data-slot='ui-icon-tent'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M4 14.7V21h5.34l.61-5.1c.1-.85.15-1.27.44-1.52.28-.25.7-.25 1.55-.25h.02c.84 0 1.25 0 1.53.25h.02c.28.26.33.67.43 1.5l.62 5.12H20v-6.31c0-.74 0-1.1-.12-1.45-.13-.34-.37-.61-.85-1.17l-4-4.61c-1.4-1.62-2.1-2.43-3-2.43-.92 0-1.63.8-3.03 2.42l-4.02 4.62c-.49.55-.73.83-.86 1.17-.12.34-.12.71-.12 1.45'
        fill='currentColor'
      />
      <path
        d='M4 21v-5.56c0-1.1 0-1.66.19-2.17s.55-.93 1.28-1.77l8.06-9.26M20 21v-5.55c0-1.12 0-1.67-.19-2.18s-.55-.93-1.29-1.77l-8.1-9.26M14.56 21l-.6-4.66c-.12-.83-.17-1.24-.45-1.49s-.7-.25-1.55-.25h-.04c-.84 0-1.25 0-1.54.25-.28.25-.33.66-.44 1.5L9.34 21m12.56 0H2.1'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
