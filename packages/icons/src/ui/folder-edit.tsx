import type { Icon } from './types'

export const IconFolderEdit: Icon = ({
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
      data-slot='icon-ui-folder-edit'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='m22.24 14.3-1.48-1.37-5.1 4.82-1.23 2.43H7.67c-2.83 0-4.24 0-5.12-.88s-.88-2.3-.88-5.12V7.42c0-.66 0-1 .05-1.27a3 3 0 0 1 2.4-2.4c.27-.04.6-.04 1.27-.04h1.06c1.1 0 1.64 0 2.14.18.5.19.92.54 1.75 1.25l.4.34c.84.71 1.25 1.06 1.76 1.25.5.18 1.04.18 2.14.18h1.6c2.83 0 4.24 0 5.12.88s.88 2.3.88 5.12z'
        fill='currentColor'
      />
      <rect
        opacity='.2'
        width='2.36'
        height='2.64'
        rx='1'
        transform='scale(1 -1)rotate(45 30.37 16.9)'
        fill='currentColor'
      />
      <path
        d='M22.24 10.17v-.52a3 3 0 0 0-2.77-2.76l-.52-.01H14.2c-1.04 0-1.56 0-2.05-.17l-.2-.08c-.48-.2-.86-.56-1.62-1.27S9.17 4.29 8.7 4.09L8.5 4c-.48-.16-1-.16-2.05-.16h-2.2A2.57 2.57 0 0 0 1.67 6.4v7.77c0 2.83 0 4.24.88 5.12s2.3.88 5.12.88h1.94'
        stroke='currentColor'
      />
      <path d='m20.84 16.54-1.78-1.78' stroke='currentColor' />
      <path
        d='M15.4 21.3c.55-.13.83-.18 1.07-.31l.04-.02c.24-.13.44-.33.83-.72l4.54-4.45c.31-.31.47-.47.55-.64a1 1 0 0 0 0-.81 3 3 0 0 0-.54-.64 3 3 0 0 0-.63-.54 1 1 0 0 0-.81 0 3 3 0 0 0-.64.54l-4.5 4.5c-.4.39-.6.58-.73.82l-.03.05c-.13.24-.19.51-.3 1.05-.15.65-.22.97-.05 1.16l.04.04c.19.17.51.1 1.17-.04'
        stroke='currentColor'
      />
    </svg>
  )
}
