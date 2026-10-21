import type { Icon } from './types'

export const IconFolderUsers: Icon = ({
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
      data-slot='icon-ui-folder-users'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='m17.6 11.87-.53.77c-.41.6-1.04 1-1.75 1.15-.82.16-1.52.69-1.9 1.43l-.5.95 1.61 2.34-1.62 1.67H7.67c-2.83 0-4.24 0-5.12-.88s-.88-2.3-.88-5.12V7.42c0-.66 0-1 .05-1.27a3 3 0 0 1 2.4-2.4c.27-.04.6-.04 1.27-.04h1.06c1.1 0 1.64 0 2.14.18.5.19.92.54 1.75 1.25l.4.34c.84.71 1.25 1.06 1.76 1.25.5.18 1.04.18 2.14.18h1.6c2.83 0 4.24 0 5.12.88s.88 2.3.88 5.12v6.13l-.85-.93a2.6 2.6 0 0 1-.49-2.8l.11-.27a1.97 1.97 0 0 0-1.36-2.68z'
        fill='currentColor'
      />
      <path
        d='M8.84 20.18H7.67c-2.83 0-4.24 0-5.12-.88s-.88-2.3-.88-5.12V6.4a2.57 2.57 0 0 1 2.57-2.57h2.2c1.05 0 1.57 0 2.05.16l.21.09c.47.2.85.56 1.62 1.27a6 6 0 0 0 1.61 1.27l.21.08c.49.17 1 .17 2.05.17h5.34a2.7 2.7 0 0 1 2.7 2.7'
        stroke='currentColor'
      />
      <path d='M16.21 13.81a2.3 2.3 0 0 1 2.3-1.87 2.4 2.4 0 1 1-.68 4.7' stroke='currentColor' />
      <path d='M17.86 16.1a2.36 2.36 0 1 0-4.73 0 2.36 2.36 0 0 0 4.73 0' stroke='currentColor' />
      <path d='M12 21.96a3.5 3.5 0 1 1 6.99 0' stroke='currentColor' />
      <path d='M22.02 20.23a3.5 3.5 0 0 0-4.27-3.39' stroke='currentColor' />
    </svg>
  )
}
