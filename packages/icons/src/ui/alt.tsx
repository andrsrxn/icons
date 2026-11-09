import type { Icon } from './types'

export const IconAlt: Icon = ({
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
      data-slot='icon-ui-alt'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M22.29 12c0-3.33 0-5-.93-6.11a4 4 0 0 0-.5-.5c-1.12-.94-2.79-.94-6.12-.94H9.26c-3.33 0-5 0-6.11.94a4 4 0 0 0-.5.5C1.7 7 1.7 8.67 1.7 12s0 5 .93 6.11a4 4 0 0 0 .5.5c1.12.94 2.79.94 6.12.94h5.48c3.33 0 5 0 6.11-.94q.29-.23.5-.5c.94-1.11.94-2.78.94-6.11'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M9.26 19.55h5.48c3.33 0 5 0 6.11-.94a4 4 0 0 0 .5-.5c.94-1.11.94-2.78.94-6.11v0c0-3.33 0-5-.93-6.11a4 4 0 0 0-.5-.5c-1.12-.94-2.79-.94-6.12-.94H9.26c-3.33 0-5 0-6.11.94a4 4 0 0 0-.5.5C1.7 7 1.7 8.67 1.7 12v0c0 3.33 0 5 .93 6.11a4 4 0 0 0 .5.5c1.12.94 2.79.94 6.12.94'
        stroke='currentColor'
      />
      <path
        d='m4.63 15.03 1.04-3.52h0c.5-1.73.76-2.6 1.24-2.59.47 0 .7.88 1.17 2.62h0l.93 3.5'
        stroke='currentColor'
      />
      <path d='M5.45 12.68h2.82' stroke='currentColor' />
      <path d='M11.84 8.92v5.16c0 .47 0 .7.15.85s.38.15.85.15h1.62' stroke='currentColor' />
      <path d='M17.47 9.04v6.04' stroke='currentColor' />
      <path d='M15.57 9.04h3.8' stroke='currentColor' />
    </svg>
  )
}
