import type { Icon } from './types'

export const IconAlarmPlay: Icon = ({
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
      data-slot='icon-ui-alarm-play'
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
        d='M12 22.4a9.76 9.76 0 1 0 0-19.52 9.76 9.76 0 0 0 0 19.52m-2.5-4.44 7.76-4.07.28-2.24-7.09-4.4L8.5 8.36v8.26z'
        fill='currentColor'
      />
      <circle cx='12' cy='12.64' r='9.76' stroke='currentColor' />
      <path d='M22.6 5.16 18.91 1.5' stroke='currentColor' />
      <path d='M1.41 5.16 5.07 1.5' stroke='currentColor' />
      <path
        d='M8.52 12.64c0-2.64 0-3.95.74-4.55a2 2 0 0 1 .59-.33c.9-.32 2.02.37 4.27 1.74 2.08 1.27 3.12 1.91 3.27 2.81a2 2 0 0 1 0 .65c-.15.9-1.2 1.54-3.27 2.82-2.25 1.37-3.37 2.06-4.27 1.74a2 2 0 0 1-.6-.33c-.73-.6-.73-1.92-.73-4.55'
        stroke='currentColor'
      />
    </svg>
  )
}
