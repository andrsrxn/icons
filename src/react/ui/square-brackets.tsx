import type { Icon } from './types'

export const IconSquareBrackets: Icon = ({
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
      data-slot='square-brackets'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M8.9 3.75h-.12c-1.89 0-2.83 0-3.41.58-.59.6-.59 1.53-.59 3.42v8.5c0 1.89 0 2.83.59 3.42.58.58 1.52.58 3.41.58h.13m6.18-16.5h.13c1.89 0 2.83 0 3.41.58.59.6.59 1.53.59 3.42v8.5c0 1.89 0 2.83-.59 3.42-.58.58-1.52.58-3.41.58h-.13'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
