import type { Icon } from './types'

export const IconBicycle: Icon = ({
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
      data-slot='ui-icon-bicycle'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <circle opacity='.2' cx='5.92' cy='15.67' r='3.38' fill='currentColor' />
      <circle opacity='.2' cx='18.08' cy='15.67' r='3.38' fill='currentColor' />
      <circle cx='5.92' cy='15.67' r='3.38' stroke='currentColor' strokeWidth={strokeWidth} />
      <circle cx='18.08' cy='15.67' r='3.38' stroke='currentColor' strokeWidth={strokeWidth} />
      <path
        d='M6.3 15.67h2.77c1.19 0 1.78 0 2.25-.3.48-.28.76-.8 1.3-1.85l3.14-6.04m-3.54 4.81-4-4.01m9.86 7.39L15.33 5.33m-4.39 2.95H6.31m12.88-2.19-3.84-.76'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
