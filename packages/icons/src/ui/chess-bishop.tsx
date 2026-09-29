import type { Icon } from './types'

export const IconChessBishop: Icon = ({
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
      data-slot='icon-ui-chess-bishop'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M5.57 9.85C3.74 14.3 7.06 19 10.53 19h4.08q.16 0 .25-.02c.07-.02.11-.05.2-.1 1-.62 5.17-3.58 2.65-9.07-1.34-2.9-4.01-5.99-5.25-7.34-.3-.33-.45-.5-.66-.5s-.37.15-.69.46c-1.36 1.34-4.34 4.5-5.54 7.42'
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
        d='M12 1.77c2.66 3.17 5.6 6.17 6.23 9.06.84 3.87-.65 7.17-3.37 8.13'
        stroke='currentColor'
      />
      <path
        d='M11.99 1.8c-2.67 3.18-5.6 6.18-6.23 9.07-.85 3.87.65 7.17 3.37 8.13'
        stroke='currentColor'
      />
      <path d='M15.97 1.77H8.04' stroke='currentColor' />
      <path d='m15.97 7-3.18 3.18' stroke='currentColor' />
    </svg>
  )
}
