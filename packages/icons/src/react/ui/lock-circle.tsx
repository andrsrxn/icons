import type { Icon } from './types'

export const IconLockCircle: Icon = ({
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
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='icon-ui-lock-circle'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      aria-labelledby={isLabelled && title && !ariaLabel ? 'lock-circle-title' : undefined}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      {isLabelled && title && !ariaLabel ? <title id={'lock-circle-title'}>{title}</title> : null}
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M2.57 12a9.43 9.43 0 1 0 18.86 0 9.43 9.43 0 0 0-18.86 0m8.27-4.78h2.9s-.09 3.38 0 3.38c1.51.1 2.72 1.74 2.82 3.24-.1 1.65-1.3 3.14-2.81 3.24h-3.09c-1.5-.1-2.7-1.73-2.8-3.24.1-1.5 1.3-3.14 2.8-3.24.1 0 .18-3.38.18-3.38'
        fill='currentColor'
      />
      <circle cx='12' cy='12' r='9.43' transform='rotate(90 12 12)' stroke='currentColor' />
      <rect x='7.85' y='10.6' width='8.7' height='6.49' rx='2' stroke='currentColor' />
      <path d='m14.41 10.6-.21-2.01a1.99 1.99 0 0 0-3.95-.02l-.23 2.03' stroke='currentColor' />
    </svg>
  )
}
