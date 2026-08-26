import type { Icon } from './types'

export const IconBank: Icon = ({
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
      data-slot='ui-icon-bank'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect opacity='.2' x='2.74' y='17.37' width='18.53' height='3.9' rx='1' fill='currentColor' />
      <path
        opacity='.2'
        d='M10.88 3.13c.54-.36.81-.55 1.12-.55.3 0 .58.19 1.12.55l5.14 3.48c2.21 1.5 3.32 2.24 3.1 2.95-.21.7-1.55.7-4.22.7H6.86c-2.67 0-4 0-4.22-.7s.89-1.46 3.1-2.95z'
        fill='currentColor'
      />
      <rect
        x='2.74'
        y='17.37'
        width='18.53'
        height='3.9'
        rx='1'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M10.88 3.13c.54-.36.81-.55 1.12-.55.3 0 .58.19 1.12.55l5.14 3.48c2.21 1.5 3.32 2.24 3.1 2.95-.21.7-1.55.7-4.22.7H6.86c-2.67 0-4 0-4.22-.7s.89-1.46 3.1-2.95zm-5.66 7.14v7.1m4.52-7.1v7.1m4.52-7.1v7.1m4.52-7.1v7.1'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
