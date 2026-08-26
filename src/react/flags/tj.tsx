import type { FlagIcon } from './types'

export const IconFlagTJ: FlagIcon = ({
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
  const titleText = title ?? 'TJ'

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      data-slot='ui-flag-tj'
      role={isHidden ? undefined : 'img'}
      aria-hidden={isHidden ? true : undefined}
      aria-label={isHidden ? undefined : ariaLabel}
      className={`ui-flag ${className ?? ''}`}
      {...props}>
      {isHidden || ariaLabel ? null : <title>{titleText}</title>}

      <defs>
        <linearGradient id='tj-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='tj-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#d9101c' />
          <stop offset='100%' stopColor='#ca0814' />
        </linearGradient>
        <linearGradient id='tj-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#0f7811' />
          <stop offset='100%' stopColor='#0a650c' />
        </linearGradient>
        <clipPath id='tj-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#tj-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#tj-a)' d='M0 0h21v15H0z' />
          <path fill='url(#tj-b)' d='M0 0h21v5H0z' />
          <path fill='url(#tj-c)' d='M0 10h21v5H0z' />
          <path fill='url(#tj-a)' d='M0 5h21v5H0z' />
          <path
            fill='#fad14e'
            d='M10.066 8A3 3 0 0 1 10 7.5a.5.5 0 1 1 1 0c0 .09-.024.283-.066.5h.57c.274 0 .496.232.496.5 0 .276-.216.5-.495.5h-2.01A.503.503 0 0 1 9 8.5c0-.276.216-.5.495-.5zM9.5 7a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m2 1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m-6 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1'
          />
        </g>
      </g>
    </svg>
  )
}
