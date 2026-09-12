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
        d='M21.6 14.61a1 1 0 0 0-.63.86l-.04 1.07a1.55 1.55 0 0 1-1.55 1.48h-.48c-.6 0-1.07.49-1.07 1.08s-.49 1.08-1.08 1.08H7.67c-2.83 0-4.24 0-5.12-.88s-.88-2.3-.88-5.12V7.42c0-.66 0-1 .05-1.27a3 3 0 0 1 2.4-2.4c.27-.04.6-.04 1.27-.04h1.06c1.1 0 1.64 0 2.14.18.5.19.92.54 1.75 1.25l.4.34c.84.71 1.25 1.06 1.76 1.25.5.18 1.04.18 2.14.18h3.22c1.28 0 1.93 0 2.44.2a3 3 0 0 1 1.74 1.74c.2.51.2 1.16.2 2.45v2.41c0 .4-.25.76-.63.9'
        fill='currentColor'
      />
      <path
        d='M22.24 10.5c0-.58 0-.86-.04-1.1a3 3 0 0 0-2.47-2.48c-.25-.04-.53-.04-1.11-.04h-4.43c-1.04 0-1.56 0-2.05-.17l-.2-.08c-.48-.2-.86-.56-1.62-1.27S9.17 4.29 8.7 4.09L8.5 4c-.48-.16-1-.16-2.05-.16h-2.2A2.57 2.57 0 0 0 1.67 6.4v7.77c0 2.83 0 4.24.88 5.12s2.3.88 5.12.88h6.74'
        stroke='currentColor'
      />
      <path
        d='M20.85 19.18a1.8 1.8 0 0 1-1.8 1.78 1.79 1.79 0 1 1 1.8-1.78'
        stroke='currentColor'
      />
      <path d='M20.85 19.3v-3.67c0-.5.3-.94.76-1.12l1.27-.48' stroke='currentColor' />
    </svg>
  )
}
