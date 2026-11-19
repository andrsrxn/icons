import type { Icon } from './types'

export const IconGitCommits: Icon = ({
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
      data-slot='icon-ui-git-commits'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <circle opacity='.2' cx='6.97' cy='12' r='2.67' fill='currentColor' />
      <circle opacity='.2' cx='17.26' cy='12' r='2.67' fill='currentColor' />
      <path d='M4.3 12H1.56' stroke='currentColor' />
      <path d='M22.43 12h-2.5' stroke='currentColor' />
      <path d='M14.59 12H9.64' stroke='currentColor' />
      <circle cx='6.97' cy='12' r='2.67' stroke='currentColor' />
      <circle cx='17.26' cy='12' r='2.67' stroke='currentColor' />
    </svg>
  )
}
