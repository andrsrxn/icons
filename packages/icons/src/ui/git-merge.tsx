import type { Icon } from './types'

export const IconGitMerge: Icon = ({
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
      data-slot='icon-ui-git-merge'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <circle opacity='.2' cx='6.99' cy='5.64' r='3.08' fill='currentColor' />
      <circle opacity='.2' cx='6.99' cy='18.42' r='3.08' fill='currentColor' />
      <circle opacity='.2' cx='17.54' cy='12.18' r='3.08' fill='currentColor' />
      <path d='M7 9.02v6.31' stroke='currentColor' />
      <path
        d='m6.9 8.9 1.9 1.73a6 6 0 0 0 1.8 1.38c.53.2 1.11.2 2.26.2h1.6'
        stroke='currentColor'
      />
      <circle cx='6.99' cy='5.64' r='3.08' stroke='currentColor' />
      <circle cx='6.99' cy='18.42' r='3.08' stroke='currentColor' />
      <circle cx='17.54' cy='12.18' r='3.08' stroke='currentColor' />
    </svg>
  )
}
