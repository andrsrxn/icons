import type { Icon } from './types'

export const IconFlagRacing: Icon = ({
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
      data-slot='icon-ui-flag-racing'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M3.12 6.2v1.18c0 1.13 0 1.7.37 2 .36.3.91.19 2.02-.03l1.57-.31c.77-.16 1.15-.23 1.38-.51s.23-.67.23-1.46V5.8c0-1.18 0-1.78-.39-2.08s-.96-.15-2.1.15l-1.58.4c-.72.18-1.08.28-1.29.55s-.21.64-.21 1.39'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M15.2 12.19v1.58c0 1.12 0 1.68-.37 1.98-.36.3-.91.2-2.01-.02l-2.1-.4c-.77-.16-1.15-.23-1.38-.5-.23-.29-.23-.68-.23-1.47v-1.7c0-1.18 0-1.77.39-2.07.38-.3.95-.16 2.1.13l2.09.53c.72.18 1.09.27 1.3.55.2.27.2.64.2 1.39'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M15.41 6.2v1.18c0 1.13 0 1.7.37 2 .36.3.92.19 2.02-.03l1.57-.31c.77-.16 1.16-.23 1.38-.51.23-.28.23-.67.23-1.46V5.8c0-1.18 0-1.78-.39-2.08-.38-.3-.96-.15-2.1.15l-1.57.4c-.73.18-1.09.28-1.3.55s-.2.64-.2 1.39'
        fill='currentColor'
      />
      <path
        d='M3.12 4.69s1.84-1.26 4.89-1.26S11.97 4.8 15 4.8c1.63 0 3.26-.54 4.4-1.03.77-.33 1.15-.5 1.38-.35s.22.55.22 1.34v9.2c0 .28 0 .43-.08.55s-.2.18-.45.28c-.9.39-2.86 1.08-5.46 1.08-3.6 0-4.03-1.03-7-1.03s-4.89 1.1-4.89 1.1'
        stroke='currentColor'
      />
      <path
        d='M3.12 10.14s1.84-1.26 4.89-1.26 3.96 1.38 6.99 1.38c3.02 0 6-1.83 6-1.83'
        stroke='currentColor'
      />
      <path d='M3.12 1.87V22.4' stroke='currentColor' />
      <path d='M9 3.52v11.26' stroke='currentColor' />
      <path d='M15.29 4.81v10.9' stroke='currentColor' />
    </svg>
  )
}
