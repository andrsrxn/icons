import type { Icon } from './types'

export const IconReorderDown: Icon = ({
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
      data-slot='ui-icon-reorder-down'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M9.32 18.02H2.69m10.32-6H2.7m12.87-6H2.7M13.61 18.1h.99c2.82 0 4.24 0 5.12-.88s.88-2.3.88-5.12V5.4'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M14.68 20.77c-1.19-1.18-1.78-1.77-1.84-2.5v-.34c.06-.73.65-1.32 1.84-2.5'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
