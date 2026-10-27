import type { Icon } from './types'

export const IconVignette: Icon = ({
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
      data-slot='icon-ui-vignette'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M12 22.22a10.22 10.22 0 1 1 0-20.44 10.22 10.22 0 0 1 0 20.44M5.9 12a6.1 6.1 0 1 0 12.2 0 6.1 6.1 0 0 0-12.2 0'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <circle cx='12' cy='12' r='10.22' transform='rotate(90 12 12)' stroke='currentColor' />
      <path d='M12.8 17.93a5 5 0 0 1-1.95 0' stroke='currentColor' />
      <path d='M12.97 6.06a5 5 0 0 0-1.95 0' stroke='currentColor' />
      <path d='M17.97 11a5 5 0 0 1 0 2.08' stroke='currentColor' />
      <path d='M6.03 10.92a6 6 0 0 0 0 2.08' stroke='currentColor' />
      <path d='M15.51 7.15a5 5 0 0 1 1.44 1.44' stroke='currentColor' />
      <path d='M6.87 15.45A5 5 0 0 0 8.3 16.9' stroke='currentColor' />
      <path d='M7.04 8.54A5 5 0 0 1 8.48 7.1' stroke='currentColor' />
      <path d='M15.33 16.84a5 5 0 0 0 1.44-1.44' stroke='currentColor' />
    </svg>
  )
}
