import type { Icon } from './types'

export const IconUnlink: Icon = ({
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
      data-slot='ui-icon-unlink'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect
        opacity='.2'
        x='16.46'
        y='.7'
        width='9.67'
        height='22.29'
        rx='4.83'
        transform='rotate(45 16.46 .7)'
        fill='currentColor'
      />
      <path
        d='m9.36 14.64 5.83-5.83M6.86 10.3l-2.83 2.83a4.83 4.83 0 0 0 6.84 6.84l2.76-2.76M8 5.21l-.48-1.8m8.99 14.79L17 20M5.8 7.41 4 6.93M18.72 16l1.8.48M10.31 6.85l2.82-2.82a4.83 4.83 0 0 1 6.84 6.84l-2.82 2.82'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
