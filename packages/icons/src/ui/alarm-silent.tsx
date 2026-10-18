import type { Icon } from './types'

export const IconAlarmSilent: Icon = ({
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
      data-slot='icon-ui-alarm-silent'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <circle opacity='.2' cx='12' cy='12.64' r='9.76' fill='currentColor' />
      <circle cx='12' cy='12.64' r='9.76' stroke='currentColor' />
      <path d='M22.6 5.16 18.91 1.5' stroke='currentColor' />
      <path d='M1.41 5.16 5.07 1.5' stroke='currentColor' />
      <path d='m2.24 22.4 2.33-3.2' stroke='currentColor' />
      <path d='m21.76 22.4-2.33-3.2' stroke='currentColor' />
      <path
        d='M9.1 9h4.08c1.04 0 1.55 0 1.68.32.13.3-.24.67-.97 1.4l-3.86 3.84c-.73.73-1.1 1.1-.97 1.4.13.31.64.31 1.67.31h4.23'
        stroke='currentColor'
      />
    </svg>
  )
}
