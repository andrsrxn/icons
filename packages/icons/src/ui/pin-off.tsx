import type { Icon } from './types'

export const IconPinOff: Icon = ({
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
      data-slot='icon-ui-pin-off'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M5.9 14.38c-2-2-3-3.01-2.76-4.09.24-1.07 1.57-1.55 4.25-2.5l5.34-1.91.22-.08a2 2 0 0 0 1.23-1.82q.03-.49.06-.62a2 2 0 0 1 3.22-1.2l.45.44 3.42 3.43c.33.33.5.5.6.62a2 2 0 0 1-1.04 3.1c-.15.04-.38.08-.85.14l-.3.05a2 2 0 0 0-1.5 1.37l-2.13 5.37c-1.01 2.56-1.52 3.84-2.58 4.05-1.05.22-2.02-.75-3.97-2.7z'
        fill='currentColor'
      />
      <path d='m2.7 2.7 18.6 18.6' stroke='currentColor' />
      <path
        d='M5.9 14.38c-2-2-3-3.01-2.76-4.09.24-1.07 1.57-1.55 4.25-2.5l5.34-1.91.22-.08a2 2 0 0 0 1.23-1.82q.03-.49.06-.62a2 2 0 0 1 3.22-1.2l.45.44 3.42 3.43c.33.33.5.5.6.62a2 2 0 0 1-1.04 3.1c-.15.04-.38.08-.85.14l-.3.05a2 2 0 0 0-1.5 1.37l-2.13 5.37c-1.01 2.56-1.52 3.84-2.58 4.05-1.05.22-2.02-.75-3.97-2.7z'
        stroke='currentColor'
      />
      <path d='m1.8 22.2 5.97-5.96' stroke='currentColor' />
    </svg>
  )
}
