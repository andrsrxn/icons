import type { Icon } from './types'

export const IconKeyBackspace: Icon = ({
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
      data-slot='icon-ui-key-backspace'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M6.96 5.25h11.28c1.89 0 2.83 0 3.41.58.59.6.59 1.53.59 3.42v5.67c0 1.9 0 2.86-.6 3.45s-1.55.57-3.45.55l-11.23-.15L.7 12.1z'
        fill='currentColor'
      />
      <path
        d='m4.23 15.98.17.2c1.17 1.31 1.76 1.97 2.54 2.32s1.67.35 3.43.35h5c2.69 0 4.02 0 5-.61a4 4 0 0 0 1.25-1.25c.62-.98.62-2.32.62-5s0-4.02-.62-5a4 4 0 0 0-1.25-1.25c-.98-.61-2.31-.61-5-.61h-5c-1.76 0-2.65 0-3.43.35s-1.37 1-2.54 2.33L4.23 8c-1.7 1.9-2.54 2.85-2.54 4 0 1.13.84 2.08 2.54 3.98'
        stroke='currentColor'
      />
      <path d='M17.62 9.19 12 14.8' stroke='currentColor' />
      <path d='m12 9.19 5.62 5.62' stroke='currentColor' />
    </svg>
  )
}
