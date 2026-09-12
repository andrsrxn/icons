import type { Icon } from './types'

export const IconGitCommit: Icon = ({
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
      data-slot='icon-ui-git-commit'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <circle
        opacity='.2'
        cx='12'
        cy='12'
        r='3.51'
        transform='rotate(90 12 12)'
        fill='currentColor'
      />
      <path d='M8.5 12h-6' stroke='currentColor' />
      <path d='M21.5 12h-6' stroke='currentColor' />
      <circle cx='12' cy='12' r='3.51' transform='rotate(90 12 12)' stroke='currentColor' />
    </svg>
  )
}
