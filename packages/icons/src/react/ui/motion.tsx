import type { Icon } from './types'

export const IconMotion: Icon = ({
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
      data-slot='icon-ui-motion'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      aria-labelledby={isLabelled && title && !ariaLabel ? 'motion-title' : undefined}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      {isLabelled && title && !ariaLabel ? <title id={'motion-title'}>{title}</title> : null}
      <circle opacity='.2' cx='15.65' cy='12' r='5.84' fill='currentColor' />
      <circle cx='15.65' cy='12' r='5.84' stroke='currentColor' />
      <path
        d='M7.94 7.1s-1.67 1.46-1.67 5c0 3.42 1.67 4.8 1.67 4.8M3.6 8s-1 1.18-1 4.03c0 2.76 1 3.87 1 3.87'
        stroke='currentColor'
      />
    </svg>
  )
}
