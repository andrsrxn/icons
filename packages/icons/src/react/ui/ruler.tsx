import type { Icon } from './types'

export const IconRuler: Icon = ({
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
      data-slot='ui-icon-ruler'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect
        opacity='.2'
        width='19.52'
        height='9.3'
        rx='2'
        transform='scale(1 -1)rotate(45 30.98 -.97)'
        fill='currentColor'
      />
      <rect
        width='19.52'
        height='9.3'
        rx='2'
        transform='scale(1 -1)rotate(45 30.98 -.97)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='m8.98 8.54 2.61 2.62m-5.87.54 2.66 2.67m3.76-9.09 2.66 2.67'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
