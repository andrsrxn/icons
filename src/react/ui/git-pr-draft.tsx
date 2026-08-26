import type { Icon } from './types'

export const IconGitPrDraft: Icon = ({
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
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='ui-icon-git-pr-draft'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <circle opacity='.2' cx='6.27' cy='5.63' r='3.07' fill='currentColor' />
      <circle opacity='.2' cx='6.27' cy='18.37' r='3.07' fill='currentColor' />
      <circle opacity='.2' cx='17.73' cy='18.37' r='3.07' fill='currentColor' />
      <path d='M6.27 9v6.3' stroke='currentColor' strokeWidth={strokeWidth} />
      <circle cx='6.27' cy='5.63' r='3.07' stroke='currentColor' strokeWidth={strokeWidth} />
      <circle cx='6.27' cy='18.37' r='3.07' stroke='currentColor' strokeWidth={strokeWidth} />
      <circle cx='17.73' cy='18.37' r='3.07' stroke='currentColor' strokeWidth={strokeWidth} />
      <path
        d='M18.44 10.6a.7.7 0 1 1-1.42 0 .7.7 0 0 1 1.42 0m0-5.59a.7.7 0 1 1-1.42 0 .7.7 0 0 1 1.42 0'
        fill='currentColor'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
