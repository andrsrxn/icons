import type { Icon } from './types'

export const IconBoxParachute: Icon = ({
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
      data-slot='icon-ui-box-parachute'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M12 1.7a9.4 9.4 0 0 0-9.23 7.6c-.13.7-.2 1.06.03 1.25.22.19.6.04 1.39-.24A24 24 0 0 1 12 9.02c3.45 0 6.02.58 7.86 1.3.74.28 1.11.43 1.34.24s.16-.53.04-1.21A9.4 9.4 0 0 0 12 1.69'
        fill='currentColor'
      />
      <rect
        opacity='.2'
        x='8.13'
        y='22.33'
        width='7.74'
        height='7.74'
        rx='2'
        transform='rotate(-90 8.13 22.33)'
        fill='currentColor'
      />
      <path
        d='M12 1.7a9.4 9.4 0 0 0-9.23 7.6c-.13.7-.2 1.06.03 1.25.22.19.6.04 1.39-.24A24 24 0 0 1 12 9.02c3.45 0 6.02.58 7.86 1.3.74.28 1.11.43 1.34.24s.16-.53.04-1.21A9.4 9.4 0 0 0 12 1.69'
        stroke='currentColor'
      />
      <path d='m19.74 10.51-3.87 5.6' stroke='currentColor' />
      <path d='m4.25 10.51 3.88 5.6' stroke='currentColor' />
      <rect x='8.13' y='14.59' width='7.74' height='7.74' rx='2' stroke='currentColor' />
      <path d='M12 14.59v3.5' stroke='currentColor' />
    </svg>
  )
}
