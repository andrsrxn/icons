import type { Icon } from './types'

export const IconGitBranch: Icon = ({
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
      data-slot='ui-icon-git-branch'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <circle opacity='.2' cx='6.27' cy='18.37' r='3.07' fill='currentColor' />
      <path d='M6.27 9v6.3' stroke='currentColor' strokeWidth={strokeWidth} />
      <circle cx='6.27' cy='18.37' r='3.07' stroke='currentColor' strokeWidth={strokeWidth} />
      <circle opacity='.2' cx='6.27' cy='5.63' r='3.07' fill='currentColor' />
      <circle
        opacity='.2'
        cx='3.07'
        cy='3.07'
        r='3.07'
        transform='matrix(1 0 0 -1 14.66 9.34)'
        fill='currentColor'
      />
      <circle cx='6.27' cy='5.63' r='3.07' stroke='currentColor' strokeWidth={strokeWidth} />
      <circle
        cx='3.07'
        cy='3.07'
        r='3.07'
        transform='matrix(1 0 0 -1 14.66 9.34)'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M17.67 13.46v.9c0 1.9 0 2.83-.58 3.42-.59.59-1.53.59-3.42.59H9.34'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M20.25 14.72c-1.03-1.03-1.55-1.55-2.17-1.66a2 2 0 0 0-.7 0c-.62.11-1.13.63-2.16 1.66'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
