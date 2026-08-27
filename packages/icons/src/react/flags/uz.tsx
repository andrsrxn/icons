import type { FlagIcon } from './types'

export const IconFlagUZ: FlagIcon = ({
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
  const titleText = title ?? 'UZ'

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      data-slot='ui-flag-uz'
      role={isHidden ? undefined : 'img'}
      aria-hidden={isHidden ? true : undefined}
      aria-label={isHidden ? undefined : ariaLabel}
      className={`ui-flag ${className ?? ''}`}
      {...props}>
      {isHidden || ariaLabel ? null : <title>{titleText}</title>}

      <defs>
        <linearGradient id='uz-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='uz-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#04aac8' />
          <stop offset='100%' stopColor='#009ab6' />
        </linearGradient>
        <linearGradient id='uz-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#23c840' />
          <stop offset='100%' stopColor='#1eb639' />
        </linearGradient>
        <clipPath id='uz-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#uz-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#uz-a)' d='M0 0h21v15H0z' />
          <path fill='url(#uz-b)' d='M0 0h21v5H0z' />
          <path fill='url(#uz-c)' d='M0 10h21v5H0z' />
          <path fill='url(#uz-a)' d='M0 5h21v5H0z' />
          <path
            fill='url(#uz-a)'
            d='M4.334 1.253a1.5 1.5 0 1 0 0 2.495l-.084.002a1.25 1.25 0 1 1 .084-2.497M5.5 4a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m2-2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m0 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m-2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1'
          />
        </g>
      </g>
    </svg>
  )
}
