import type { Icon } from './types'

export const IconChessBoard: Icon = ({
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
      data-slot='icon-ui-chess-board'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        width='6.14'
        height='6.14'
        rx='2'
        transform='matrix(0 -1 -1 0 8.75 8.75)'
        fill='currentColor'
      />
      <rect
        opacity='.2'
        width='6.14'
        height='6.14'
        rx='2'
        transform='scale(1 -1)rotate(90 15.07 0)'
        fill='currentColor'
      />
      <rect
        opacity='.2'
        width='6.14'
        height='6.14'
        rx='2'
        transform='scale(1 -1)rotate(90 21.21 0)'
        fill='currentColor'
      />
      <rect
        opacity='.2'
        width='6.14'
        height='6.14'
        rx='2'
        transform='matrix(0 -1 -1 0 21.21 8.93)'
        fill='currentColor'
      />
      <rect
        opacity='.2'
        width='6.14'
        height='6.14'
        rx='2'
        transform='matrix(0 -1 -1 0 8.75 21.22)'
        fill='currentColor'
      />
      <rect
        width='18.78'
        height='18.78'
        rx='3'
        transform='matrix(0 -1 -1 0 21.4 21.4)'
        stroke='currentColor'
      />
      <path d='M8.75 2.6v18.8' stroke='currentColor' />
      <path d='M15.24 2.6v18.8' stroke='currentColor' />
      <path d='M2.6 15.25h18.8' stroke='currentColor' />
      <path d='M2.6 8.75h18.8' stroke='currentColor' />
    </svg>
  )
}
