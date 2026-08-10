import type { Icon } from './types'

export const IconEllipse: Icon = ({
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
      data-slot='ellipse'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <ellipse opacity='.2' cx='12' cy='12' rx='8.5' ry='5.55' fill='currentColor' />
      <ellipse cx='12' cy='12' rx='8.5' ry='5.55' stroke='currentColor' strokeWidth='1.5' />
    </svg>
  )
}
