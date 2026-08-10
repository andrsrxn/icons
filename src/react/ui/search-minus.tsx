import type { Icon } from './types'

export const IconSearchMinus: Icon = ({
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
      data-slot='search-minus'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M17.34 10.55a6.87 6.87 0 1 1-13.75 0 6.87 6.87 0 0 1 13.75 0'
        fill='currentColor'
      />
      <path
        d='M7.17 10.55h6.59m1.62 4.8a6.87 6.87 0 1 0-9.82-9.62 6.87 6.87 0 0 0 9.82 9.62Zm0 0 4.9 4.9'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
