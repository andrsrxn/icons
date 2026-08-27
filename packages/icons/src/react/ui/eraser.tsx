import type { Icon } from './types'

export const IconEraser: Icon = ({
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
      data-slot='ui-icon-eraser'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M16.22 4.59c-.45-.45-.67-.67-.9-.83a3 3 0 0 0-3.42 0c-.22.16-.44.38-.89.83-.15.15-.22.22-.27.3a1 1 0 0 0 0 1.14l.27.3 6.67 6.66c.15.15.22.22.3.27a1 1 0 0 0 1.14 0l.3-.27c.44-.45.66-.67.82-.9a3 3 0 0 0 0-3.42c-.16-.22-.38-.44-.83-.89z'
        fill='currentColor'
      />
      <rect
        width='17.39'
        height='12.56'
        rx='3'
        transform='scale(1 -1)rotate(45 32.41 1.13)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path d='m9.9 5.21 8.89 8.88' stroke='currentColor' strokeWidth={strokeWidth} />
    </svg>
  )
}
