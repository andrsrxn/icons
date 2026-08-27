import type { Icon } from './types'

export const IconWeight: Icon = ({
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
      data-slot='ui-icon-weight'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M5.36 12c.44-1.3.66-1.96 1.19-2.34s1.2-.37 2.6-.37h5.95c1.42 0 2.13 0 2.66.39.52.39.74 1.06 1.16 2.41l1.25 3.98c.75 2.38 1.12 3.57.52 4.39s-1.84.81-4.34.81H7.8c-2.55 0-3.83 0-4.42-.83-.6-.84-.2-2.05.63-4.46z'
        fill='currentColor'
      />
      <path
        d='M4.51 13.34c.6-2.08.91-3.12 1.71-3.72s1.88-.6 4.05-.6h3.48c2.18 0 3.26 0 4.06.6s1.1 1.65 1.7 3.74l.08.25c1.01 3.51 1.52 5.27.62 6.47s-2.73 1.2-6.38 1.2H10.2c-3.67 0-5.5 0-6.4-1.2s-.39-2.97.64-6.49z'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <circle cx='12' cy='5.71' r='3.2' stroke='currentColor' strokeWidth={strokeWidth} />
      <path
        d='M8.4 15.95s.77-.8 2-.8 2.39.8 3.6.8 1.6-.8 1.6-.8'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
