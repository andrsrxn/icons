import type { Icon } from './types'

export const IconGitPrClosed: Icon = ({
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
      data-slot='icon-ui-git-pr-closed'
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
      <path d='M17.73 10.37v4.92' stroke='currentColor' />
      <circle cx='6.27' cy='5.63' r='3.07' stroke='currentColor' />
      <circle cx='6.27' cy='18.37' r='3.07' stroke='currentColor' />
      <circle cx='17.73' cy='18.37' r='3.07' stroke='currentColor' />
      <path d='m15.38 7.98 4.7-4.7' stroke='currentColor' />
      <path d='m20.08 7.99-4.7-4.7' stroke='currentColor' />
    </svg>
  )
}
