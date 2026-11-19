import type { Icon } from './types'

export const IconGitCommitReset: Icon = ({
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
      data-slot='icon-ui-git-commit-reset'
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
      <path
        d='M19.9 3.61h-1.2c-2.53 0-3.8 0-4.73.55a4 4 0 0 0-1.42 1.43c-.55.93-.55 2.2-.55 4.73'
        stroke='currentColor'
      />
      <path
        d='m9.1 8.2.76.76c1 1 1.5 1.5 2.12 1.5s1.13-.5 2.13-1.5l.76-.76'
        stroke='currentColor'
      />
    </svg>
  )
}
