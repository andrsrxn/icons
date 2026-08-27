import type { Icon } from './types'

export const IconLightbulb: Icon = ({
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
      data-slot='ui-icon-lightbulb'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M17.4 12.21a5.52 5.52 0 1 1-11.05 0 5.52 5.52 0 0 1 11.04 0'
        fill='currentColor'
      />
      <path
        d='M12 4V2.25m8 8.87h1.75m-19.5 0H4m1.82-5.3L4.9 4.45m13.24 1.37.96-1.37'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <circle cx='11.87' cy='12.12' r='5.52' stroke='currentColor' strokeWidth={strokeWidth} />
      <path
        d='M9.31 17.3v1.6c0 .52 0 .78.05 1a2 2 0 0 0 1.52 1.51c.21.05.47.05 1 .05.52 0 .78 0 1-.05a2 2 0 0 0 1.5-1.51c.05-.22.05-.48.05-1v-1.6'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
