import type { Icon } from './types'

export const IconGitCommit: Icon = ({
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
      data-slot='git-commit'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='M15.32 12a3.32 3.32 0 1 1-6.64 0 3.32 3.32 0 0 1 6.64 0'
        fill='currentColor'
      />
      <path
        d='M8.68 12a3.32 3.32 0 0 1 6.64 0m-6.64 0a3.32 3.32 0 1 0 6.64 0m-6.64 0H4m11.32 0h5.18'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
