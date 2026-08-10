import type { Icon } from './types'

export const IconBellElectric: Icon = ({
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
      data-slot='bell-electric'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <circle opacity='.2' cx='18.49' cy='15.2' r='1.51' fill='currentColor' />
      <rect opacity='.2' x='7.34' y='14.91' width='6.86' height='5.6' rx='2' fill='currentColor' />
      <circle cx='10.77' cy='9.2' r='5.71' stroke='currentColor' strokeWidth='1.5' />
      <rect
        x='7.34'
        y='14.91'
        width='6.86'
        height='5.6'
        rx='2'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <path d='M11.23 9.2a.46.46 0 1 1-.92 0 .46.46 0 0 1 .92 0' fill='currentColor' />
      <path
        d='M11.23 9.2a.46.46 0 1 1-.92 0 .46.46 0 0 1 .92 0Zm6.57 7.67c-.45.54-.79.8-1.43 1.07-.63.28-1.04.36-1.74.33'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
      <circle cx='18.49' cy='15.2' r='1.51' stroke='currentColor' strokeWidth='1.5' />
    </svg>
  )
}
