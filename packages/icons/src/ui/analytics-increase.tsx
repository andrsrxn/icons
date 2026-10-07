import type { Icon } from './types'

export const IconAnalyticsIncrease: Icon = ({
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
      data-slot='icon-ui-analytics-increase'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        width='19.17'
        height='19.17'
        rx='3'
        transform='scale(1 -1)rotate(90 21.58 0)'
        fill='currentColor'
      />
      <rect
        width='19.17'
        height='19.17'
        rx='3'
        transform='scale(1 -1)rotate(90 21.58 0)'
        stroke='currentColor'
      />
      <path d='M6.74 18.12v-2.71' stroke='currentColor' />
      <path d='M12 18.12v-3.75' stroke='currentColor' />
      <path d='M17.26 18.12V12.7' stroke='currentColor' />
      <path d='M6.52 11.47s3.09.25 5.5-1c2.85-1.48 4.26-4.07 4.26-4.07' stroke='currentColor' />
      <path
        d='m13.71 6.34 1.03-.2c.93-.16 1.4-.24 1.73 0s.43.7.6 1.62l.18 1.03'
        stroke='currentColor'
      />
    </svg>
  )
}
