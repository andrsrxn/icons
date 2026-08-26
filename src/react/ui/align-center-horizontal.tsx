import type { Icon } from './types'

export const IconAlignCenterHorizontal: Icon = ({
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
      data-slot='ui-icon-align-center-horizontal'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect opacity='.2' x='4.58' y='3.8' width='5.8' height='16.4' rx='2' fill='currentColor' />
      <rect opacity='.2' x='13.62' y='5.79' width='5.8' height='12.42' rx='2' fill='currentColor' />
      <rect
        x='4.58'
        y='3.8'
        width='5.8'
        height='16.4'
        rx='2'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <rect
        x='13.62'
        y='5.79'
        width='5.8'
        height='12.42'
        rx='2'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M2 12h2.58m14.85 0H22m-11.29 0h2.58'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
