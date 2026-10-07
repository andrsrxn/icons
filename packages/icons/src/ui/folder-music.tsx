import type { Icon } from './types'

export const IconFolderMusic: Icon = ({
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
      data-slot='icon-ui-folder-music'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='m20.86 13.67-.64 4-3.18-.38-.32 2.89H7.67c-2.83 0-4.24 0-5.12-.88s-.88-2.3-.88-5.12V7.42c0-.66 0-1 .05-1.27a3 3 0 0 1 2.4-2.4c.27-.04.6-.04 1.27-.04h1.06c1.1 0 1.64 0 2.14.18.5.19.92.54 1.75 1.25l.4.34c.84.71 1.25 1.06 1.76 1.25.5.18 1.04.18 2.14.18h1.6c2.83 0 4.24 0 5.12.88s.88 2.3.88 5.12v1.47z'
        fill='currentColor'
      />
      <path
        d='M22.24 9.5a2.6 2.6 0 0 0-2.62-2.62h-5.43c-1.04 0-1.56 0-2.05-.17l-.2-.08c-.48-.2-.86-.56-1.62-1.27S9.17 4.29 8.7 4.09L8.5 4c-.48-.16-1-.16-2.05-.16h-2.2A2.57 2.57 0 0 0 1.67 6.4v7.77c0 2.83 0 4.24.88 5.12s2.3.88 5.12.88h4.79'
        stroke='currentColor'
      />
      <path
        d='M20.38 19a1.95 1.95 0 0 1-1.96 1.96 1.96 1.96 0 1 1 1.96-1.95'
        stroke='currentColor'
      />
      <path d='M20.38 19.15V14.5c0-.9 0-1.34.29-1.48s.63.14 1.33.7l.72.55' stroke='currentColor' />
    </svg>
  )
}
