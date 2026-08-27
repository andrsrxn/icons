import type { Icon } from './types'

export const IconArchive: Icon = ({
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
      data-slot='ui-icon-archive'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect opacity='.2' x='4.57' y='8.28' width='14.87' height='12' rx='2' fill='currentColor' />
      <path
        d='M4.57 8.28v6c0 2.82 0 4.24.87 5.12.88.88 2.3.88 5.13.88h2.86c2.83 0 4.25 0 5.13-.88s.87-2.3.87-5.12v-6'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <rect
        x='2.65'
        y='4.28'
        width='18.69'
        height='4'
        rx='1'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path d='M16 11.78H8' stroke='currentColor' strokeWidth={strokeWidth} />
    </svg>
  )
}
