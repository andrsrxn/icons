import type { Icon } from './types'

export const IconChessRook: Icon = ({
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
      data-slot='icon-ui-chess-rook'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M14.77 4.25c1.33 0 2 0 2.29.44.3.43.06 1.05-.43 2.29l-.6 1.52c-.09.25-.14.37-.15.5s0 .26.04.53L17 16.7c.16 1.07.24 1.6-.06 1.95s-.84.35-1.92.35H9.17c-1.05 0-1.58 0-1.88-.34s-.23-.86-.1-1.9l.88-7.28c.03-.24.04-.36.03-.48a2 2 0 0 0-.14-.46l-.6-1.6c-.45-1.22-.68-1.83-.38-2.26s.95-.43 2.26-.43z'
        fill='currentColor'
      />
      <rect
        x='19'
        y='19'
        width='3.27'
        height='14'
        rx='1.5'
        transform='rotate(90 19 19)'
        stroke='currentColor'
      />
      <path d='M17.7 3.95H6.36' stroke='currentColor' />
      <path d='M15.9 9H8.16' stroke='currentColor' />
      <path
        d='m17.34 18.95-1.21-8.36A6 6 0 0 1 16 9.06c.05-.38.18-.74.46-1.46l.97-2.57c.2-.51.3-.77.34-1.04s.05-.54.05-1.09V1.67'
        stroke='currentColor'
      />
      <path
        d='m6.67 18.95 1.24-8.36c.11-.78.17-1.17.13-1.56s-.2-.76-.48-1.5l-.97-2.48c-.2-.52-.3-.78-.36-1.06-.05-.27-.05-.56-.05-1.12V1.72'
        stroke='currentColor'
      />
      <path d='M10 1.67V3.9' stroke='currentColor' />
      <path d='M14 1.67V3.9' stroke='currentColor' />
    </svg>
  )
}
