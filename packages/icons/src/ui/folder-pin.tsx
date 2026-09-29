import type { Icon } from './types'

export const IconFolderPin: Icon = ({
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
      data-slot='icon-ui-folder-pin'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M18.75 13.24c-.82.08-1.33.93-1.02 1.7q.16.4.04.82l-1.28 4.37H7.66c-2.83 0-4.24 0-5.12-.88s-.88-2.3-.88-5.12V7.36c0-.66 0-1 .05-1.27a3 3 0 0 1 2.4-2.4c.27-.04.6-.04 1.27-.04h1.07c1.09 0 1.63 0 2.14.18.5.19.91.54 1.75 1.25l.4.34c.83.71 1.25 1.07 1.75 1.25.5.19 1.05.19 2.14.19h1.61c2.83 0 4.24 0 5.12.88.88.87.88 2.29.88 5.12v1.23l-2.28-.82a2 2 0 0 0-.72-.08z'
        fill='currentColor'
      />
      <path
        d='M22.24 10.54c0-.67 0-1-.05-1.28a3 3 0 0 0-2.39-2.38c-.28-.06-.61-.06-1.28-.06H14.2c-1.05 0-1.57 0-2.05-.17l-.21-.08c-.47-.2-.85-.56-1.62-1.27A6 6 0 0 0 8.7 4.03l-.22-.09c-.48-.16-1-.16-2.05-.16h-2.2a2.57 2.57 0 0 0-2.57 2.57v7.78c0 2.83 0 4.24.88 5.12s2.3.88 5.12.88h4.88'
        stroke='currentColor'
      />
      <path
        d='M18.8 19.8c-1.47 0-2.2 0-2.5-.49-.29-.48.05-1.13.73-2.44l.62-1.17a.8.8 0 0 0-.23-1 .79.79 0 0 1 .48-1.4h2.86a.8.8 0 0 1 .5 1.41.8.8 0 0 0-.22.97l.6 1.26c.61 1.28.92 1.92.62 2.39s-1 .47-2.43.47z'
        stroke='currentColor'
      />
      <path d='m19.3 22.36-.03-2.56' stroke='currentColor' />
    </svg>
  )
}
