import type { Icon } from './types'

export const IconFolderPin: Icon = ({
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
      data-slot='icon-ui-folder-pin'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M18.75 13.24c-.82.08-1.33.93-1.02 1.7q.16.4.04.82l-1.28 4.37H7.66c-2.83 0-4.24 0-5.12-.88s-.88-2.3-.88-5.12V7.36c0-.66 0-1 .05-1.27a3 3 0 0 1 2.4-2.4c.27-.04.6-.04 1.27-.04h1.07c1.09 0 1.63 0 2.14.18.5.19.91.54 1.75 1.25l.4.34c.83.71 1.25 1.07 1.75 1.25.5.19 1.05.19 2.14.19h1.61c2.83 0 4.24 0 5.12.88.88.87.88 2.29.88 5.12v1.23l-2.28-.82a2 2 0 0 0-.72-.08z'
        fill='currentColor'
      />
      <path
        d='M12.54 20.13H9.66c-3.77 0-5.66 0-6.83-1.17-1.17-1.18-1.17-3.06-1.17-6.83V6.35a2.57 2.57 0 0 1 2.57-2.57h2.2c.66 0 .99 0 1.3.05a4 4 0 0 1 1.6.62c.26.18.5.4.98.85s.72.67.99.85a4 4 0 0 0 1.59.62c.31.05.64.05 1.3.05h4.33a3.7 3.7 0 0 1 3.72 3.72'
        stroke='currentColor'
      />
      <path
        d='m17.65 15.7-.62 1.17c-.68 1.3-1.02 1.96-.73 2.44.3.49 1.03.49 2.5.49h1.03c1.43 0 2.14 0 2.43-.47s-.01-1.1-.62-2.4l-.6-1.25a.8.8 0 0 1 .22-.97.8.8 0 0 0-.5-1.42H17.9a.79.79 0 0 0-.48 1.42c.31.23.4.65.23.99'
        stroke='currentColor'
      />
      <path d='m19.3 22.36-.03-2.56' stroke='currentColor' />
    </svg>
  )
}
