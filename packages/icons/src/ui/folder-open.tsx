import type { Icon } from './types'

export const IconFolderOpen: Icon = ({
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
      data-slot='icon-ui-folder-open'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M19.99 8.46c.24.53.36.8.36 1.01a1 1 0 0 1-.6.91c-.19.1-.48.1-1.06.1H6.42c-.62 0-.92 0-1.17.15s-.37.43-.64.98L1.7 17.77l.38-11.31c.02-.82.04-1.23.29-1.5s.65-.32 1.46-.42l1.33-.16h2.33c.36 0 .54 0 .71.06s.3.18.58.41l2.43 2.06c.27.22.4.33.55.4.16.05.33.06.67.07l6.32.24c.26.01.38.02.5.05a1 1 0 0 1 .52.35c.07.1.12.21.23.44'
        fill='currentColor'
      />
      <path
        d='M11.29 19.59h-3.6c-2.83 0-4.25 0-5.13-.88s-.87-2.3-.87-5.12V6.9a2.4 2.4 0 0 1 2.4-2.4h2.06c.51 0 .77 0 1.02.03a4 4 0 0 1 1.82.71c.2.15.4.32.77.66h0c.38.35.56.52.77.67a4 4 0 0 0 1.82.7c.25.04.5.04 1.02.04h4.45c1.7 0 3.07 1.37 3.07 3.07'
        stroke='currentColor'
      />
      <path
        d='M10.8 10.42h6.87c2.67 0 4 0 4.6.87.6.88.1 2.12-.89 4.6l-.46 1.17c-.49 1.23-.73 1.84-1.24 2.18-.5.35-1.16.35-2.48.35H7.38c-2.59 0-3.88 0-4.48-.85-.6-.86-.16-2.07.72-4.51l.42-1.17c.47-1.28.7-1.92 1.21-2.28.52-.36 1.2-.36 2.56-.36z'
        stroke='currentColor'
      />
    </svg>
  )
}
