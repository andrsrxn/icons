import type { Icon } from './types'

export const IconFahrenheit: Icon = ({
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
      data-slot='ui-icon-fahrenheit'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <circle opacity='.2' cx='5.77' cy='6.38' r='2.34' fill='currentColor' />
      <path
        d='M11.81 20.55v-10.5c0-2.83 0-4.25.88-5.13s2.3-.88 5.12-.88h2.76m-2.23 8.1H11.8'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <circle cx='5.77' cy='6.38' r='2.34' stroke='currentColor' strokeWidth={strokeWidth} />
    </svg>
  )
}
