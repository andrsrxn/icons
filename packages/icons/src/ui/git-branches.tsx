import type { Icon } from './types'

export const IconGitBranches: Icon = ({
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
      data-slot='icon-ui-git-branches'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <circle opacity='.2' cx='7.53' cy='4.36' r='2.61' fill='currentColor' />
      <circle opacity='.2' cx='16.47' cy='11.68' r='2.61' fill='currentColor' />
      <circle opacity='.2' cx='16.47' cy='19.64' r='2.61' fill='currentColor' />
      <path d='M7.53 7.22v14.12' stroke='currentColor' />
      <path d='M7.46 7.11s.48 2.44 2.58 3.65c2.08 1.21 3.82.86 3.82.86' stroke='currentColor' />
      <path d='M7.52 15.12s.48 2.4 2.56 3.61c2.05 1.2 3.78.85 3.78.85' stroke='currentColor' />
      <circle cx='7.53' cy='4.36' r='2.61' stroke='currentColor' />
      <circle cx='16.47' cy='11.68' r='2.61' stroke='currentColor' />
      <circle cx='16.47' cy='19.64' r='2.61' stroke='currentColor' />
    </svg>
  )
}
