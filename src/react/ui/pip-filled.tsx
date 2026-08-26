import type { Icon } from './types'

export const IconPipFilled: Icon = ({
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
      data-slot='ui-icon-pip-filled'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M2.53 6.4c0-.94 0-1.41.3-1.7.29-.3.76-.3 1.7-.3h14.94c.94 0 1.41 0 1.7.3.3.29.3.76.3 1.7v4.5c0 .93 0 1.4-.3 1.7s-.76.3-1.7.3h-4.6c-.94 0-1.41 0-1.7.28-.3.3-.3.77-.3 1.71v2.7c0 .95 0 1.42-.29 1.71-.3.3-.76.3-1.7.3H4.52c-.94 0-1.41 0-1.7-.3-.3-.29-.3-.76-.3-1.7z'
        fill='currentColor'
      />
      <rect
        x='2.53'
        y='4.4'
        width='18.93'
        height='15.19'
        rx='3'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M21.47 14.71c0-.25 0-.37-.02-.48a2 2 0 0 0-1.77-1.78h-3.55c-1.48 0-2.22 0-2.74.36a2 2 0 0 0-.47.47c-.37.52-.37 1.26-.37 2.74s0 2.22.37 2.74a2 2 0 0 0 .47.46c.52.38 1.26.38 2.74.38h.52'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
