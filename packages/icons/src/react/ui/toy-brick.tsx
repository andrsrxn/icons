import type { Icon } from './types'

export const IconToyBrick: Icon = ({
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
      data-slot='ui-icon-toy-brick'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect opacity='.2' x='2.43' y='9.3' width='19.14' height='9.71' rx='2' fill='currentColor' />
      <path
        d='M2.76 14.15c0-1.73 0-2.6.34-3.25a3 3 0 0 1 1.26-1.26C5 9.3 5.88 9.3 7.6 9.3h8.78c1.73 0 2.6 0 3.25.34a3 3 0 0 1 1.26 1.26c.34.65.34 1.52.34 3.25s0 2.6-.34 3.25a3 3 0 0 1-1.26 1.26C19 19 18.12 19 16.4 19H7.61c-1.73 0-2.6 0-3.25-.34A3 3 0 0 1 3.1 17.4c-.34-.66-.34-1.52-.34-3.25m7.39-4.85V7c0-.94 0-1.42-.29-1.7-.3-.3-.76-.3-1.7-.3H7.3c-.94 0-1.41 0-1.7.3-.3.28-.3.76-.3 1.7v2.3m13.42 0V7c0-.94 0-1.42-.3-1.7-.29-.3-.76-.3-1.7-.3h-.85c-.94 0-1.41 0-1.7.3-.3.28-.3.76-.3 1.7v2.3'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
