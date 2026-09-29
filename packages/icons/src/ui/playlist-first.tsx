import type { Icon } from './types'

export const IconPlaylistFirst: Icon = ({
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
      data-slot='icon-ui-playlist-first'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        width='5.82'
        height='13'
        rx='2'
        transform='matrix(0 -1 -1 0 21.58 10.37)'
        fill='currentColor'
      />
      <path d='M20.83 14.74H9.33' stroke='currentColor' />
      <path d='M20.83 19.45H9.33' stroke='currentColor' />
      <rect
        width='5.82'
        height='13'
        rx='2'
        transform='matrix(0 -1 -1 0 21.58 10.37)'
        stroke='currentColor'
      />
      <path
        d='m2.42 5.42.5.22c1.74.78 2.62 1.17 2.62 1.82S4.66 8.5 2.9 9.29l-.49.22'
        stroke='currentColor'
      />
    </svg>
  )
}
