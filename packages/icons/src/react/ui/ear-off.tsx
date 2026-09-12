import type { Icon } from './types'

export const IconEarOff: Icon = ({
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
      data-slot='icon-ui-ear-off'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M5.2 7.13c1.49-3.63 4.6-5.3 7.38-5.3 3.52 0 6.15 1.7 6.75 5.29.85 5.05-2.8 5.77-3.24 8.68-.42 2.79-.13 3.46-.76 4.66-1 1.85-3.28 2.07-5.03 1.43-1.84-.67-2.38-2.3-2.7-3.73'
        stroke='currentColor'
      />
      <path
        d='M7.6 11.75c.97.52 2.05.1 2.45-1.02s-.45-1.98-1.5-2.28c.1-1.79 2.3-3.33 4.07-3.33 1.92 0 2.95 1.21 3.07 2.79.22 2.94-1.42 3.74-2.76 5.86 0 0-.73 1.06-.43 2.56'
        stroke='currentColor'
      />
      <path d='m2.71 2.71 18.58 18.58' stroke='currentColor' />
    </svg>
  )
}
