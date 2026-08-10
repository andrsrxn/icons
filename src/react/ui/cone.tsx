import type { Icon } from './types'

export const IconCone: Icon = ({
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
      data-slot='cone'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <ellipse opacity='.2' cx='12' cy='17.79' rx='5.44' ry='2.63' fill='currentColor' />
      <path
        d='m17.58 17.33-1.75-5.8c-1.57-5.16-2.35-7.74-3.84-7.74s-2.26 2.58-3.82 7.74l-1.75 5.8'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
      <ellipse cx='12' cy='17.79' rx='5.65' ry='2.63' stroke='currentColor' strokeWidth='1.5' />
    </svg>
  )
}
