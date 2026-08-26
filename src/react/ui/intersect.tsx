import type { Icon } from './types'

export const IconIntersect: Icon = ({
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
      data-slot='ui-icon-intersect'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M2.74 8.7c0-2.82 0-4.24.87-5.12.88-.88 2.3-.88 5.13-.88h4.01a3 3 0 0 1 2.97 2.97v.17a3 3 0 0 1-2.97 2.96h-.49c-.38 0-.57 0-.74.02a3 3 0 0 0-2.58 2.26c-.04.16-.06.35-.11.72l-.18 1.3a2.97 2.97 0 0 1-5.91-.38zm18.52 6.42c0 2.83 0 4.25-.87 5.13-.88.87-2.3.87-5.13.87h-3.99a2.96 2.96 0 0 1-.23-5.9l.83-.06c.53-.04.79-.06 1.01-.12a3 3 0 0 0 2.27-2.36c.04-.23.05-.5.06-1.02l.02-.6v-.03a3 3 0 0 1 2.99-2.89h.06a3 3 0 0 1 2.98 2.99z'
        fill='currentColor'
      />
      <rect
        x='2.74'
        y='2.7'
        width='12.98'
        height='12.98'
        rx='3'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <rect
        x='8.28'
        y='8.31'
        width='12.98'
        height='12.98'
        rx='3'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
