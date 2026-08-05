import type { FlagIcon } from './types'

export const IconFlagLY: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  title,
  'aria-label': ariaLabel,
  'aria-hidden': ariaHidden,
  ...props
}) => {
  const isHidden = ariaHidden === true
  const titleText = title ?? 'LY'

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      role={isHidden ? undefined : 'img'}
      aria-hidden={isHidden ? true : undefined}
      aria-label={isHidden ? undefined : ariaLabel}
      className={`ui-icon-flag ${className ?? ''}`}
      {...props}>
      {isHidden || ariaLabel ? null : <title>{titleText}</title>}

      <defs>
        <linearGradient id='ly-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='ly-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#262626' />
          <stop offset='100%' stopColor='#0d0d0d' />
        </linearGradient>
        <linearGradient id='ly-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#34b857' />
          <stop offset='100%' stopColor='#2b9e4a' />
        </linearGradient>
        <linearGradient id='ly-d' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#f41f34' />
          <stop offset='100%' stopColor='#e60b21' />
        </linearGradient>
        <clipPath id='ly-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#ly-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#ly-a)' d='M0 0h21v15H0z' />
          <path fill='url(#ly-b)' d='M0 5h21v5H0z' />
          <path fill='url(#ly-c)' d='M0 10h21v5H0z' />
          <path fill='url(#ly-d)' d='M0 0h21v5H0z' />
          <path
            fill='url(#ly-a)'
            d='m11.334 6.253-.084-.003a1.25 1.25 0 1 0 .084 2.497 1.5 1.5 0 1 1 0-2.495M11.5 8a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1'
          />
        </g>
      </g>
    </svg>
  )
}
