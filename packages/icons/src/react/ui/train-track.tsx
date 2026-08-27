import type { Icon } from './types'

export const IconTrainTrack: Icon = ({
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
      data-slot='ui-icon-train-track'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect
        opacity='.2'
        x='6.12'
        y='4.72'
        width='11.76'
        height='14.28'
        rx='2'
        fill='currentColor'
      />
      <path
        d='M6.4 21.52V2.48m11.2 19.04V2.48m2.24 2.24H4.16m15.68 4.85H4.16m15.68 4.86H4.16m15.68 4.85H4.16'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
