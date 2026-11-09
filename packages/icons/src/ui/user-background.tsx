import type { Icon } from './types'

export const IconUserBackground: Icon = ({
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
      data-slot='icon-ui-user-background'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M18.78 21.3c1.4 0 2.53-1.12 2.53-2.52V10.7c0-3.77 0-5.65-1.18-6.82-1.17-1.18-3.05-1.18-6.82-1.18h-2.62c-3.77 0-5.65 0-6.82 1.18-1.18 1.17-1.18 3.05-1.18 6.82v8a2.6 2.6 0 0 0 2.63 2.62c.3 0 .55-.2.63-.48l.8-2.79c.1-.3.13-.44.22-.57s.2-.23.44-.42L8.7 16c.55-.45.82-.67.9-1 .09-.31-.04-.64-.3-1.3l-.9-2.23c-.21-.53-.32-.8-.28-1.06.04-.27.22-.5.58-.94l.9-1.1c.29-.37.44-.56.64-.65.2-.1.44-.1.91-.1h1.96c.64 0 .96 0 1.21.16.25.17.38.47.63 1.06l.79 1.86c.21.5.32.75.29 1-.03.26-.19.49-.5.93l-.61.87c-.53.74-.79 1.11-.73 1.51s.42.68 1.14 1.23l1.1.85c.23.17.34.25.43.37.08.1.13.24.23.5l1.11 2.93c.1.24.33.4.6.4'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path d='M15.82 11.4a3.82 3.82 0 1 0-7.64 0 3.82 3.82 0 0 0 7.64 0' stroke='currentColor' />
      <path d='M6.08 21.14a5.92 5.92 0 0 1 11.85 0' stroke='currentColor' />
      <path
        d='M2.42 13.77V10.6c0-3.77 0-5.66 1.17-6.83S6.65 2.6 10.42 2.6h3.16c3.77 0 5.66 0 6.83 1.17s1.17 3.06 1.17 6.83v3.17c0 3.77 0 5.65-1.17 6.83s-3.06 1.17-6.83 1.17h-3.16c-3.77 0-5.66 0-6.83-1.17-1.17-1.18-1.17-3.06-1.17-6.83'
        stroke='currentColor'
      />
    </svg>
  )
}
