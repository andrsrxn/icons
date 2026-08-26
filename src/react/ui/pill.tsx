import type { Icon } from './types'

export const IconPill: Icon = ({
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
      data-slot='ui-icon-pill'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect
        opacity='.2'
        width='9.74'
        height='11.35'
        rx='2'
        transform='matrix(.72005 .69393 -.69708 .71699 8.88 8.22)'
        fill='currentColor'
      />
      <rect
        width='9.74'
        height='22.54'
        rx='4.87'
        transform='matrix(.72005 .69393 -.69708 .71699 16.35 .54)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path d='M15.32 15.32 8.68 8.68' stroke='currentColor' strokeWidth={strokeWidth} />
    </svg>
  )
}
