import type { Icon } from './types'

export const IconTimerOff: Icon = ({
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
      data-slot='icon-ui-timer-off'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <circle opacity='.2' cx='12' cy='13.4' r='8.8' fill='currentColor' />
      <path d='M6.5 6.53A8.78 8.78 0 0 0 12 22.2a8.8 8.8 0 0 0 6.86-3.3' stroke='currentColor' />
      <path d='M9.01 5.12a8.8 8.8 0 0 1 11.26 11.26' stroke='currentColor' />
      <path d='M16.73 1.82H7.27' stroke='currentColor' />
      <path d='m2.67 2.67 18.66 18.66' stroke='currentColor' />
      <path d='m12.44 12.74-1.03 1.03' stroke='currentColor' />
      <path d='m15.53 9.66-.94.94-.24.24' stroke='currentColor' />
    </svg>
  )
}
