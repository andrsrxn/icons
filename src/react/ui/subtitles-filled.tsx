import type { Icon } from './types'

export const IconSubtitlesFilled: Icon = ({
  size = 24,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      data-slot='subtitles-filled'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M20.9 7.6q.09.91.07 2.3v4.2q.02 1.39-.08 2.3a2.8 2.8 0 0 1-.74 1.7 2.8 2.8 0 0 1-1.7.74q-.91.1-2.3.08h-8.3q-1.39.02-2.3-.08a2.8 2.8 0 0 1-1.7-.74 2.8 2.8 0 0 1-.74-1.7c-.08-.6-.08-1.38-.08-2.3V9.9c0-.92 0-1.7.08-2.3a2.8 2.8 0 0 1 .74-1.7 2.8 2.8 0 0 1 1.7-.74q.91-.1 2.3-.08h8.3c.92 0 1.7 0 2.3.08a2.8 2.8 0 0 1 1.7.74c.46.47.65 1.05.74 1.7m-3.07 3.63a.77.77 0 1 1 0 1.54H12a.77.77 0 1 1 0-1.54zm-8.9 0a.77.77 0 1 1 0 1.54H6.16a.77.77 0 1 1 0-1.54zm4.78 3.85a.77.77 0 0 0-.77-.77H6.17a.77.77 0 0 0 0 1.54h6.77c.43 0 .77-.35.77-.77m4.12-.77a.77.77 0 0 1 0 1.54h-2.17a.77.77 0 0 1 0-1.54z'
        fill='currentColor'
      />
    </svg>
  )
}
