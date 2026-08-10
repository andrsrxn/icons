import type { Icon } from './types'

export const IconDotsHorizontal: Icon = ({
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
      data-slot='dots-horizontal'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M6 12a1.25 1.25 0 1 1-2.5 0A1.25 1.25 0 0 1 6 12m7.25 0a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0m7.25 0a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0'
        fill='currentColor'
      />
      <path
        d='M6 12a1.25 1.25 0 1 1-2.5 0A1.25 1.25 0 0 1 6 12Zm7.25 0a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm7.25 0a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
