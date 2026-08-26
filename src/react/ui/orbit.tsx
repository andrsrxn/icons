import type { Icon } from './types'

export const IconOrbit: Icon = ({
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
      data-slot='ui-icon-orbit'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <circle opacity='.2' cx='12' cy='12' r='4.68' fill='currentColor' />
      <circle opacity='.2' cx='18.62' cy='5.3' r='1.78' fill='currentColor' />
      <circle cx='12' cy='12' r='4.68' stroke='currentColor' strokeWidth={strokeWidth} />
      <circle cx='18.62' cy='5.3' r='1.78' stroke='currentColor' strokeWidth={strokeWidth} />
      <path
        d='M19.88 6.86A9.4 9.4 0 1 1 12 2.59c1.58 0 3.4.38 4.97 1.5'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
