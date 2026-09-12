import type { Icon } from './types'

export const IconFolderCode: Icon = ({
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
      data-slot='icon-ui-folder-code'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M22 16.77c0 .38 0 .57-.02.73a3 3 0 0 1-2.66 2.66c-.16.02-.35.02-.73.02H7.67c-2.83 0-4.24 0-5.12-.88s-.88-2.3-.88-5.12V7.42c0-.66 0-1 .05-1.27a3 3 0 0 1 2.4-2.4c.27-.04.6-.04 1.27-.04h1.06c1.1 0 1.64 0 2.14.18.5.19.92.54 1.75 1.25l.4.34c.84.71 1.25 1.06 1.76 1.25.5.18 1.04.18 2.14.18h1.45c2.9 0 4.34 0 5.22.9.88.91.85 2.36.78 5.25l-.1 3.56z'
        fill='currentColor'
      />
      <path
        d='M22.24 10.99c0-1.03 0-1.55-.13-1.97a3 3 0 0 0-2.01-2.01c-.42-.13-.94-.13-1.97-.13H14.2c-1.04 0-1.56 0-2.05-.17l-.2-.08c-.48-.2-.86-.56-1.62-1.27S9.17 4.29 8.7 4.09L8.5 4c-.48-.16-1-.16-2.05-.16h-2.2A2.57 2.57 0 0 0 1.67 6.4v7.77c0 2.83 0 4.24.88 5.12s2.3.88 5.12.88h3.73'
        stroke='currentColor'
      />
      <path
        d='M20.2 14.85c1.37 1.15 2.05 1.72 2.18 2.45a2 2 0 0 1 0 .66c-.12.73-.81 1.3-2.18 2.45'
        stroke='currentColor'
      />
      <path
        d='M16.8 14.85c-1.37 1.15-2.06 1.72-2.18 2.45a2 2 0 0 0 0 .66c.12.73.8 1.3 2.18 2.45'
        stroke='currentColor'
      />
    </svg>
  )
}
