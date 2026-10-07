import type { Icon } from './types'

export const IconTimerReload: Icon = ({
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
      data-slot='icon-ui-timer-reload'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <ellipse opacity='.2' cx='12.34' cy='13.14' rx='9.16' ry='9.08' fill='currentColor' />
      <path d='M16.74 1.79H7.26' stroke='currentColor' />
      <path d='m14.37 10.82-2.96 2.96' stroke='currentColor' />
      <path
        d='M20.93 8.93c-3.12-4.1-6.2-4.87-8.67-4.87a9.08 9.08 0 1 0 6.37 15.55'
        stroke='currentColor'
      />
      <path
        d='M21.72 5.91v.91c0 1.42 0 2.12-.44 2.56s-1.15.44-2.56.44h-.92'
        stroke='currentColor'
      />
    </svg>
  )
}
