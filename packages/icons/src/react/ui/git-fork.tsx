import type { Icon } from './types'

export const IconGitFork: Icon = ({
  size = 24,
  strokeWidth = 1.5,
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
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='ui-icon-git-fork'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      aria-labelledby={isLabelled && title && !ariaLabel ? 'git-fork-title' : undefined}
      focusable={isLabelled ? undefined : false}
      className={`ui-icon ${className ?? ''}`.trim()}
      {...props}>
      {isLabelled && title && !ariaLabel ? <title id={'git-fork-title'}>{title}</title> : null}
      <path
        d='M18 9a2.75 2.75 0 0 1-2.74 2.75H8.95A2.75 2.75 0 0 1 6.2 9m5.8 6.14V12'
        stroke='currentColor'
      />
      <circle opacity='.2' cx='12' cy='18.37' r='3.07' fill='currentColor' />
      <circle cx='12' cy='18.37' r='3.07' stroke='currentColor' />
      <circle opacity='.2' cx='6.27' cy='5.63' r='3.07' fill='currentColor' />
      <circle opacity='.2' cx='17.8' cy='5.63' r='3.07' fill='currentColor' />
      <circle cx='6.27' cy='5.63' r='3.07' stroke='currentColor' />
      <circle cx='17.8' cy='5.63' r='3.07' stroke='currentColor' />
    </svg>
  )
}
