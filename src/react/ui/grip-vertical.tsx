import type { Icon } from './types'

export const IconGripVertical: Icon = ({
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
      data-slot='grip-vertical'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M15.31 5.36a.82.82 0 1 1 0-1.64.82.82 0 0 1 0 1.64m-6.62 0a.82.82 0 1 1 0-1.64.82.82 0 0 1 0 1.64m6.62 7.46a.82.82 0 1 1 0-1.64.82.82 0 0 1 0 1.64m-6.62 0a.82.82 0 1 1 0-1.64.82.82 0 0 1 0 1.64m6.62 7.46a.82.82 0 1 1 0-1.64.82.82 0 0 1 0 1.64m-6.62 0a.82.82 0 1 1 0-1.64.82.82 0 0 1 0 1.64'
        fill='currentColor'
      />
      <path
        d='M15.31 5.36a.82.82 0 1 1 0-1.64.82.82 0 0 1 0 1.64Zm-6.62 0a.82.82 0 1 1 0-1.64.82.82 0 0 1 0 1.64Zm6.62 7.46a.82.82 0 1 1 0-1.64.82.82 0 0 1 0 1.64Zm-6.62 0a.82.82 0 1 1 0-1.64.82.82 0 0 1 0 1.64Zm6.62 7.46a.82.82 0 1 1 0-1.64.82.82 0 0 1 0 1.64Zm-6.62 0a.82.82 0 1 1 0-1.64.82.82 0 0 1 0 1.64Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
