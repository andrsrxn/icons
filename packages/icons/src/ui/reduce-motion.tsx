import type { Icon } from './types'

export const IconReduceMotion: Icon = ({
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
      data-slot='icon-ui-reduce-motion'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <circle opacity='.2' cx='15.28' cy='12' r='7.06' fill='currentColor' />
      <circle cx='15.28' cy='12' r='7.06' stroke='currentColor' />
      <path d='M9.5 18.7c-.44.1-.7.12-1.16.1a5 5 0 0 1-1.03-.1' stroke='currentColor' />
      <path d='M9.7 5.3c-.44-.1-.7-.12-1.15-.1-.4 0-.64.02-1.04.1' stroke='currentColor' />
      <path d='M15.35 10.86a6 6 0 0 1 0 2.35' stroke='currentColor' />
      <path d='M1.86 10.79a7 7 0 0 0 0 2.35' stroke='currentColor' />
      <path d='M12.58 6.53a6 6 0 0 1 1.62 1.63' stroke='currentColor' />
      <path d='M2.81 15.9a6 6 0 0 0 1.63 1.62' stroke='currentColor' />
      <path d='M3.01 8.1a6 6 0 0 1 1.63-1.62' stroke='currentColor' />
      <path d='M12.37 17.47a6 6 0 0 0 1.62-1.63' stroke='currentColor' />
    </svg>
  )
}
