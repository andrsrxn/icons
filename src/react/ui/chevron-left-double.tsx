import type { Icon } from './types'

export const IconChevronLeftDouble: Icon = ({
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
      data-slot='chevron-left-double'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='m11.474 19.577-4.936-4.665c-1.441-1.363-2.162-2.044-2.162-2.905 0-.86.72-1.543 2.16-2.906l4.938-4.678m8 15.154-4.936-4.665c-1.441-1.363-2.162-2.044-2.162-2.905 0-.86.72-1.543 2.16-2.906l4.938-4.678'
      />
    </svg>
  )
}
