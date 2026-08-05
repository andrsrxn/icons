import type { Icon } from './types'

export const IconSmileyBlink: Icon = ({
  size = 24,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='smiley-blink'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <path
        fill='currentColor'
        d='M20.358 12a8.358 8.358 0 1 1-16.716 0 8.358 8.358 0 0 1 16.716 0Z'
        opacity='.2'
      />
      <path fill='currentColor' d='M9.915 9.49a.594.594 0 1 1-1.188 0 .594.594 0 0 1 1.188 0Z' />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M9.009 15s1.036 1.006 2.995 1.006C13.964 16.006 15 15 15 15m-1.184-5.51h2M20.358 12a8.358 8.358 0 1 1-16.716 0 8.358 8.358 0 0 1 16.716 0ZM9.915 9.49a.594.594 0 1 1-1.188 0 .594.594 0 0 1 1.188 0Z'
      />
    </svg>
  )
}
