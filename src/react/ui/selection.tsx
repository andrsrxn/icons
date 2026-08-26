import type { Icon } from './types'

export const IconSelection: Icon = ({
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
      data-slot='ui-icon-selection'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M15.3 2.7c2.83 0 4.25 0 5.13.87.88.88.88 2.3.88 5.12v6.62c0 2.82 0 4.24-.88 5.12s-2.3.88-5.12.88H8.69c-2.82 0-4.24 0-5.12-.88s-.88-2.3-.88-5.12V8.69c0-2.82 0-4.24.88-5.12s2.3-.88 5.12-.88h6.62'
        fill='currentColor'
      />
      <path
        d='M8.7 2.7h6.6c2.83 0 4.25 0 5.13.87.88.88.88 2.3.88 5.12v6.62c0 2.82 0 4.24-.88 5.12s-2.3.88-5.12.88H8.69c-2.82 0-4.24 0-5.12-.88s-.88-2.3-.88-5.12V8.69c0-2.82 0-4.24.88-5.12s2.3-.88 5.12-.88'
        stroke='currentColor'
        strokeWidth={strokeWidth}
        strokeDasharray='4 4'
      />
    </svg>
  )
}
