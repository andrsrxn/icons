import type { Icon } from './types'

export const IconGitPrDraft: Icon = ({
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
      data-slot='icon-ui-git-pr-draft'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <circle opacity='.2' cx='6.27' cy='5.63' r='3.07' fill='currentColor' />
      <circle opacity='.2' cx='6.27' cy='18.37' r='3.07' fill='currentColor' />
      <circle opacity='.2' cx='17.73' cy='18.37' r='3.07' fill='currentColor' />
      <path d='M6.27 9v6.3' stroke='currentColor' />
      <circle cx='6.27' cy='5.63' r='3.07' stroke='currentColor' />
      <circle cx='6.27' cy='18.37' r='3.07' stroke='currentColor' />
      <circle cx='17.73' cy='18.37' r='3.07' stroke='currentColor' />
      <path
        d='M18.44 10.6a.7.7 0 1 1-1.42 0 .7.7 0 0 1 1.42 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M18.44 5.01a.7.7 0 1 1-1.42 0 .7.7 0 0 1 1.42 0'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
