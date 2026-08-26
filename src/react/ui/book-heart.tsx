import type { Icon } from './types'

export const IconBookHeart: Icon = ({
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
      data-slot='ui-icon-book-heart'
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
        d='M20.17 6.67c0-1.89 0-2.83-.59-3.42s-1.53-.58-3.41-.58H7.83c-1.88 0-2.82 0-3.41.58-.59.59-.59 1.53-.59 3.42v7.24c0 1.88 0 2.82.59 3.4.59.6 1.53.6 3.41.6h8.34c1.88 0 2.82 0 3.41-.6.59-.58.59-1.52.59-3.4zm-9.91.92h3.48c1.12 0 1.95 1.27 1.6 2.6-.24.88-1.23 1.65-2.13 2.35-.67.52-1.75.52-2.42 0-.9-.7-1.89-1.47-2.12-2.34-.36-1.34.47-2.61 1.59-2.61'
        fill='currentColor'
      />
      <path
        d='M3.83 8.67c0-2.83 0-4.25.88-5.12s2.3-.88 5.12-.88h4.34c2.82 0 4.24 0 5.12.88.88.87.88 2.29.88 5.12v3.24c0 2.82 0 4.24-.88 5.12s-2.3.88-5.12.88H3.83z'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M3.83 17.9c0 1.34 0 2 .31 2.5a2 2 0 0 0 .63.63c.49.3 1.16.3 2.5.3h8.04c1.34 0 2 0 2.5-.3a2 2 0 0 0 .62-.63c.3-.5.3-1.16.3-2.5M13.94 7.25c-.99 0-1.7.74-1.94 1.11a2.5 2.5 0 0 0-1.94-1.11c-1.24 0-2.17 1.41-1.77 2.9.4 1.5 2.77 2.71 3.71 3.78.94-1.07 3.31-2.28 3.71-3.78.4-1.49-.53-2.9-1.77-2.9'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
