import type { Icon } from './types'

export const IconGitMerge: Icon = ({
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
      data-slot='icon-ui-git-merge'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <circle opacity='.2' cx='6.99' cy='5.64' r='3.08' fill='currentColor' />
      <circle opacity='.2' cx='6.99' cy='18.42' r='3.08' fill='currentColor' />
      <circle opacity='.2' cx='17.54' cy='12.18' r='3.08' fill='currentColor' />
      <path d='M7 9.02v6.31' stroke='currentColor' />
      <circle cx='6.99' cy='5.64' r='3.08' stroke='currentColor' />
      <circle cx='6.99' cy='18.42' r='3.08' stroke='currentColor' />
      <circle cx='17.54' cy='12.18' r='3.08' stroke='currentColor' />
      <path d='M6.9 8.9s1.23 1.75 2.97 2.62c2.27 1.13 4.5.9 4.5.9' stroke='currentColor' />
    </svg>
  )
}
