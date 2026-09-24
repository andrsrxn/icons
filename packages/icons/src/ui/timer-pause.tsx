import type { Icon } from './types'

export const IconTimerPause: Icon = ({
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
      data-slot='icon-ui-timer-pause'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M20.9 13.5a8.9 8.9 0 1 1-17.8 0 8.9 8.9 0 0 1 17.8 0m-7.6 3.93V9.34h2.69v8.1zM8 9.34v8.35h2.8l-.3-8.35z'
        fill='currentColor'
      />
      <rect x='7.87' y='9.15' width='2.9' height='8.69' rx='1' stroke='currentColor' />
      <rect x='13.24' y='9.15' width='2.9' height='8.69' rx='1' stroke='currentColor' />
      <circle cx='12' cy='13.4' r='8.8' stroke='currentColor' />
      <path d='M16.74 1.79H7.26' stroke='currentColor' />
    </svg>
  )
}
