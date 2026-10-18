import type { Icon } from './types'

export const IconAlarmPause: Icon = ({
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
      data-slot='icon-ui-alarm-pause'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M21.76 12.64a9.76 9.76 0 1 1-19.52 0 9.76 9.76 0 0 1 19.52 0'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <circle cx='12' cy='12.64' r='9.76' stroke='currentColor' />
      <path d='M22.6 5.16 18.91 1.5' stroke='currentColor' />
      <path d='M1.41 5.16 5.07 1.5' stroke='currentColor' />
      <path d='m2.24 22.4 2.33-3.2' stroke='currentColor' />
      <path d='m21.76 22.4-2.33-3.2' stroke='currentColor' />
      <path d='M9.81 16.17V9.11' stroke='currentColor' />
      <path d='M14.19 16.17V9.11' stroke='currentColor' />
    </svg>
  )
}
