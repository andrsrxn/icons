import type { Icon } from './types'

export const IconPlaylistLast: Icon = ({
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
      data-slot='icon-ui-playlist-last'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        x='21.58'
        y='13.63'
        width='5.82'
        height='13'
        rx='2'
        transform='rotate(90 21.58 13.63)'
        fill='currentColor'
      />
      <path d='M20.83 9.26H9.33' stroke='currentColor' />
      <path d='M20.83 4.55H9.33' stroke='currentColor' />
      <rect
        x='21.58'
        y='13.63'
        width='5.82'
        height='13'
        rx='2'
        transform='rotate(90 21.58 13.63)'
        stroke='currentColor'
      />
      <path
        d='m2.42 18.58.5-.22c1.74-.78 2.62-1.17 2.62-1.82s-.88-1.04-2.63-1.83l-.49-.22'
        stroke='currentColor'
      />
    </svg>
  )
}
