import type { Icon } from './types'

export const IconFolderGit: Icon = ({
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
      data-slot='icon-ui-folder-git'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='m15.5 20.18.23-2.19 3.2 1.27.96-1 2.1-.55.11-4.66c.07-2.89.1-4.33-.78-5.23-.89-.9-2.33-.9-5.22-.9h-1.46c-1.1 0-1.64 0-2.14-.2-.5-.18-.92-.53-1.75-1.24l-.4-.34c-.84-.71-1.26-1.06-1.76-1.25s-1.05-.18-2.14-.18H5.4c-.67 0-1 0-1.28.05a3 3 0 0 0-2.39 2.39c-.05.27-.05.6-.05 1.27v6.76c0 2.83 0 4.24.88 5.12s2.3.88 5.12.88zm1.57-5.7a1.57 1.57 0 1 1-3.14 0 1.57 1.57 0 0 1 3.14 0'
        fill='currentColor'
      />
      <path
        d='M22.24 12.82c0-2.77 0-4.16-.85-5.03l-.06-.06c-.87-.85-2.26-.85-5.03-.85h-2.1c-1.05 0-1.57 0-2.05-.17l-.22-.08c-.47-.2-.85-.56-1.61-1.27A6 6 0 0 0 8.7 4.09L8.5 4c-.48-.16-1-.16-2.05-.16h-2.2A2.57 2.57 0 0 0 1.67 6.4v7.77c0 2.83 0 4.24.88 5.12s2.3.88 5.12.88h2.86'
        stroke='currentColor'
      />
      <path d='M15.5 16.2v4.24' stroke='currentColor' />
      <path d='M15.46 16.14a4.7 4.7 0 0 0 3.85 3.17' stroke='currentColor' />
      <circle cx='15.5' cy='14.49' r='1.57' stroke='currentColor' />
      <circle cx='20.88' cy='19.3' r='1.57' stroke='currentColor' />
    </svg>
  )
}
