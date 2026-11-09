import type { Icon } from './types'

export const IconTimerReload: Icon = ({
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
      data-slot='icon-ui-timer-reload'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <ellipse opacity='.2' cx='11.97' cy='13.14' rx='9.16' ry='9.08' fill='currentColor' />
      <path d='M16.74 1.79H7.26' stroke='currentColor' />
      <path d='m14.37 10.82-2.96 2.96' stroke='currentColor' />
      <path d='M21.14 6.52v1.2c0 1.12 0 1.68-.35 2.03s-.9.35-2.03.35h-1.2' stroke='currentColor' />
      <path
        d='M18.93 18.89A9.08 9.08 0 1 1 11.9 4.07c5.01 0 7.33 3.99 8.36 5.4'
        stroke='currentColor'
      />
    </svg>
  )
}
