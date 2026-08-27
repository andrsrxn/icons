import type { Icon } from './types'

export const IconRefresh: Icon = ({
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
      data-slot='ui-icon-refresh'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M19.82 8.3q-2.6-4.87-8.23-4.87-5.61 0-8.23 4.88m.82 7.39q2.6 4.87 8.23 4.87 5.61 0 8.23-4.88'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M21.12 4.41V5.6c0 1.88 0 2.83-.58 3.41-.59.6-1.53.6-3.42.6h-1.19M2.88 19.59V18.4c0-1.88 0-2.83.58-3.41.59-.6 1.53-.6 3.42-.6h1.19'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
