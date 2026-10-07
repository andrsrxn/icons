import type { Icon } from './types'

export const IconProgressLow: Icon = ({
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
      data-slot='icon-ui-progress-low'
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
        d='M18.96 12A6.96 6.96 0 0 0 12 5.04V12z'
        fill='currentColor'
      />
      <circle cx='12' cy='12' r='10.25' stroke='currentColor' />
      <path
        d='M18.68 10.03a7 7 0 0 0-4.7-4.7c-.79-.24-1.18-.35-1.58-.05s-.4.78-.4 1.76V10c0 .94 0 1.41.3 1.7.29.3.76.3 1.7.3h2.96c.98 0 1.46 0 1.76-.4s.19-.8-.04-1.57'
        stroke='currentColor'
      />
    </svg>
  )
}
