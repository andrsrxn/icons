import type { Icon } from './types'

export const IconTruckFront: Icon = ({
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
      data-slot='ui-icon-truck-front'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M21.32 14.36c0-.37 0-.55-.05-.7a1 1 0 0 0-.64-.65c-.15-.05-.33-.05-.7-.05H4.07c-.36 0-.55 0-.7.05a1 1 0 0 0-.64.65c-.05.15-.05.33-.05.7 0 1.1 0 1.66.14 2.1a3 3 0 0 0 1.94 1.94c.45.15 1 .15 2.1.15h10.28c1.1 0 1.65 0 2.1-.15a3 3 0 0 0 1.94-1.94c.14-.44.14-1 .14-2.1M18.7 5.02c0 .37-.31.68-.69.68H6a.7.7 0 0 1-.68-.68c0-1.14.91-2.05 2.04-2.05h9.3c1.13 0 2.04.91 2.04 2.05'
        fill='currentColor'
      />
      <path
        d='M21.32 11.73c0-2.83 0-4.24-.88-5.12-.87-.88-2.29-.88-5.12-.88H8.68c-2.83 0-4.25 0-5.12.88s-.88 2.29-.88 5.12v.82c0 2.83 0 4.24.88 5.12.87.88 2.29.88 5.12.88h6.64c2.83 0 4.25 0 5.12-.88s.88-2.3.88-5.12zm-16.57-6a2.8 2.8 0 0 1 2.8-2.8h8.9a2.8 2.8 0 0 1 2.8 2.8M5.16 18.55v.4a2.1 2.1 0 0 0 4.21 0v-.4m5.26 0v.4a2.1 2.1 0 0 0 4.2 0v-.4M2.88 12.96H21M5.53 15.64H9m6 0h3.47'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
