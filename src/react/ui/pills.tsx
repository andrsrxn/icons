import type { Icon } from './types'

export const IconPills: Icon = ({
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
      data-slot='pills'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect
        opacity='.2'
        width='8.57'
        height='9.99'
        rx='2'
        transform='matrix(.72005 .69393 -.69708 .71699 9.25 8.68)'
        fill='currentColor'
      />
      <rect
        width='8.57'
        height='19.84'
        rx='4.29'
        transform='matrix(.72005 .69393 -.69708 .71699 15.83 1.91)'
        stroke='currentColor'
        strokeWidth='1.5'
      />
      <path
        d='M8.95 10.02a.75.75 0 0 1 0-1.06c.29-.3.77-.3 1.06 0l-.53.53zm6.1 3.96c.3.3.3.77 0 1.06-.29.3-.77.3-1.06 0l.53-.53zm-5.57-4.5.53-.52 5.04 5.02-.53.53-.53.53-5.04-5.02z'
        fill='currentColor'
      />
    </svg>
  )
}
