import type { Icon } from './types'

export const IconDotsGrid: Icon = ({
  size = 24,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='dots-grid'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        fill='currentColor'
        d='M6.219 12a1.207 1.207 0 1 1-2.413 0 1.207 1.207 0 0 1 2.413 0Zm6.988 0a1.207 1.207 0 1 1-2.414 0 1.207 1.207 0 0 1 2.414 0Zm6.988 0a1.207 1.207 0 1 1-2.414 0 1.207 1.207 0 0 1 2.414 0ZM6.219 5.267a1.207 1.207 0 1 1-2.413 0 1.207 1.207 0 0 1 2.413 0Zm6.988 0a1.207 1.207 0 1 1-2.414 0 1.207 1.207 0 0 1 2.414 0Zm6.988 0a1.207 1.207 0 1 1-2.414 0 1.207 1.207 0 0 1 2.414 0ZM6.219 18.733a1.207 1.207 0 1 1-2.413 0 1.207 1.207 0 0 1 2.413 0Zm6.988 0a1.207 1.207 0 1 1-2.414 0 1.207 1.207 0 0 1 2.414 0Zm6.988 0a1.207 1.207 0 1 1-2.414 0 1.207 1.207 0 0 1 2.414 0Z'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M6.219 12a1.207 1.207 0 1 1-2.413 0 1.207 1.207 0 0 1 2.413 0Zm6.988 0a1.207 1.207 0 1 1-2.414 0 1.207 1.207 0 0 1 2.414 0Zm6.988 0a1.207 1.207 0 1 1-2.414 0 1.207 1.207 0 0 1 2.414 0ZM6.219 5.267a1.207 1.207 0 1 1-2.413 0 1.207 1.207 0 0 1 2.413 0Zm6.988 0a1.207 1.207 0 1 1-2.414 0 1.207 1.207 0 0 1 2.414 0Zm6.988 0a1.207 1.207 0 1 1-2.414 0 1.207 1.207 0 0 1 2.414 0ZM6.219 18.733a1.207 1.207 0 1 1-2.413 0 1.207 1.207 0 0 1 2.413 0Zm6.988 0a1.207 1.207 0 1 1-2.414 0 1.207 1.207 0 0 1 2.414 0Zm6.988 0a1.207 1.207 0 1 1-2.414 0 1.207 1.207 0 0 1 2.414 0Z'
      />
    </svg>
  )
}
