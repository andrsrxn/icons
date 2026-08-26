import type { Icon } from './types'

export const IconBellElectric: Icon = ({
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
      data-slot='ui-icon-bell-electric'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <circle opacity='.2' cx='19.11' cy='15.53' r='1.67' fill='currentColor' />
      <rect opacity='.2' x='6.8' y='15.21' width='7.58' height='6.19' rx='2' fill='currentColor' />
      <circle cx='10.59' cy='8.91' r='6.3' stroke='currentColor' strokeWidth={strokeWidth} />
      <rect
        x='6.8'
        y='15.21'
        width='7.58'
        height='6.19'
        rx='2'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M11.43 8.9a.85.85 0 1 1-1.7 0 .85.85 0 0 1 1.7 0'
        fill='currentColor'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M18.36 17.38c-.5.6-.88.88-1.58 1.18-.7.31-1.16.4-1.93.37'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <circle cx='19.11' cy='15.53' r='1.67' stroke='currentColor' strokeWidth={strokeWidth} />
    </svg>
  )
}
