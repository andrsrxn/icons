import type { Icon } from './types'

export const IconExternalLink: Icon = ({
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
      data-slot='icon-ui-external-link'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M2.64 13.46c0-3.65 0-5.48 1.1-6.64l.14-.13c1.16-1.11 2.98-1.11 6.64-1.11s5.49 0 6.65 1.1l.13.14c1.1 1.16 1.1 2.99 1.1 6.64 0 3.66 0 5.49-1.1 6.65l-.14.13c-1.15 1.1-2.98 1.1-6.64 1.1s-5.48 0-6.64-1.1l-.13-.13c-1.11-1.16-1.11-3-1.11-6.65'
        fill='currentColor'
      />
      <path
        d='M18.4 12.4v1.06c0 3.66 0 5.49-1.1 6.65l-.14.13c-1.15 1.1-2.98 1.1-6.64 1.1s-5.48 0-6.64-1.1l-.13-.13c-1.11-1.16-1.11-3-1.11-6.65s0-5.48 1.1-6.64l.14-.13c1.16-1.11 2.98-1.11 6.64-1.11h1.25'
        stroke='currentColor'
      />
      <path
        d='M14.71 2.67h2.6c1.88 0 2.83 0 3.41.58.6.59.6 1.53.6 3.42h0v2.6'
        stroke='currentColor'
      />
      <path d='m11.5 12.48 8.93-8.93' stroke='currentColor' />
    </svg>
  )
}
