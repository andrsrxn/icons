import type { Icon } from './types'

export const IconSlidesCenter: Icon = ({
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
      data-slot='ui-icon-slides-center'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect
        opacity='.2'
        width='15.4'
        height='12.52'
        rx='3'
        transform='matrix(0 -1 -1 0 18.26 19.7)'
        fill='currentColor'
      />
      <rect
        width='15.4'
        height='12.52'
        rx='3'
        transform='matrix(0 -1 -1 0 18.26 19.7)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path d='M2.6 18.08V5.92m18.8 12.16V5.92' stroke='currentColor' strokeWidth={strokeWidth} />
    </svg>
  )
}
