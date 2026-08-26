import type { Icon } from './types'

export const IconBall: Icon = ({
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
      data-slot='ui-icon-ball'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='m9.54 5.53 4.04-2.87 5.08 2.31 2.79 5.92-5.01 2.54-8.25-.8z'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M4.63 11.2 3.12 8.9l-.5 3.84 3.17 6.82 6.94 1.88-2.95-2.78-1.59-5.92z'
        fill='currentColor'
        stroke='currentColor'
      />
      <circle cx='12' cy='12' r='9.43' stroke='currentColor' strokeWidth={strokeWidth} />
      <path
        d='M13.88 21.2c-3.14 0-5.68-4.1-5.68-9.18s2.54-9.18 5.68-9.18'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M21.26 10.81c-.25 2.01-4.48 3.16-9.46 2.55-4.97-.6-8.8-2.72-8.56-4.74'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
