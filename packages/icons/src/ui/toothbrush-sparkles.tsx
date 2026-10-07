import type { Icon } from './types'

export const IconToothbrushSparkles: Icon = ({
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
      data-slot='icon-ui-toothbrush-sparkles'
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
      <path
        opacity='.2'
        d='m7.42 3.86-.86-1.64-.88 1.64-1.67.92 1.67.86.88 1.91.86-1.9 1.82-.95z'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='m18.96 18.06-.9-1.7-.91 1.7-1.74.96 1.74.9.9 1.98.9-1.99 1.9-.98z'
        fill='currentColor'
      />
      <path d='M3.62 4.94c1.47 0 3.06-1.6 3.06-3.06' stroke='currentColor' />
      <path d='M15 19.18c1.54 0 3.18-1.66 3.18-3.18' stroke='currentColor' />
      <path d='M9.74 4.94c-1.47 0-3.06-1.6-3.06-3.06' stroke='currentColor' />
      <path d='M21.37 19.18c-1.53 0-3.19-1.65-3.19-3.18' stroke='currentColor' />
      <path d='M3.62 4.94c1.46 0 3.06 1.62 3.06 3.06' stroke='currentColor' />
      <path d='M15 19.18c1.53 0 3.18 1.69 3.18 3.19' stroke='currentColor' />
      <path d='M9.74 4.94c-1.45 0-3.06 1.6-3.06 3.06' stroke='currentColor' />
      <path d='M21.37 19.18c-1.51 0-3.19 1.66-3.19 3.19' stroke='currentColor' />
    </svg>
  )
}
