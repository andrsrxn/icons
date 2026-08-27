import type { Icon } from './types'

export const IconGridMinus: Icon = ({
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
      data-slot='ui-icon-grid-minus'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M17 3c1.89 0 2.83 0 3.41.59C21 4.17 21 5.1 21 7v1c0 1.89 0 2.83-.59 3.41-.58.59-1.52.59-3.41.59h-1c-1.89 0-2.83 0-3.41.59C12 13.17 12 14.1 12 16v1c0 1.89 0 2.83-.59 3.41C10.83 21 9.9 21 8 21H7c-1.89 0-2.83 0-3.41-.59C3 19.83 3 18.9 3 17V7c0-1.89 0-2.83.59-3.41C4.17 3 5.1 3 7 3z'
        fill='currentColor'
      />
      <path
        d='M12 21.24H8.76c-2.83 0-4.24 0-5.12-.88s-.88-2.3-.88-5.12V8.76c0-2.83 0-4.24.88-5.12s2.3-.88 5.12-.88h6.48c2.83 0 4.24 0 5.12.88s.88 2.3.88 5.12V12M21 12H3m9-9v18.24m3.15-3.43h6.35'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
