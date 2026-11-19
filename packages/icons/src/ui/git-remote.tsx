import type { Icon } from './types'

export const IconGitRemote: Icon = ({
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
      data-slot='icon-ui-git-remote'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <circle opacity='.2' cx='18.8' cy='18.74' r='3.49' fill='currentColor' />
      <path
        d='M15.19 18.96h-1c-2.83 0-4.24 0-5.12-.87-.88-.88-.88-2.3-.88-5.13V10.9'
        stroke='currentColor'
      />
      <circle cx='18.8' cy='18.74' r='3.49' stroke='currentColor' />
      <path
        d='M4.46 10.9c-.73 0-1.44-.33-1.94-.87a3 3 0 0 1-.77-2 2.8 2.8 0 0 1 2.71-2.87c.89 0 1.68.45 2.17 1.15'
        stroke='currentColor'
      />
      <path d='M12.66 10.9h-8.3' stroke='currentColor' />
      <path d='M4.78 5.16a3.27 3.27 0 0 1 6.01-.76c.54.93.52 1.87.4 2.5' stroke='currentColor' />
      <path
        d='M11.28 5.72a2.3 2.3 0 0 1 2.17.07 2.75 2.75 0 0 1 1 3.76c-.44.78-1.06 1.26-1.69 1.34'
        stroke='currentColor'
      />
    </svg>
  )
}
