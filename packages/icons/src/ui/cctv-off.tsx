import type { Icon } from './types'

export const IconCctvOff: Icon = ({
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
      data-slot='icon-ui-cctv-off'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        x='3.47'
        y='2.77'
        width='14.71'
        height='9.53'
        rx='3'
        transform='rotate(15 3.47 2.77)'
        fill='currentColor'
      />
      <rect
        x='3.47'
        y='2.77'
        width='14.71'
        height='9.53'
        rx='3'
        transform='rotate(15 3.47 2.77)'
        stroke='currentColor'
      />
      <path
        d='m17 9.45 1.56-.13c2-.17 3.01-.26 3.51.37.5.62.2 1.6-.41 3.54-.6 1.92-.9 2.88-1.66 3.1-.76.24-1.54-.39-3.1-1.64l-1.23-1'
        stroke='currentColor'
      />
      <path
        d='M12.82 8.7a.57.57 0 1 1 0 1.14.57.57 0 0 1 0-1.14'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='m1.86 18.63.92-.16c1.61-.27 2.42-.4 3.03-.9.6-.49.91-1.25 1.53-2.76l.32-.79'
        stroke='currentColor'
      />
      <path d='M1.68 15.78v5.45' stroke='currentColor' />
      <path d='m2.74 2.74 18.52 18.52' stroke='currentColor' />
    </svg>
  )
}
