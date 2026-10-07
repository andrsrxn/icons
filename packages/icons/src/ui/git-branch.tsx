import type { Icon } from './types'

export const IconGitBranch: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='icon-ui-git-branch'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <circle opacity='.2' cx='6.15' cy='6.77' r='3.42' fill='currentColor' />
      <circle opacity='.2' cx='17.85' cy='17.23' r='3.42' fill='currentColor' />
      <path d='M6.15 10.51v9.22' stroke='currentColor' />
      <path d='M6.06 10.37s.85 2.86 3.38 4.78a12 12 0 0 0 4.99 2.1' stroke='currentColor' />
      <circle cx='6.15' cy='6.77' r='3.42' stroke='currentColor' />
      <circle cx='17.85' cy='17.23' r='3.42' stroke='currentColor' />
    </svg>
  )
}
