import type { Icon } from './types'

export const IconGitPrDraft: Icon = ({
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
      data-slot='git-pr-draft'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M9 6.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m0 11a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m11 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0'
        fill='currentColor'
        opacity='.2'
      />
      <path
        d='M18 11a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0-4.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0'
        fill='currentColor'
      />
      <path
        d='M6.5 9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm0 0v6m0 0a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM20 17.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM18 11a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm0-4.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
