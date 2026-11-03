import type { Icon } from './types'

export const IconGitPr: Icon = ({
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
      data-slot='icon-ui-git-pr'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <circle opacity='.2' cx='6.01' cy='18.37' r='3.07' fill='currentColor' />
      <path d='M6.01 9v6.3' stroke='currentColor' />
      <circle cx='6.01' cy='18.37' r='3.07' stroke='currentColor' />
      <circle opacity='.2' cx='6.01' cy='5.63' r='3.07' fill='currentColor' />
      <circle opacity='.2' cx='17.99' cy='18.37' r='3.07' fill='currentColor' />
      <circle cx='6.01' cy='5.63' r='3.07' stroke='currentColor' />
      <circle cx='17.99' cy='18.37' r='3.07' stroke='currentColor' />
      <path
        d='M13.23 5.71h.76c1.88 0 2.83 0 3.41.59.59.58.59 1.53.59 3.41v5.58'
        stroke='currentColor'
      />
      <path
        d='M14.5 3.2c-1.04 1.02-1.55 1.54-1.66 2.16a2 2 0 0 0 0 .7c.1.62.62 1.13 1.65 2.17'
        stroke='currentColor'
      />
    </svg>
  )
}
