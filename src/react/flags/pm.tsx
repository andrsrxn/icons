import type { FlagIcon } from './types'

export const IconFlagPM: FlagIcon = ({
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
  const titleText = title ?? 'PM'

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
        <linearGradient id='pm-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='pm-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#138e16' />
          <stop offset='100%' stopColor='#0f7f12' />
        </linearGradient>
        <linearGradient id='pm-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#26a7dc' />
          <stop offset='100%' stopColor='#1b94c6' />
        </linearGradient>
        <linearGradient id='pm-d' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fbcd3f' />
          <stop offset='100%' stopColor='#ffce2f' />
        </linearGradient>
        <linearGradient id='pm-f' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#f03633' />
          <stop offset='100%' stopColor='#d82a28' />
        </linearGradient>
        <linearGradient id='pm-g' x1='82.842%' x2='20.426%' y1='18.137%' y2='78.479%'>
          <stop offset='0%' stopColor='#2aa854' />
          <stop offset='100%' stopColor='#219447' />
        </linearGradient>
        <linearGradient id='pm-i' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#262626' />
          <stop offset='100%' stopColor='#0d0d0d' />
        </linearGradient>
        <linearGradient id='pm-j' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#d7181d' />
          <stop offset='100%' stopColor='#c60e13' />
        </linearGradient>
        <linearGradient id='pm-k' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fbcd3f' />
          <stop offset='100%' stopColor='#fecb2f' />
        </linearGradient>
        <path id='pm-e' d='M0 0h7v5H0z' />
        <clipPath id='pm-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#pm-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#pm-a)' d='M0 0h21v15H0z' />
          <path fill='url(#pm-b)' d='M0 10h21v5H0z' />
          <path fill='url(#pm-c)' d='M0 15h21V0H0z' />
          <path
            fill='url(#pm-d)'
            d='M17.326 6.429C18.353 6.176 19 6.109 19 7c0 1.657-2.239 3-5 3S9 8.657 9 7c0-.89.647-.824 1.674-.571a4 4 0 0 1-.161-.563c-.287-1.35.137-2.584.947-2.757.81-.172 1.7.783 1.987 2.134.136.636.113 1.247-.034 1.733a7.4 7.4 0 0 0 1.174 0c-.147-.486-.17-1.097-.034-1.733.287-1.35 1.176-2.306 1.987-2.134.81.173 1.234 1.407.947 2.757a4 4 0 0 1-.161.563'
          />
          <path
            fill='url(#pm-a)'
            fillRule='nonzero'
            d='M15.776 12.947a.5.5 0 0 0 .448 0l2-1a.5.5 0 0 0-.448-.894L16 11.94l-1.776-.888a.5.5 0 0 0-.448 0L12 11.94l-1.776-.888a.5.5 0 0 0-.448.894l2 1a.5.5 0 0 0 .448 0L14 12.06z'
          />
          <mask id='pm-h' fill='#fff'>
            <use xlinkHref='#pm-e' />
          </mask>
          <use xlinkHref='#pm-e' fill='url(#pm-f)' />
          <path
            fill='url(#pm-g)'
            d='M4 2v-4H3v4h-4v1h4v4h1V3h4V2z'
            mask='url(#pm-h)'
            transform='rotate(-45 3.5 2.5)'
          />
          <path fill='url(#pm-a)' d='M4 2v-3H3v3H0v1h3v3h1V3h3V2z' mask='url(#pm-h)' />
          <path fill='url(#pm-a)' d='M0 5h7v5H0z' />
          <path
            fill='url(#pm-i)'
            d='M1.5 7a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m-1 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m-2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1'
          />
          <path fill='url(#pm-j)' d='M0 10h7v5H0z' />
          <path
            fill='url(#pm-k)'
            d='M3.5 12c-1.38 0-2.5-.224-2.5-.5s1.12-.5 2.5-.5 2.5.224 2.5.5-1.12.5-2.5.5m0 2c-1.38 0-2.5-.224-2.5-.5s1.12-.5 2.5-.5 2.5.224 2.5.5-1.12.5-2.5.5'
          />
        </g>
      </g>
    </svg>
  )
}
