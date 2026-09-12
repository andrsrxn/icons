import type { Icon } from './types'

export const IconGitPr: Icon = ({
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
      data-slot='icon-ui-git-pr'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <circle opacity='.2' cx='6.27' cy='18.37' r='3.07' fill='currentColor' />
      <path d='M6.27 9v6.3' stroke='currentColor' />
      <circle cx='6.27' cy='18.37' r='3.07' stroke='currentColor' />
      <circle opacity='.2' cx='6.27' cy='5.63' r='3.07' fill='currentColor' />
      <circle opacity='.2' cx='17.73' cy='18.37' r='3.07' fill='currentColor' />
      <circle cx='6.27' cy='5.63' r='3.07' stroke='currentColor' />
      <circle cx='17.73' cy='18.37' r='3.07' stroke='currentColor' />
      <path
        d='M13.48 5.71h.45c1.89 0 2.83 0 3.41.59.6.58.6 1.53.6 3.41v5.58'
        stroke='currentColor'
      />
      <path
        d='M14.75 3.2c-1.03 1.02-1.55 1.54-1.66 2.16a2 2 0 0 0 0 .7c.11.62.63 1.13 1.66 2.17'
        stroke='currentColor'
      />
    </svg>
  )
}
