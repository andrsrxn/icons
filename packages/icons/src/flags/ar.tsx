import type { FlagIcon } from './types'

export const IconFlagAR: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'AR',
  'aria-hidden': ariaHidden,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel)
  const isHidden = ariaHidden === true

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      data-slot='icon-flag-ar'
      role={isHidden || !isLabelled ? undefined : 'img'}
      aria-hidden={isHidden || !isLabelled ? true : undefined}
      aria-label={isHidden ? undefined : ariaLabel}
      focusable={isHidden || !isLabelled ? false : undefined}
      className={`icon-flag ${className ?? ''}`.trim()}
      {...props}>
      <defs>
        <defs>
          <linearGradient id='ar-a' x1='50%' x2='50%' y1='0%' y2='100%'>
            <stop offset='0%' stopColor='#fff' />
            <stop offset='100%' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient id='ar-b' x1='50%' x2='50%' y1='0%' y2='100%'>
            <stop offset='0%' stopColor='#88bbe8' />
            <stop offset='100%' stopColor='#76addd' />
          </linearGradient>
        </defs>
        <clipPath id='ar-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#ar-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#ar-a)' d='M0 0h21v15H0z' />
          <path fill='url(#ar-b)' d='M0 0h21v5H0z' />
          <path fill='url(#ar-b)' d='M0 10h21v5H0z' />
          <path fill='url(#ar-a)' d='M0 5h21v5H0z' />
          <path fill='#db7a2c' fillRule='nonzero' d='M10.5 9.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4' />
          <circle cx='10.5' cy='7.5' r='1.5' fill='#f4b32e' />
        </g>
      </g>
    </svg>
  )
}
