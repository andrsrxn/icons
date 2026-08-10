import type { Icon } from './types'

export const IconGitDiff: Icon = ({
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
      data-slot='git-diff'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        d='M20 17.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0M3.97 6.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0'
        fill='currentColor'
        opacity='.2'
      />
      <path
        d='M17.5 15a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm0 0V9.62c0-1.25 0-1.87-.27-2.34a2 2 0 0 0-.73-.73c-.46-.26-2.4-.26-3.65-.26M6.47 9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm0 0v5.38c0 1.25 0 1.87.27 2.34a2 2 0 0 0 .73.73c.47.26 2.4.26 3.65.26m3.4-9.14-.17-.16c-1-1-1.5-1.5-1.5-2.12s.5-1.12 1.5-2.13l.17-.16M9.46 15.43l.16.16c1 1 1.5 1.5 1.5 2.12s-.5 1.12-1.5 2.13l-.16.16'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
      />
    </svg>
  )
}
