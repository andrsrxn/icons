import type { Icon } from './types'

export const IconBounceLeft: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

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
      data-slot='icon-ui-bounce-left'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      aria-labelledby={isLabelled && title && !ariaLabel ? 'bounce-left-title' : undefined}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      {isLabelled && title && !ariaLabel ? <title id={'bounce-left-title'}>{title}</title> : null}
      <circle
        opacity='.2'
        cx='2.93'
        cy='2.93'
        r='2.93'
        transform='matrix(-1 0 0 1 8.4 4.38)'
        fill='currentColor'
      />
      <path
        d='M21.46 14.4c-1.14.32-1.97.7-3.15 2.1s-1.6 3.12-1.6 3.12-.4-3.94-1.54-5.85a9 9 0 0 0-4.3-3.96'
        stroke='currentColor'
      />
      <circle
        cx='2.93'
        cy='2.93'
        r='2.93'
        transform='matrix(-1 0 0 1 8.4 4.38)'
        stroke='currentColor'
      />
    </svg>
  )
}
