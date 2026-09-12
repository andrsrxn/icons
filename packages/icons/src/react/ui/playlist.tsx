import type { Icon } from './types'

export const IconPlaylist: Icon = ({
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
      data-slot='icon-ui-playlist'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M13.99 14.75c0-2.24 0-3.36.55-3.94a2 2 0 0 1 1.03-.57c.78-.17 1.73.41 3.64 1.58 1.77 1.08 2.66 1.63 2.88 2.36a2 2 0 0 1 0 1.14c-.22.74-1.1 1.28-2.88 2.36-1.9 1.17-2.86 1.75-3.64 1.59a2 2 0 0 1-1.03-.58c-.55-.58-.55-1.7-.55-3.94'
        fill='currentColor'
      />
      <path d='M21.44 6H2.61' stroke='currentColor' />
      <path d='M10.62 12h-8' stroke='currentColor' />
      <path d='M10.62 18h-8' stroke='currentColor' />
      <path
        d='M13.99 14.75c0-2.24 0-3.36.55-3.94a2 2 0 0 1 1.03-.57c.78-.17 1.73.41 3.64 1.58 1.77 1.08 2.66 1.63 2.88 2.36a2 2 0 0 1 0 1.14c-.22.74-1.1 1.28-2.88 2.36-1.9 1.17-2.86 1.75-3.64 1.59a2 2 0 0 1-1.03-.58c-.55-.58-.55-1.7-.55-3.94'
        stroke='currentColor'
      />
    </svg>
  )
}
