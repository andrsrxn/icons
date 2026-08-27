import type { Icon } from './types'

export const IconCircleHalfHorizontal: Icon = ({
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
      data-slot='ui-icon-circle-half-horizontal'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path opacity='.2' d='M21.43 12a9.43 9.43 0 0 1-18.86 0z' fill='currentColor' />
      <circle cx='12' cy='12' r='9.43' stroke='currentColor' strokeWidth={strokeWidth} />
      <path d='M2.79 12H21.2' stroke='currentColor' strokeWidth={strokeWidth} />
    </svg>
  )
}
