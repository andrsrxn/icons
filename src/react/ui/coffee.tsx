import type { Icon } from './types'

export const IconCoffee: Icon = ({
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
      data-slot='ui-icon-coffee'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M2.7 10.88c0-.94 0-1.41.3-1.7.29-.3.76-.3 1.7-.3h10.48c.94 0 1.41 0 1.7.3.3.29.3.76.3 1.7v4.24c0 2.83 0 4.24-.88 5.12s-2.3.88-5.12.88H8.7c-2.82 0-4.24 0-5.12-.88s-.88-2.3-.88-5.12z'
        fill='currentColor'
      />
      <path
        d='M2.7 10.88c0-.94 0-1.41.3-1.7.29-.3.76-.3 1.7-.3h10.48c.94 0 1.41 0 1.7.3.3.29.3.76.3 1.7v4.24c0 2.83 0 4.24-.88 5.12s-2.3.88-5.12.88H8.7c-2.82 0-4.24 0-5.12-.88s-.88-2.3-.88-5.12zm14.48 5.51h1.16a3 3 0 0 0 2.96-2.96v-.2a3 3 0 0 0-2.96-2.95h-1.16M5.54 2.88v3m4.4-3v3m4.4-3v3'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
