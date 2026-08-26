import type { Icon } from './types'

export const IconScale: Icon = ({
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
      data-slot='ui-icon-scale'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect
        opacity='.2'
        width='9.69'
        height='9.69'
        rx='2'
        transform='matrix(0 -1 -1 0 12.3 21.34)'
        fill='currentColor'
      />
      <path
        d='M2.67 9.04v-.46c0-2.82 0-4.24.88-5.12.87-.88 2.29-.88 5.12-.88h6.66c2.83 0 4.25 0 5.12.88s.88 2.3.88 5.12v6.76c0 2.83 0 4.24-.88 5.12-.87.88-2.29.88-5.12.88h-.41'
        stroke='currentColor'
        strokeWidth={strokeWidth}
        strokeDasharray='3 3'
      />
      <rect
        width='9.69'
        height='9.69'
        rx='2'
        transform='matrix(0 -1 -1 0 12.3 21.34)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='m15.43 8.58-3.56 3.55m.37-4.7h.33c1.89 0 2.83 0 3.42.58.58.59.58 1.53.58 3.42v.33'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
