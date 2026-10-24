import type { FlagIcon } from './types'

export const IconFlagPM: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'PM',
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
      data-slot='icon-flag-pm'
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
            id='pm-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='pm-c'
            x1='10.5'
            x2='10.5'
            y1='10'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#138e16' />
            <stop offset='1' stopColor='#0f7f12' />
          </linearGradient>
          <linearGradient
            id='pm-d'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#26a7dc' />
            <stop offset='1' stopColor='#1b94c6' />
          </linearGradient>
          <linearGradient
            id='pm-e'
            x1='14'
            x2='14'
            y1='3.09'
            y2='10'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fbcd3f' />
            <stop offset='1' stopColor='#ffce2f' />
          </linearGradient>
          <linearGradient id='pm-f' x1='14' x2='14' y1='11' y2='13' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient id='pm-g' x1='3.5' x2='3.5' y1='0' y2='5' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#f03633' />
            <stop offset='1' stopColor='#d82a28' />
          </linearGradient>
          <linearGradient
            id='pm-i'
            x1='3.56'
            x2='3.43'
            y1='-1.62'
            y2='6.19'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#2aa854' />
            <stop offset='1' stopColor='#219447' />
          </linearGradient>
          <linearGradient id='pm-k' x1='3.5' x2='3.5' y1='-1' y2='6' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient id='pm-l' x1='3.5' x2='3.5' y1='5' y2='10' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient id='pm-m' x1='3.5' x2='3.5' y1='6' y2='9' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#262626' />
            <stop offset='1' stopColor='#0d0d0d' />
          </linearGradient>
          <linearGradient
            id='pm-n'
            x1='3.5'
            x2='3.5'
            y1='10'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#d7181d' />
            <stop offset='1' stopColor='#c60e13' />
          </linearGradient>
          <linearGradient
            id='pm-o'
            x1='3.5'
            x2='3.5'
            y1='11'
            y2='14'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fbcd3f' />
            <stop offset='1' stopColor='#fecb2f' />
          </linearGradient>
          <clipPath id='pm-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='pm-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#pm-clip)'>
        <g clipPath='url(#pm-a)'>
          <path fill='url(#pm-b)' d='M21 0H0v15h21z' />
          <path fill='url(#pm-c)' d='M21 10H0v5h21z' />
          <path fill='url(#pm-d)' fillRule='evenodd' d='M0 15h21V0H0z' clipRule='evenodd' />
          <path
            fill='url(#pm-e)'
            fillRule='evenodd'
            d='M17.33 6.43C18.35 6.18 19 6.1 19 7c0 1.66-2.24 3-5 3S9 8.66 9 7c0-.9.65-.82 1.67-.57a4 4 0 0 1-.16-.56c-.28-1.35.14-2.59.95-2.76s1.7.78 1.99 2.13a3.6 3.6 0 0 1-.04 1.74 7 7 0 0 0 1.18 0 3.6 3.6 0 0 1-.04-1.74c.29-1.35 1.18-2.3 1.99-2.13s1.23 1.4.95 2.76q-.07.3-.16.56'
            clipRule='evenodd'
          />
          <path
            fill='url(#pm-f)'
            d='M15.78 12.95q.22.1.44 0l2-1a.5.5 0 1 0-.44-.9l-1.78.9-1.78-.9a.5.5 0 0 0-.44 0l-1.78.9-1.78-.9a.5.5 0 1 0-.44.9l2 1q.22.1.44 0l1.78-.9z'
          />
          <path fill='url(#pm-g)' d='M7 0H0v5h7z' />
          <mask id='pm-h' width='7' height='5' x='0' y='0' maskUnits='userSpaceOnUse'>
            <path fill='#fff' d='M7 0H0v5h7z' />
          </mask>
          <g mask='url(#pm-h)'>
            <path
              fill='url(#pm-i)'
              fillRule='evenodd'
              d='M3.5 1.8.67-1.05l-.7.71L2.78 2.5-.04 5.33l.71.7L3.5 3.22l2.83 2.83.7-.71L4.22 2.5 7.04-.33l-.71-.7z'
              clipRule='evenodd'
            />
          </g>
          <mask id='pm-j' width='7' height='5' x='0' y='0' maskUnits='userSpaceOnUse'>
            <path fill='#fff' d='M7 0H0v5h7z' />
          </mask>
          <g mask='url(#pm-j)'>
            <path
              fill='url(#pm-k)'
              fillRule='evenodd'
              d='M4 2v-3H3v3H0v1h3v3h1V3h3V2z'
              clipRule='evenodd'
            />
          </g>
          <path fill='url(#pm-l)' d='M7 5H0v5h7z' />
          <path
            fill='url(#pm-m)'
            fillRule='evenodd'
            d='M1.5 7a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m-1 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m-2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1'
            clipRule='evenodd'
          />
          <path fill='url(#pm-n)' d='M7 10H0v5h7z' />
          <path
            fill='url(#pm-o)'
            fillRule='evenodd'
            d='M3.5 12c-1.38 0-2.5-.22-2.5-.5s1.12-.5 2.5-.5 2.5.22 2.5.5-1.12.5-2.5.5m0 2c-1.38 0-2.5-.22-2.5-.5s1.12-.5 2.5-.5 2.5.22 2.5.5-1.12.5-2.5.5'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}
