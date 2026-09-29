import type { Icon } from './types'

export const IconDronFront: Icon = ({
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
      data-slot='icon-ui-dron-front'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        width='4.97'
        height='6.99'
        rx='2.49'
        transform='matrix(0 -1 -1 0 15.5 14.53)'
        fill='currentColor'
      />
      <rect
        width='4.97'
        height='6.99'
        rx='2.49'
        transform='matrix(0 -1 -1 0 15.5 14.53)'
        stroke='currentColor'
      />
      <path
        d='M4.5 6.28v1.48c0 1.9 0 2.85.53 3.47l.15.17c.58.56 1.47.56 3.24.56'
        stroke='currentColor'
      />
      <path
        d='M19.49 6.28v1.55c0 1.83 0 2.75-.48 3.36q-.1.14-.23.25c-.57.52-1.42.52-3.13.52'
        stroke='currentColor'
      />
      <path d='M10.94 14.52c-1.03 0-2.07.38-2.63.93a3 3 0 0 0-.98 1.85' stroke='currentColor' />
      <path d='M13.08 14.52c1 0 2.05.38 2.61.93.58.58.83 1.05.98 1.85' stroke='currentColor' />
      <path d='M1.61 7.46h5.76' stroke='currentColor' />
      <path d='M16.59 7.46h5.8' stroke='currentColor' />
    </svg>
  )
}
