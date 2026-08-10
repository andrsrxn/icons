import type { Icon } from './types'

export const IconFahrenheit: Icon = ({
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
      data-slot='fahrenheit'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <circle opacity='.2' cx='6.18' cy='6.78' r='2.18' fill='currentColor' />
      <path
        d='M11.82 20V6.6a2 2 0 0 1 2-2H20'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path d='M17.91 12.15h-6.09' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' />
      <circle cx='6.18' cy='6.78' r='2.18' stroke='currentColor' strokeWidth='1.5' />
    </svg>
  )
}
