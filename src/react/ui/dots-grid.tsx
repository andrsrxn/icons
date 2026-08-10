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
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
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
        d='M6.22 12a1.2 1.2 0 1 1-2.41 0 1.2 1.2 0 0 1 2.4 0m6.99 0a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0m7 0a1.2 1.2 0 1 1-2.42 0 1.2 1.2 0 0 1 2.41 0M6.22 5.27a1.2 1.2 0 1 1-2.41 0 1.2 1.2 0 0 1 2.4 0m6.99 0a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0m7 0a1.2 1.2 0 1 1-2.42 0 1.2 1.2 0 0 1 2.41 0M6.22 18.73a1.2 1.2 0 1 1-2.41 0 1.2 1.2 0 0 1 2.4 0m6.99 0a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0m7 0a1.2 1.2 0 1 1-2.42 0 1.2 1.2 0 0 1 2.41 0'
        fill='currentColor'
      />
      <path
        d='M6.22 12a1.2 1.2 0 1 1-2.41 0 1.2 1.2 0 0 1 2.4 0Zm6.98 0a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Zm7 0a1.2 1.2 0 1 1-2.42 0 1.2 1.2 0 0 1 2.41 0ZM6.22 5.27a1.2 1.2 0 1 1-2.41 0 1.2 1.2 0 0 1 2.4 0Zm6.98 0a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Zm7 0a1.2 1.2 0 1 1-2.42 0 1.2 1.2 0 0 1 2.41 0ZM6.22 18.73a1.2 1.2 0 1 1-2.41 0 1.2 1.2 0 0 1 2.4 0Zm6.98 0a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Zm7 0a1.2 1.2 0 1 1-2.42 0 1.2 1.2 0 0 1 2.41 0Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
