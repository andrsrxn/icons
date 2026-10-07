import type { Icon } from './types'

export const IconAnalyticsDecrease: Icon = ({
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
      data-slot='icon-ui-analytics-decrease'
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
      <path d='M17.26 18.12V15.2' stroke='currentColor' />
      <path d='M12 18.12v-4.38' stroke='currentColor' />
      <path d='M6.74 18.12V12' stroke='currentColor' />
      <path d='M6.5 7.08s3.02-.75 5.6.1c3.05.99 4.86 3.31 4.86 3.31' stroke='currentColor' />
      <path
        d='m14.44 10.98 1.05.01c.94.02 1.41.03 1.71-.26s.3-.76.32-1.7l.02-1.05'
        stroke='currentColor'
      />
    </svg>
  )
}
