import type { FlagIcon } from './types'

export const IconFlagVE: FlagIcon = ({
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
  const titleText = title ?? 'VE'

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      data-slot='ui-flag-ve'
      role={isHidden ? undefined : 'img'}
      aria-hidden={isHidden ? true : undefined}
      aria-label={isHidden ? undefined : ariaLabel}
      className={`ui-flag ${className ?? ''}`}
      {...props}>
      {isHidden || ariaLabel ? null : <title>{titleText}</title>}

      <defs>
        <linearGradient id='ve-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='ve-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#063191' />
          <stop offset='100%' stopColor='#03287c' />
        </linearGradient>
        <linearGradient id='ve-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#e2213b' />
          <stop offset='100%' stopColor='#cd1931' />
        </linearGradient>
        <linearGradient id='ve-d' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#ffd044' />
          <stop offset='100%' stopColor='#ffcb2f' />
        </linearGradient>
        <clipPath id='ve-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#ve-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#ve-a)' d='M0 0h21v15H0z' />
          <path fill='url(#ve-b)' d='M0 5h21v5H0z' />
          <path fill='url(#ve-c)' d='M0 10h21v5H0z' />
          <path
            fill='url(#ve-a)'
            d='M10.5 7a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m-2 .5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m4 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1M7.5 9a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m6 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1'
          />
          <path fill='url(#ve-d)' d='M0 0h21v5H0z' />
        </g>
      </g>
    </svg>
  )
}
