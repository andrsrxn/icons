import type { Icon } from './types'

export const IconVideoOut: Icon = ({
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
      data-slot='icon-ui-video-out'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        d='m16 9.14.93-.45c2.18-1.04 3.28-1.56 4.12-1.19a2 2 0 0 1 .49.32c.7.6.7 1.8.7 4.22 0 2.4 0 3.59-.7 4.18a2 2 0 0 1-.48.32c-.83.37-1.92-.13-4.09-1.13l-.97-.45'
        stroke='currentColor'
      />
      <path d='M8.92 15.19v-5.6' stroke='currentColor' />
      <path
        d='m11.94 11.37-.9-.89c-1-1-1.5-1.5-2.11-1.5-.62 0-1.13.5-2.13 1.5l-.9.9'
        stroke='currentColor'
      />
      <path
        opacity='.2'
        d='M1.7 12c0-2.73 0-4.1.63-5.08a4 4 0 0 1 1.2-1.2c.99-.64 2.35-.64 5.08-.64h.68c2.72 0 4.09 0 5.07.64a4 4 0 0 1 1.2 1.2c.64.98.64 2.35.64 5.07s0 4.09-.64 5.08a4 4 0 0 1-1.2 1.2c-.98.63-2.35.63-5.07.63H8.6c-2.73 0-4.1 0-5.08-.63a4 4 0 0 1-1.2-1.2c-.64-1-.64-2.35-.64-5.08'
        fill='currentColor'
      />
      <path
        d='M8.8 18.92h.3c2.73 0 4.1 0 5.09-.64a4 4 0 0 0 1.19-1.19c.64-1 .64-2.36.64-5.09v0c0-2.73 0-4.1-.64-5.09a4 4 0 0 0-1.19-1.19c-1-.64-2.36-.64-5.09-.64h-.3c-2.74 0-4.1 0-5.1.64a4 4 0 0 0-1.19 1.19c-.64 1-.64 2.36-.64 5.09v0c0 2.73 0 4.1.64 5.09a4 4 0 0 0 1.2 1.19c.98.64 2.35.64 5.08.64'
        stroke='currentColor'
      />
    </svg>
  )
}
