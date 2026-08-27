import type { Icon } from './types'

export const IconCone: Icon = ({
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
      data-slot='ui-icon-cone'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <ellipse opacity='.2' cx='12' cy='18.61' rx='5.99' ry='2.89' fill='currentColor' />
      <path
        d='m18.15 18.1-2.32-7.65c-1.57-5.17-2.35-7.75-3.84-7.75s-2.26 2.6-3.82 7.75L5.85 18.1'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <ellipse
        cx='12'
        cy='18.53'
        rx='6.22'
        ry='2.89'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
