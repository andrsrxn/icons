import type { Icon } from './types'

export const IconGripHorizontal: Icon = ({
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
      data-slot='grip-horizontal'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M5.36 8.69a.82.82 0 1 1-1.64 0 .82.82 0 0 1 1.64 0m0 6.62a.82.82 0 1 1-1.64 0 .82.82 0 0 1 1.64 0m7.46-6.62a.82.82 0 1 1-1.64 0 .82.82 0 0 1 1.64 0m0 6.62a.82.82 0 1 1-1.64 0 .82.82 0 0 1 1.64 0m7.46-6.62a.82.82 0 1 1-1.64 0 .82.82 0 0 1 1.64 0m0 6.62a.82.82 0 1 1-1.64 0 .82.82 0 0 1 1.64 0'
        fill='currentColor'
      />
      <path
        d='M5.36 8.69a.82.82 0 1 1-1.64 0 .82.82 0 0 1 1.64 0Zm0 6.62a.82.82 0 1 1-1.64 0 .82.82 0 0 1 1.64 0Zm7.46-6.62a.82.82 0 1 1-1.64 0 .82.82 0 0 1 1.64 0Zm0 6.62a.82.82 0 1 1-1.64 0 .82.82 0 0 1 1.64 0Zm7.46-6.62a.82.82 0 1 1-1.64 0 .82.82 0 0 1 1.64 0Zm0 6.62a.82.82 0 1 1-1.64 0 .82.82 0 0 1 1.64 0Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
