import type { Icon } from './types'

export const IconAccessibility: Icon = ({
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
      data-slot='ui-icon-accessibility'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='m6.2 8.86 3.27 1.3c1.23.48 1.84.72 2.18 1.23s.35 1.17.35 2.49v1.46c0 .69 0 1.03-.11 1.35s-.33.6-.75 1.13l-3 3.8M17.8 8.86l-3.27 1.3c-1.23.48-1.84.72-2.18 1.23S12 12.56 12 13.88v1.46c0 .69 0 1.03.11 1.35s.33.6.75 1.13l3 3.8'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <circle
        opacity='.2'
        cx='12'
        cy='5.17'
        r='2.67'
        transform='rotate(90 12 5.17)'
        fill='currentColor'
      />
      <circle
        cx='12'
        cy='5.17'
        r='2.67'
        transform='rotate(90 12 5.17)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
