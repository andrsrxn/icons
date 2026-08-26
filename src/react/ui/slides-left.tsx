import type { Icon } from './types'

export const IconSlidesLeft: Icon = ({
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
      data-slot='ui-icon-slides-left'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect
        opacity='.2'
        x='2.61'
        y='19.7'
        width='15.4'
        height='12.05'
        rx='3'
        transform='rotate(-90 2.6 19.7)'
        fill='currentColor'
      />
      <rect
        x='2.61'
        y='19.7'
        width='15.4'
        height='12.05'
        rx='3'
        transform='rotate(-90 2.6 19.7)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M21.34 18.08V5.92m-3.56 12.16V5.92'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
