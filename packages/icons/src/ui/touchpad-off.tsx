import type { Icon } from './types'

export const IconTouchpadOff: Icon = ({
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
      data-slot='icon-ui-touchpad-off'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M1.74 12h20.52c0 3.47 0 5.21-1 6.35l-.35.34c-1.13 1-2.87 1-6.35 1H9.44c-3.48 0-5.22 0-6.35-1l-.34-.34c-1-1.14-1-2.88-1-6.35'
        fill='currentColor'
      />
      <path
        d='M19.55 19.7h-9.8c-3.78 0-5.67 0-6.84-1.18-1.17-1.17-1.17-3.05-1.17-6.83V7.47c0-1.5 1.02-2.8 2.46-3.16'
        stroke='currentColor'
      />
      <path
        d='M8.4 4.3h6.16c3.48 0 5.22 0 6.35 1.01l.34.34c1 1.14 1 2.88 1 6.35v3.58c0 .9-.33 1.86-.33 1.86'
        stroke='currentColor'
      />
      <path d='M1.74 12h20.52' stroke='currentColor' />
      <path d='M12 19.7V12' stroke='currentColor' />
      <path d='m2.74 2.74 18.52 18.52' stroke='currentColor' />
    </svg>
  )
}
