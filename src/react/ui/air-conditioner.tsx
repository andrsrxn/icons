import type { Icon } from './types'

export const IconAirConditioner: Icon = ({
  size = 24,
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
      data-slot='air-conditioner'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M17.28 3.78a5 5 0 0 1 1.66.13 2 2 0 0 1 1.15 1.15c.13.34.13.78.13 1.66s0 1.31-.13 1.66a2 2 0 0 1-1.15 1.14c-.34.14-.78.14-1.66.14H6.72c-.88 0-1.32 0-1.66-.14A2 2 0 0 1 3.9 8.38c-.13-.35-.13-.78-.13-1.66s0-1.32.13-1.66A2 2 0 0 1 5.06 3.9c.34-.13.78-.13 1.66-.13z'
        fill='currentColor'
      />
      <path
        d='M17.11 3.78c1.04 0 1.56 0 1.96.19a2 2 0 0 1 .96.96c.2.4.2.92.2 1.96s0 1.55-.2 1.96a2 2 0 0 1-.96.96c-.4.19-.92.19-1.96.19H6.9c-1.04 0-1.56 0-1.96-.19a2 2 0 0 1-.96-.96c-.2-.4-.2-.92-.2-1.96s0-1.56.2-1.96a2 2 0 0 1 .96-.96c.4-.2.92-.2 1.96-.2z'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <path
        d='m16.24 13 .9.96c.77.82.69 2.12-.18 2.84a1.96 1.96 0 0 0 0 3l.77.65M11.37 13l.9.96c.77.82.69 2.12-.17 2.84a1.96 1.96 0 0 0-.01 3l.77.65M6.5 13l.9.96c.77.82.7 2.12-.17 2.84a1.96 1.96 0 0 0-.01 3l.77.65'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
