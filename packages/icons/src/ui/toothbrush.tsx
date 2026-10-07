import type { Icon } from './types'

export const IconToothbrush: Icon = ({
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
      data-slot='icon-ui-toothbrush'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='m1.8 22.1 5.83-5.74c.27-.27.41-.4.57-.5.16-.11.33-.19.68-.33l4.98-2.1c.36-.16.54-.23.7-.34.16-.1.3-.25.57-.52l6.68-6.68c.66-.66.66-1.72 0-2.38'
        stroke='currentColor'
      />
      <path
        d='m14.75 12.45-2.1-2.1a1.58 1.58 0 0 1 .79-2.68l.2-.04a2 2 0 0 0 1.5-1.41l.03-.13c.18-.63.68-1.1 1.32-1.25a1.8 1.8 0 0 0 1.34-1.33l.07-.3a1.67 1.67 0 0 1 2.83-.8l1.2 1.22'
        stroke='currentColor'
      />
      <rect
        opacity='.2'
        width='4.22'
        height='11.67'
        rx='2'
        transform='scale(-1 1)rotate(-45 -6.04 29.81)'
        fill='currentColor'
      />
    </svg>
  )
}
