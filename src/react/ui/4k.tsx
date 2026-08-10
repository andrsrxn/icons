import type { Icon } from './types'

export const Icon4k: Icon = ({
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
      data-slot='4k'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M3.54 4.48h16.92M3.54 19.52h16.92M9.3 13.45H4.57a.2.2 0 0 1-.16-.32l4.53-5.7a.2.2 0 0 1 .36.12zm0 0h1.22m-1.22 0v3.22m3.81-9.4v4.7m0 0v4.7m0-4.7 4.94-4.5m-4.94 4.5 4.93 4.58'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
