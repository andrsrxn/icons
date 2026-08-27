import type { Icon } from './types'

export const IconMale: Icon = ({
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
      data-slot='ui-icon-male'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <circle opacity='.2' cx='9.27' cy='14.73' r='6.67' fill='currentColor' />
      <circle cx='9.27' cy='14.73' r='6.67' stroke='currentColor' strokeWidth={strokeWidth} />
      <path
        d='m14.02 9.98 6.36-6.35m.95 6.15v-3.1c0-1.9 0-2.84-.58-3.42s-1.53-.59-3.41-.59h-3.12'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
