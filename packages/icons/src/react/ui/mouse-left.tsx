import type { Icon } from './types'

export const IconMouseLeft: Icon = ({
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
      data-slot='ui-icon-mouse-left'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path opacity='.2' d='M18 12.33H6.1v3.36a5.94 5.94 0 1 0 11.89 0z' fill='currentColor' />
      <path
        opacity='.2'
        d='M12.06 13v-1.6q0-1-.58-1.81l-.15-.2a2.8 2.8 0 0 1 .1-3.4c.4-.5.63-1.13.63-1.77v-1.6A6.06 6.06 0 0 0 6 8.68V13z'
        fill='currentColor'
      />
      <rect
        width='11.88'
        height='19.21'
        rx='5.94'
        transform='matrix(-1 0 0 1 18 2.42)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path d='M18 12.48H6.11' stroke='currentColor' strokeWidth={strokeWidth} />
      <rect
        x='10.35'
        y='5.46'
        width='3.31'
        height='4.65'
        rx='1.65'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path d='M11.98 12.45V10.1m0-4.68V3.03' stroke='currentColor' strokeWidth={strokeWidth} />
    </svg>
  )
}
