import type { Icon } from './types'

export const IconAlpha: Icon = ({
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
      data-slot='alpha'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <ellipse opacity='.2' cx='9.65' cy='12' rx='5.65' ry='8' fill='currentColor' />
      <path
        d='M15.86 4c0 6.28-.36 16-6.25 16-3.74 0-5.74-4.1-5.74-8s2-8 5.74-8c8.87 0 3.8 16 8.6 16 1.68 0 1.92-1.51 1.92-2.76'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
