import type { Icon } from './types'

export const IconArtboard: Icon = ({
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
      data-slot='ui-icon-artboard'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect
        opacity='.2'
        x='4.38'
        y='4.38'
        width='15.24'
        height='15.24'
        rx='2'
        fill='currentColor'
      />
      <path
        d='M19.62 2.32v19.36M2.32 4.38h19.36M2.32 19.62h19.36M4.38 2.32v19.36'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
