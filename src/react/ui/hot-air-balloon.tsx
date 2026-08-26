import type { Icon } from './types'

export const IconHotAirBalloon: Icon = ({
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
      data-slot='ui-icon-hot-air-balloon'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M9.55 9.67c0 3.49 1.52 7.55 1.52 7.55-2.96 0-5.39-4.06-5.39-7.55s3.14-7.13 5.39-7.13c0 0-1.52 3.64-1.52 7.13m4.71 0c0 3.49-1.52 7.55-1.52 7.55 2.96 0 5.39-4.06 5.39-7.55s-3.14-7.13-5.39-7.13c0 0 1.52 3.64 1.52 7.13'
        fill='currentColor'
      />
      <path
        d='M18.38 9.67c0 3.49-2.86 7.96-6.38 7.96s-6.38-4.47-6.38-7.96S8.48 2.56 12 2.56s6.38 3.62 6.38 7.11'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <rect
        x='8.61'
        y='17.75'
        width='6.77'
        height='3.59'
        rx='1'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <ellipse
        cx='12'
        cy='9.89'
        rx='2.28'
        ry='7.33'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
