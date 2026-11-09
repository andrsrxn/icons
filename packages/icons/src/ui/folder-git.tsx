import type { Icon } from './types'

export const IconFolderGit: Icon = ({
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
      data-slot='icon-ui-folder-git'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='m15.5 20.18.23-2.19 3.2 1.27.96-1 2.1-.55.09-3.58c.06-2.92.1-4.38-.6-5.43a4 4 0 0 0-1.04-1.07c-1.03-.72-2.5-.72-5.41-.72h-.13c-.99 0-1.48 0-1.95-.11a4 4 0 0 1-.85-.31c-.43-.22-.8-.54-1.56-1.18a9 9 0 0 0-1.56-1.18 4 4 0 0 0-.84-.31c-.47-.11-.96-.11-1.95-.11h-.8a3.7 3.7 0 0 0-3.72 3.71v4.76c0 3.77 0 5.65 1.17 6.83s3.06 1.17 6.83 1.17zm1.57-5.7a1.57 1.57 0 1 1-3.14 0 1.57 1.57 0 0 1 3.14 0'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M10.53 20.18h-.86c-3.77 0-5.66 0-6.83-1.17-1.17-1.18-1.17-3.06-1.17-6.83V6.4a2.57 2.57 0 0 1 2.57-2.57h2.2c.66 0 .98 0 1.3.05a4 4 0 0 1 1.6.62c.26.18.5.4.98.85s.72.67.98.84a4 4 0 0 0 1.6.63c.3.05.64.05 1.3.05h2.1c1.8 0 2.71 0 3.43.29a4 4 0 0 1 2.22 2.22c.29.72.29 1.62.29 3.43'
        stroke='currentColor'
      />
      <path d='M15.5 16.2v4.24' stroke='currentColor' />
      <path d='M15.46 16.14a4.7 4.7 0 0 0 3.85 3.17' stroke='currentColor' />
      <circle cx='15.5' cy='14.49' r='1.57' stroke='currentColor' />
      <circle cx='20.88' cy='19.3' r='1.57' stroke='currentColor' />
    </svg>
  )
}
