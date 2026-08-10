import type { Icon } from './types'

export const IconBackground: Icon = ({
  size = 24,
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
      data-slot='background'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect
        opacity='.2'
        x='3.75'
        y='3.75'
        width='16.51'
        height='16.51'
        rx='2'
        fill='currentColor'
      />
      <rect
        x='3.75'
        y='3.75'
        width='16.51'
        height='16.51'
        rx='2'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <path
        d='m4.04 14.7 5.35 5.35M3.92 9.29 14.8 20.16M4.52 4.6l14.96 14.97M9.1 3.9l11.08 11.08M14.44 3.95l5.7 5.7'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
