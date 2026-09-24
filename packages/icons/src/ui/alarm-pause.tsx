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
        fillRule='evenodd'
        clipRule='evenodd'
        d='M21.76 12.64a9.76 9.76 0 1 1-19.52 0 9.76 9.76 0 0 1 19.52 0m-8.34 4.31V8.1h2.95v8.86zM7.62 8.1v9.14h3.06l-.33-9.14z'
        fill='currentColor'
      />
      <circle cx='12' cy='12.64' r='9.76' stroke='currentColor' />
      <path d='M22.6 5.16 18.91 1.5' stroke='currentColor' />
      <path d='M1.41 5.16 5.07 1.5' stroke='currentColor' />
      <rect x='7.47' y='7.88' width='3.18' height='9.53' rx='1' stroke='currentColor' />
      <rect x='13.36' y='7.88' width='3.18' height='9.53' rx='1' stroke='currentColor' />
    </svg>
  )
}
