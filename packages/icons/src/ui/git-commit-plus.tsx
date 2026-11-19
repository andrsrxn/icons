import type { Icon } from './types'

export const IconGitCommitPlus: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel?.trim())

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      data-slot='icon-ui-git-commit-plus'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <circle opacity='.2' cx='12' cy='16.88' r='3.51' fill='currentColor' />
      <path d='M8.5 16.88h-6' stroke='currentColor' />
      <path d='M21.5 16.88h-6' stroke='currentColor' />
      <circle cx='12' cy='16.88' r='3.51' stroke='currentColor' />
      <path d='M8.9 6.7h6.18' stroke='currentColor' />
      <path d='M11.98 9.8V3.6' stroke='currentColor' />
    </svg>
  )
}
