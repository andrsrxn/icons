import type { FlagIcon } from './types'

export const IconFlagSX: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'SX',
  'aria-hidden': ariaHidden,
  preserveAspectRatio,
  cover,
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
      data-slot='icon-flag-sx'
      role={isHidden || !isLabelled ? undefined : 'img'}
      aria-hidden={isHidden || !isLabelled ? true : undefined}
      aria-label={isHidden ? undefined : ariaLabel}
      focusable={isHidden || !isLabelled ? false : undefined}
      preserveAspectRatio={cover ? 'xMidYMid slice' : preserveAspectRatio}
      className={`icon-flag ${className ?? ''}`.trim()}
      {...props}>
      <defs>
        <defs>
          <linearGradient
            id='sx-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='sx-c'
            x1='10.5'
            x2='10.5'
            y1='7'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#0740aa' />
            <stop offset='1' stopColor='#012f85' />
          </linearGradient>
          <linearGradient
            id='sx-d'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='7'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#f02c33' />
            <stop offset='1' stopColor='#d82027' />
          </linearGradient>
          <linearGradient id='sx-e' x1='5' x2='5' y1='0' y2='15' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='sx-f'
            x1='3.5'
            x2='3.5'
            y1='4.5'
            y2='9.1'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#e72c33' />
            <stop offset='1' stopColor='#d82027' />
          </linearGradient>
          <linearGradient
            id='sx-g'
            x1='3.5'
            x2='3.5'
            y1='5'
            y2='8.6'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#78c1f0' />
            <stop offset='1' stopColor='#67b1e0' />
          </linearGradient>
          <linearGradient
            id='sx-h'
            x1='3.5'
            x2='3.5'
            y1='3.5'
            y2='5.5'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#f7e14b' />
            <stop offset='1' stopColor='#f7df3e' />
          </linearGradient>
          <clipPath id='sx-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='sx-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#sx-clip)'>
        <g clipPath='url(#sx-a)'>
          <path fill='url(#sx-b)' d='M21 0H0v15h21z' />
          <path fill='url(#sx-c)' d='M21 7H0v8h21z' />
          <path fill='url(#sx-d)' d='M21 0H0v7h21z' />
          <path fill='url(#sx-e)' fillRule='evenodd' d='m0 0 10 7.5L0 15z' clipRule='evenodd' />
          <path
            fill='url(#sx-f)'
            d='M1.5 7V5.5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1V7c0 .84-.38 1.45-1 1.8q-.54.28-1.03.3-.4-.02-.97-.3c-.62-.35-1-.96-1-1.8'
          />
          <path
            fill='url(#sx-g)'
            fillRule='evenodd'
            d='M2 7V5.5c0-.27.22-.5.5-.5h2c.28 0 .5.23.5.5V7c0 1.5-1.5 1.6-1.5 1.6S2 8.5 2 7'
            clipRule='evenodd'
          />
          <path fill='#fff' fillRule='evenodd' d='m3 6.5.5-.5.5.5v1H3z' clipRule='evenodd' />
          <path
            fill='#f9d835'
            d='M1 9.37c.6.7 1.56 1.13 2.5 1.13a3.4 3.4 0 0 0 2.52-1.16.5.5 0 1 0-.76-.65 2.32 2.32 0 0 1-3.5.02.5.5 0 1 0-.76.66'
          />
          <path fill='url(#sx-h)' d='M3.5 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2' />
        </g>
      </g>
    </svg>
  )
}
