import type { Icon } from './types'

export const IconEarX: Icon = ({
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
      data-slot='icon-ui-ear-x'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M7.38 3.88 5.01 7.1v7.57l2.38 2.41a2 2 0 0 1 .5.9L8.43 20a2 2 0 0 0 1.18 1.35l1.47.59a2 2 0 0 0 1.6-.04l1.67-.79a2 2 0 0 0 1.1-1.41l.84-4.12a2 2 0 0 1 .24-.62l2.64-4.48a2 2 0 0 0 .23-1.43l-.82-3.86a2 2 0 0 0-1.05-1.37l-3.4-1.73a2 2 0 0 0-1.45-.14L8.45 3.14a2 2 0 0 0-1.07.74'
        fill='currentColor'
      />
      <path
        d='M5.2 7.13c1.49-3.63 4.6-5.3 7.38-5.3 3.52 0 6.15 1.7 6.75 5.29.85 5.05-2.8 5.77-3.24 8.68-.42 2.79-.13 3.46-.76 4.66-1 1.85-3.28 2.07-5.03 1.43a2.5 2.5 0 0 1-1.54-1.43'
        stroke='currentColor'
      />
      <path
        d='M10.05 10.73c.4-1.13-.45-1.98-1.5-2.28.1-1.79 2.3-3.33 4.07-3.33 1.92 0 2.95 1.21 3.07 2.79.22 2.94-1.42 3.74-2.76 5.86 0 0-.73 1.06-.43 2.56'
        stroke='currentColor'
      />
      <path d='M7.57 17.6 2.97 13' stroke='currentColor' />
      <path d='m7.58 13-4.6 4.6' stroke='currentColor' />
    </svg>
  )
}
