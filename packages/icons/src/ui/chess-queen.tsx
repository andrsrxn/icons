import type { Icon } from './types'

export const IconChessQueen: Icon = ({
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
      data-slot='icon-ui-chess-queen'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M16.54 10.85c.19-.1.28-.15.37-.18a1 1 0 0 1 .67.02c.1.03.18.1.36.2l.12.08c.39.25.58.37.7.54a1 1 0 0 1 .16.5c.02.2-.06.42-.21.85l-1.7 4.8c-.22.65-.33.97-.6 1.16-.25.18-.6.18-1.28.18H8.9c-.7 0-1.05 0-1.3-.19-.27-.19-.38-.52-.6-1.18L5.35 12.6c-.1-.31-.16-.47-.16-.63a1 1 0 0 1 .13-.51c.08-.14.2-.25.45-.47l.04-.03c.24-.22.36-.33.49-.4a1 1 0 0 1 .65-.06c.15.03.29.1.57.27.45.26.67.38.88.4a1 1 0 0 0 .85-.32c.14-.15.22-.4.39-.9l1.23-3.7c.06-.2.1-.3.14-.38a1 1 0 0 1 .7-.5c.08-.02.18-.02.39-.02.2 0 .3 0 .4.02a1 1 0 0 1 .7.5c.04.08.07.18.13.38l1.25 3.83c.13.38.19.58.28.7a1 1 0 0 0 1 .4c.15-.04.33-.13.68-.33'
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
      <path
        d='M6.4 9.43a1.83 1.83 0 0 1-1.83 1.83 1.83 1.83 0 1 1 1.84-1.83'
        stroke='currentColor'
      />
      <path
        d='M21.26 9.43a1.83 1.83 0 0 1-1.83 1.83 1.83 1.83 0 1 1 1.83-1.83'
        stroke='currentColor'
      />
      <path
        d='M13.97 3.52a1.83 1.83 0 0 1-1.84 1.83 1.83 1.83 0 1 1 1.84-1.83'
        stroke='currentColor'
      />
      <path d='M5.08 11.26 8 19' stroke='currentColor' />
      <path d='M19 11.26 16.08 19' stroke='currentColor' />
      <path d='M11.07 5.6 9.02 12l-2.8-1.7' stroke='currentColor' />
      <path d='m12.98 5.57 2 6.43 2.83-1.7' stroke='currentColor' />
    </svg>
  )
}
