import type { Icon } from './types'

export const IconPhone: Icon = ({
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
      data-slot='phone'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M10.14 7.85 8.02 4.4c-.18-.3-.47-.52-.8-.47-.53.07-1.4.4-2.58 1.58-1.32 1.32-1.9 5.59 3.3 10.78 5.18 5.2 9.8 3.9 10.86 2.84a5 5 0 0 0 1.43-2.15c.08-.34-.14-.63-.44-.81l-3.47-2.12a1.5 1.5 0 0 0-1.67.07l-1.04.77a1.5 1.5 0 0 1-1.96-.14L9.42 12.5a1.5 1.5 0 0 1-.13-1.97l.76-1c.37-.48.4-1.16.09-1.69'
        fill='currentColor'
      />
      <path
        d='M10.14 7.85 8.02 4.4c-.18-.3-.47-.52-.8-.47-.53.07-1.4.4-2.58 1.58-1.32 1.32-1.9 5.59 3.3 10.78 5.18 5.2 9.8 3.9 10.86 2.84a5 5 0 0 0 1.43-2.15c.08-.34-.14-.63-.44-.81l-3.47-2.12a1.5 1.5 0 0 0-1.67.07l-1.04.77a1.5 1.5 0 0 1-1.96-.14L9.42 12.5a1.5 1.5 0 0 1-.13-1.97l.76-1c.37-.48.4-1.16.09-1.69Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
