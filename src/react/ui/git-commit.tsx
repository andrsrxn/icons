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
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
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
        fill='currentColor'
        d='M15.324 12a3.324 3.324 0 1 1-6.648 0 3.324 3.324 0 0 1 6.648 0Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M8.676 12a3.324 3.324 0 0 1 6.648 0m-6.648 0a3.324 3.324 0 1 0 6.648 0m-6.648 0H4m11.324 0h5.171'
      />
    </svg>
  )
}
