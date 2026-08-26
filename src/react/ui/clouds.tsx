import type { Icon } from './types'

export const IconClouds: Icon = ({
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
      data-slot='ui-icon-clouds'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='m13.18 11.97 2.09.23 2.99 3.35 3.17-1.65v-3.2l-2.37-1.77-1.24.9-.67-2.62-2.83-1.71-2.38 1.07-1.07 2.12z'
        fill='currentColor'
      />
      <path
        d='M5.21 17.97a3 3 0 0 1-2.2-.96 3.3 3.3 0 0 1-.87-2.26 3.15 3.15 0 0 1 3.07-3.21c1 0 1.9.5 2.46 1.28m6.83 5.15H5.1m1.05-6.37a3.62 3.62 0 0 1 6.64-.84c.6 1.03.58 2.07.44 2.77'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M13.33 12.22a2.5 2.5 0 0 1 2.4.08 3.04 3.04 0 0 1 1.11 4.15c-.5.87-1.26 1.52-2.26 1.52m-4.19-9.39a3.62 3.62 0 0 1 6.63-.84c.6 1.03.45 1.72.34 2.2m.2-.74a2.5 2.5 0 0 1 2.4.08 3.04 3.04 0 0 1 1.11 4.15c-.5.86-1.26 1.52-2.26 1.52m-.01 0h-1.36'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
