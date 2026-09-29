import type { Icon } from './types'

export const IconUserBackgroundSparkle: Icon = ({
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
      data-slot='icon-ui-user-background-sparkle'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M20.51 5.16c.36-.18.8.08.8.49v13.9a1.75 1.75 0 0 1-3.39.63l-.73-1.91-.02-.07a3 3 0 0 0-.94-1.25l-.05-.05-.32-.24a2.7 2.7 0 0 1-.56-3.7 2.7 2.7 0 0 0 .28-2.61l-.21-.5-.34-.74a3 3 0 0 0-2.21-1.46c-.2-.02-.4-.02-.82-.02h-.53a3 3 0 0 0-2.29 1.24l-.23.3a3 3 0 0 0-.27 3.04l.17.43c.15.37.23.56.27.74a3 3 0 0 1-.73 2.84c-.13.14-.29.26-.6.52l-.27.22a3 3 0 0 0-.9 1.56l-.44 1.5a1.78 1.78 0 0 1-3.49-.5V8.7c0-2.82 0-4.24.88-5.12s2.3-.88 5.12-.88h9.51a.37.37 0 0 1 .18.7l-.21.1a.91.91 0 0 0 .03 1.62q.27.15.4.42a.9.9 0 0 0 1.62 0l.05-.1q.08-.17.24-.27'
        fill='currentColor'
      />
      <path d='M6.03 2.66h-.08l-.45.01a3 3 0 0 0-2.8 2.8v.45' stroke='currentColor' />
      <path d='M6.03 21.24H5.5a3 3 0 0 1-2.8-2.8V18' stroke='currentColor' />
      <path d='M17.98 21.24h.52a3 3 0 0 0 2.8-2.8V18' stroke='currentColor' />
      <path d='M2.76 10.14v3.57' stroke='currentColor' />
      <path d='M21.24 10.97v2.74' stroke='currentColor' />
      <path d='M5.75 21.24h12.5' stroke='currentColor' />
      <path d='M10.22 2.67h2.86' stroke='currentColor' />
      <path
        d='M15.82 11.4A3.8 3.8 0 0 1 12 15.22a3.82 3.82 0 1 1 3.82-3.82'
        stroke='currentColor'
      />
      <path d='M17.93 21.14a5.92 5.92 0 1 0-11.85 0' stroke='currentColor' />
      <path d='M16.21 4.59c1.51 0 3.13-1.63 3.13-3.13' stroke='currentColor' />
      <path d='M22.47 4.59c-1.5 0-3.13-1.63-3.13-3.13' stroke='currentColor' />
      <path d='M16.21 4.59c1.5 0 3.13 1.65 3.13 3.13' stroke='currentColor' />
      <path d='M22.47 4.59c-1.49 0-3.13 1.63-3.13 3.13' stroke='currentColor' />
    </svg>
  )
}
