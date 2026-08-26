import type { Icon } from './types'

export const IconDivider: Icon = ({
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
      data-slot='ui-icon-divider'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M20.33 21.48v-.37c0-2.83 0-4.24-.87-5.12-.88-.88-2.3-.88-5.13-.88H9.67c-2.83 0-4.25 0-5.13.88s-.87 2.3-.87 5.12v.37h16.67m-.01-19.01v.4c0 2.83 0 4.24-.87 5.12-.88.88-2.3.88-5.13.88H9.67c-2.83 0-4.25 0-5.13-.88s-.87-2.3-.87-5.12v-.4h16.67'
        fill='currentColor'
      />
      <path
        d='M20.33 21.42v-.3c0-2.84 0-4.25-.87-5.13-.88-.88-2.3-.88-5.13-.88H9.67c-2.83 0-4.25 0-5.13.88s-.87 2.3-.87 5.12v.31M20.33 2.53v.34c0 2.83 0 4.24-.87 5.12-.88.88-2.3.88-5.13.88H9.67c-2.83 0-4.25 0-5.13-.88s-.87-2.3-.87-5.12v-.34M4.94 12h14.12'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
