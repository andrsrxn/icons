import type { Icon } from './types'

export const IconGitMerge: Icon = ({
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
      data-slot='ui-icon-git-merge'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <circle opacity='.2' cx='7.01' cy='5.73' r='3.07' fill='currentColor' />
      <circle opacity='.2' cx='7.01' cy='18.46' r='3.07' fill='currentColor' />
      <circle opacity='.2' cx='17.52' cy='12.24' r='3.07' fill='currentColor' />
      <path
        d='M7.01 9.1v6.28m-.08-6.41L8.8 10.7a6 6 0 0 0 1.8 1.37c.53.2 1.1.2 2.26.2h1.58'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <circle cx='7.01' cy='5.73' r='3.07' stroke='currentColor' strokeWidth={strokeWidth} />
      <circle cx='7.01' cy='18.46' r='3.07' stroke='currentColor' strokeWidth={strokeWidth} />
      <circle cx='17.52' cy='12.24' r='3.07' stroke='currentColor' strokeWidth={strokeWidth} />
    </svg>
  )
}
