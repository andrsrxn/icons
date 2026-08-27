import type { FlagIcon } from './types'

export const IconFlagBL: FlagIcon = ({
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
  const titleText = title ?? 'BL'

  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      data-slot='ui-flag-bl'
      role={isHidden ? undefined : 'img'}
      aria-hidden={isHidden ? true : undefined}
      aria-label={isHidden ? undefined : ariaLabel}
      className={`ui-flag ${className ?? ''}`}
      {...props}>
      {isHidden || ariaLabel ? null : <title>{titleText}</title>}

      <defs>
        <linearGradient id='bl-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='bl-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#216cd3' />
          <stop offset='100%' stopColor='#1557b2' />
        </linearGradient>
        <linearGradient id='bl-d' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#f7e14b' />
          <stop offset='100%' stopColor='#f7df3e' />
        </linearGradient>
        <linearGradient id='bl-f' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#e12539' />
          <stop offset='100%' stopColor='#ca192c' />
        </linearGradient>
        <path
          id='bl-b'
          d='M.5 0h7v4.491c0 .557-.336 1.297-.76 1.66L5.147 7.518c-.633.542-1.662.54-2.292 0L1.259 6.15C.84 5.791.5 5.05.5 4.491z'
        />
        <clipPath id='bl-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#bl-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#bl-a)' d='M0 0h21v15H0z' />
          <g transform='translate(6.5 5)'>
            <mask id='bl-e' fill='#fff'>
              <use xlinkHref='#bl-b' />
            </mask>
            <use xlinkHref='#bl-b' fill='url(#bl-c)' />
            <path
              fill='url(#bl-d)'
              d='M2 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1'
              mask='url(#bl-e)'
            />
            <path
              fill='url(#bl-d)'
              d='M2.5 6.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1M4 7a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m1.5-.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1'
              mask='url(#bl-e)'
            />
            <path fill='url(#bl-f)' d='M.5 3h7v2h-7z' mask='url(#bl-e)' />
            <circle cx='4' cy='4' r='1' fill='#fff' mask='url(#bl-e)' />
          </g>
          <path
            fill='url(#bl-d)'
            d='M6.5 3.5s2-.5 4-.5 4 .5 4 .5l-.5 2S12.25 5 10.5 5 7 5.5 7 5.5z'
          />
          <path
            fill='#5e5216'
            d='M10.5 4.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m-4 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1'
          />
        </g>
      </g>
    </svg>
  )
}
