import type { Icon } from './types'

export const IconPin: Icon = ({
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
      data-slot='icon-ui-pin'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M4.67 16.08c-1.86-1.86-2.8-2.8-2.6-3.83s1.4-1.57 3.8-2.65l6.79-3.03c.3-.13.45-.2.58-.28a2 2 0 0 0 .8-1.02c.05-.15.08-.31.14-.64.19-1.03.28-1.55.46-1.85a2 2 0 0 1 2.57-.8c.32.14.7.51 1.44 1.26l2.1 2.1c.83.83 1.24 1.24 1.4 1.62a2 2 0 0 1-.67 2.35c-.32.25-.89.38-2.03.66-.34.08-.5.13-.66.2a2 2 0 0 0-.84.67c-.1.14-.17.3-.33.61l-3.27 6.79c-1.11 2.31-1.67 3.47-2.69 3.64-1.01.17-1.92-.73-3.74-2.55z'
        fill='currentColor'
      />
      <path
        d='M4.67 16.08c-1.86-1.86-2.8-2.8-2.6-3.83s1.4-1.57 3.8-2.65l6.79-3.03c.3-.13.45-.2.58-.28a2 2 0 0 0 .8-1.02c.05-.15.08-.31.14-.64.19-1.03.28-1.55.46-1.85a2 2 0 0 1 2.57-.8c.32.14.7.51 1.44 1.26l2.1 2.1c.83.83 1.24 1.24 1.4 1.62a2 2 0 0 1-.67 2.35c-.32.25-.89.38-2.03.66-.34.08-.5.13-.66.2a2 2 0 0 0-.84.67c-.1.14-.17.3-.33.61l-3.27 6.79c-1.11 2.31-1.67 3.47-2.69 3.64-1.01.17-1.92-.73-3.74-2.55z'
        stroke='currentColor'
      />
      <path d='m1.85 22.17 4.2-4.2' stroke='currentColor' />
    </svg>
  )
}
