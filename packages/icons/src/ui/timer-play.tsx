import type { Icon } from './types'

export const IconTimerPlay: Icon = ({
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
      data-slot='icon-ui-timer-play'
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
        d='M12 22.4a8.9 8.9 0 1 0 0-17.8 8.9 8.9 0 0 0 0 17.8m-2.27-4.05 7.06-3.72.26-2.03-6.46-4.02L8.81 9.6v7.53z'
        fill='currentColor'
      />
      <path
        d='M8.82 13.5c0-2.12 0-3.17.5-3.74a2 2 0 0 1 1.17-.65c.74-.13 1.64.42 3.44 1.53 1.67 1.02 2.5 1.53 2.74 2.21a2 2 0 0 1 0 1.3c-.23.68-1.07 1.19-2.74 2.21-1.8 1.1-2.7 1.66-3.44 1.53a2 2 0 0 1-1.17-.66c-.5-.56-.5-1.62-.5-3.73'
        stroke='currentColor'
      />
      <path d='M16.74 1.79H7.26' stroke='currentColor' />
      <circle cx='12' cy='13.4' r='8.8' stroke='currentColor' />
    </svg>
  )
}
