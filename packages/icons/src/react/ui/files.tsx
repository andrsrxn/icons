import type { Icon } from './types'

export const IconFiles: Icon = ({
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
      data-slot='icon-ui-files'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M15.12 11.5c-.02-1.1-.04-1.65-.3-2.1-.27-.45-.74-.72-1.68-1.27l-2.92-1.7-.43-.27a2 2 0 0 1-.78-1.79c0-.12.03-.24.09-.5s.09-.4.13-.51a2 2 0 0 1 1.54-1.31c.13-.02.26-.03.53-.04l2.36-.12c.67-.03 1-.05 1.27.02a2 2 0 0 1 1.47 1.4c.08.26.08.6.08 1.26 0 .64 0 .96.07 1.22a2 2 0 0 0 1.4 1.4c.26.07.58.07 1.22.07h.2a5 5 0 0 1 1.56.12 2 2 0 0 1 1.2 1.2 5 5 0 0 1 .12 1.56v4.68c0 1.43 0 2.15-.35 2.66a2 2 0 0 1-.52.52c-.51.35-1.23.35-2.66.35-1.4 0-2.1 0-2.6-.34a2 2 0 0 1-.53-.5c-.35-.5-.36-1.2-.4-2.6z'
        fill='currentColor'
      />
      <path
        d='M7.75 22.25c-2.83 0-4.24 0-5.12-.88s-.88-2.3-.88-5.12v-4.52c0-2.83 0-4.24.88-5.12s2.3-.88 5.12-.88h.46c1.19 0 1.78 0 2.31.21.54.22.96.62 1.82 1.44l.82.77.62.58c.95.87 1.43 1.31 1.68 1.89s.25 1.22.25 2.51v3.12c0 2.83 0 4.24-.88 5.12s-2.3.88-5.12.88z'
        stroke='currentColor'
      />
      <path
        d='M15.8 18.35h.45c2.83 0 4.24 0 5.12-.88s.88-2.3.88-5.12V9.23c0-1.29 0-1.93-.25-2.5s-.73-1.02-1.68-1.9l-.62-.58-.82-.77c-.85-.81-1.28-1.22-1.82-1.43-.53-.22-1.12-.22-2.3-.22h-2.69c-.67 0-1 0-1.29.06A3 3 0 0 0 8.4 4.32c-.05.28-.04.62-.03 1.3'
        stroke='currentColor'
      />
      <path d='M16.15 2.07c0 1.84 0 4.48.6 5.06s3.4.57 5.33.57' stroke='currentColor' />
      <path d='M9.35 6c0 1.84 0 4.48.6 5.05.6.58 3.39.58 5.32.58' stroke='currentColor' />
    </svg>
  )
}
