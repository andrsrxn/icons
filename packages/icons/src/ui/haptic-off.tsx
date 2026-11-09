import type { Icon } from './types'

export const IconHapticOff: Icon = ({
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
      data-slot='icon-ui-haptic-off'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M12 20.25c-2.17 0-3.26 0-4.03-.54a3 3 0 0 1-.75-.75c-.54-.77-.54-1.86-.54-4.03V9.07c0-2.17 0-3.26.54-4.03a3 3 0 0 1 .75-.75c.77-.54 1.86-.54 4.03-.54s3.26 0 4.03.54q.45.3.75.75c.54.77.54 1.86.54 4.03v5.86c0 2.17 0 3.26-.54 4.03a3 3 0 0 1-.75.75c-.77.54-1.86.54-4.03.54'
        fill='currentColor'
      />
      <path
        d='M6.68 6.68v8.25c0 2.17 0 3.26.54 4.03q.3.45.75.75c.77.54 1.86.54 4.03.54h2.39a2.93 2.93 0 0 0 2.93-2.93'
        stroke='currentColor'
      />
      <path d='m3.6 14.31-1.96.53' stroke='currentColor' />
      <path d='m20.4 14.31 1.96.53' stroke='currentColor' />
      <path d='m3.67 9.7-2.02-.54' stroke='currentColor' />
      <path d='m20.33 9.7 2.02-.54' stroke='currentColor' />
      <path d='m2.74 2.74 18.52 18.52' stroke='currentColor' />
      <path
        d='M17.32 14.07V9.75c0-2.83 0-4.24-.88-5.12s-2.3-.88-5.12-.88H9.13q-.58 0-1.1.27'
        stroke='currentColor'
      />
    </svg>
  )
}
