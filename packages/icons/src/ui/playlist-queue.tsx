import type { Icon } from './types'

export const IconPlaylistQueue: Icon = ({
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
      data-slot='icon-ui-playlist-queue'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M20.33 14.74H3.67' stroke='currentColor' />
      <path d='M20.33 19.45H3.67' stroke='currentColor' />
      <rect
        opacity='.2'
        width='5.82'
        height='18.83'
        rx='2'
        transform='matrix(0 -1 -1 0 21.42 10.37)'
        fill='currentColor'
      />
      <rect
        width='5.82'
        height='18.83'
        rx='2'
        transform='matrix(0 -1 -1 0 21.42 10.37)'
        stroke='currentColor'
      />
    </svg>
  )
}
