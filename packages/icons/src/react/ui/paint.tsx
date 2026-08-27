import type { Icon } from './types'

export const IconPaint: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='ui-icon-paint'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        opacity='.2'
        d='m2.58 13.14 6.5 6.37 10.17-8.38H4.03zm16.67 8.53a2.2 2.2 0 0 1-2.2-2.21c0-1.22 2.01-2.87 2.2-2.87.25 0 2.2 1.65 2.2 2.87a2.2 2.2 0 0 1-2.2 2.2'
        fill='currentColor'
      />
      <path
        d='M6.28 17.2c1.33 1.33 2 2 2.83 2s1.5-.67 2.83-2l2.66-2.67a4 4 0 0 1 .61-.53c.14-.08.3-.15.6-.27 2-.81 3.01-1.22 3.34-1.99a2 2 0 0 0 .15-.76c0-.83-.76-1.6-2.3-3.14L13.95 4.8c-1.46-1.46-2.2-2.2-2.96-2.23a2 2 0 0 0-1.07.25c-.67.37-1 1.35-1.68 3.3-.1.32-.16.47-.24.62l-.13.21c-.1.14-.22.25-.45.49l-2.63 2.62c-1.33 1.34-2 2-2 2.83s.67 1.5 2 2.83l.62.61zm-2.53-5.9h14.9m.6 10.43a2.2 2.2 0 0 1-2.2-2.2c0-1.6 2.2-3.4 2.2-3.4s2.2 1.74 2.2 3.4a2.2 2.2 0 0 1-2.2 2.2'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
