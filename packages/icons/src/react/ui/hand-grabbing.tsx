import type { Icon } from './types'

export const IconHandGrabbing: Icon = ({
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
      data-slot='icon-ui-hand-grabbing'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M6.63 6.88v3.14c-.74-1.13-1.86-1.25-3.13-.6-1.87.96-1.88 3.36-1.18 4.7.7 1.33 1.03 2.85 2.47 4.1 2.75 2.4 6.6 2.8 9.43 2.8 2.81 0 7.86-1.58 7.78-6.46v-6.2c0-1.31-.63-2.85-2.1-2.85-1.46 0-2.65 1.06-2.65 2.36 0-1.3-.65-4.63-2.66-4.63-2.25 0-2.65 2.34-2.65 3.64 0-1.3-1.2-2.36-2.66-2.36S6.63 5.58 6.63 6.88'
        fill='currentColor'
      />
      <path d='M16.8 10.13V5.79a2.55 2.55 0 0 0-5.09 0v4.34' stroke='currentColor' />
      <path
        d='M16.8 9.84V8.57a2.55 2.55 0 0 1 5.1 0v5.9c0 6.25-6.28 6.21-9 6.25-2.95.03-7.04-.29-9.8-4.8'
        stroke='currentColor'
      />
      <path d='M11.71 10.01v-3.4a2.55 2.55 0 1 0-5.09 0v5.6' stroke='currentColor' />
      <path d='M5.99 8.75a2.95 2.95 0 0 0-3.6 1.9l-.1.33s-.75 2.54 1 5.23' stroke='currentColor' />
    </svg>
  )
}
