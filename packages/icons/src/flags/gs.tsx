import type { FlagIcon } from './types'

export const IconFlagGS: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'GS',
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
      data-slot='icon-flag-gs'
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
            id='gs-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='gs-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#07319c' />
            <stop offset='1' stopColor='#00247e' />
          </linearGradient>
          <linearGradient
            id='gs-d'
            x1='4.07'
            x2='4.07'
            y1='-.9'
            y2='7.9'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient id='gs-e' x1='4.5' x2='4.5' y1='0' y2='7' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#db1e36' />
            <stop offset='1' stopColor='#d51931' />
          </linearGradient>
          <linearGradient
            id='gs-f'
            x1='4.75'
            x2='4.75'
            y1='0'
            y2='7.5'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient id='gs-g' x1='4.5' x2='4.5' y1='0' y2='7' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#db1e36' />
            <stop offset='1' stopColor='#d51931' />
          </linearGradient>
          <linearGradient
            id='gs-h'
            x1='18.5'
            x2='18.5'
            y1='8'
            y2='11'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#1e1e1e' />
            <stop offset='1' />
          </linearGradient>
          <linearGradient
            id='gs-j'
            x1='18'
            x2='18'
            y1='8.5'
            y2='11.5'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='gs-k'
            x1='14.5'
            x2='14.5'
            y1='8'
            y2='11'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#a2adb0' />
            <stop offset='1' stopColor='#8b9497' />
          </linearGradient>
          <linearGradient
            id='gs-m'
            x1='15'
            x2='15'
            y1='8.5'
            y2='11.5'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#4f4f4f' />
            <stop offset='1' stopColor='#2b2b2b' />
          </linearGradient>
          <linearGradient
            id='gs-n'
            x1='16.5'
            x2='16.5'
            y1='12'
            y2='12.8'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fec241' />
            <stop offset='1' stopColor='#febb2c' />
          </linearGradient>
          <linearGradient
            id='gs-o'
            x1='18.5'
            x2='18.5'
            y1='4.5'
            y2='6.5'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='gs-p'
            x1='16.5'
            x2='16.5'
            y1='3.5'
            y2='5.5'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#a84b14' />
            <stop offset='1' stopColor='#913f0e' />
          </linearGradient>
          <linearGradient
            id='gs-q'
            x1='16.5'
            x2='16.5'
            y1='2.75'
            y2='4.75'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#cfb063' />
            <stop offset='1' stopColor='#bea157' />
          </linearGradient>
          <linearGradient
            id='gs-r'
            x1='16.5'
            x2='16.5'
            y1='10.5'
            y2='12.5'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='gs-s'
            x1='14.5'
            x2='14.5'
            y1='4.5'
            y2='6.5'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='gs-t'
            x1='15'
            x2='15'
            y1='5.5'
            y2='7.5'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#2d42ff' />
            <stop offset='1' stopColor='#0b24fc' />
          </linearGradient>
          <linearGradient
            id='gs-u'
            x1='18'
            x2='18'
            y1='5.5'
            y2='7.5'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#2d42ff' />
            <stop offset='1' stopColor='#0b24fc' />
          </linearGradient>
          <linearGradient id='gs-v' x1='18' x2='20' y1='7' y2='8' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#e3dc3d' />
            <stop offset='1' stopColor='#cfc82a' />
          </linearGradient>
          <linearGradient
            id='gs-w'
            x1='16.5'
            x2='16.5'
            y1='5'
            y2='8'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#7f7d7d' />
            <stop offset='1' stopColor='#656263' />
          </linearGradient>
          <linearGradient
            id='gs-x'
            x1='16.52'
            x2='16.52'
            y1='8'
            y2='11.42'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='gs-B'
            x1='16.5'
            x2='16.5'
            y1='8'
            y2='11'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#0f8012' />
            <stop offset='1' stopColor='#0b6a0d' />
          </linearGradient>
          <linearGradient
            id='gs-D'
            x1='16.5'
            x2='16.5'
            y1='8.5'
            y2='10.5'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ffcf44' />
            <stop offset='1' stopColor='#fcc72e' />
          </linearGradient>
          <clipPath id='gs-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='gs-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#gs-clip)'>
        <g clipPath='url(#gs-a)'>
          <path fill='url(#gs-b)' d='M21 0H0v15h21z' />
          <path fill='url(#gs-c)' d='M21 0H0v15h21z' />
          <path
            fill='url(#gs-d)'
            d='M3 3.23-1.35-.5H.66L4.16 2h.7L9.5-.9V.25c0 .3-.17.63-.42.8L6 3.26v.52l3.14 2.69c.46.4.2 1.04-.39 1.04-.25 0-.54-.1-.75-.24L4.84 5h-.7L-.5 7.9V6.24L3 3.74z'
          />
          <path
            fill='url(#gs-e)'
            fillRule='evenodd'
            d='M3.5 3 0 0h.5L4 2.5h1L9 0v.25c0 .14-.09.31-.2.4L5.5 3v1l3.31 2.84q.14.15-.06.16a1 1 0 0 1-.46-.15L5 4.5H4L0 7v-.5L3.5 4z'
            clipRule='evenodd'
          />
          <path
            fill='url(#gs-f)'
            fillRule='evenodd'
            d='M0 2.5v2h3.5V7c0 .28.21.5.5.5h1a.5.5 0 0 0 .5-.5V4.5h3.51c.27 0 .49-.21.49-.5V3a.5.5 0 0 0-.49-.5H5.5V0h-2v2.5z'
            clipRule='evenodd'
          />
          <path
            fill='url(#gs-g)'
            fillRule='evenodd'
            d='M0 3h4V0h1v3h4v1H5v3H4V4H0z'
            clipRule='evenodd'
          />
          <path
            fill='url(#gs-h)'
            d='M18.5 11c.55 0 1-.67 1-1.5s-.45-1.5-1-1.5-1 .67-1 1.5.45 1.5 1 1.5'
          />
          <mask id='gs-i' width='3' height='3' x='17' y='8' maskUnits='userSpaceOnUse'>
            <path
              fill='#fff'
              d='M18.5 11c.55 0 1-.67 1-1.5s-.45-1.5-1-1.5-1 .67-1 1.5.45 1.5 1 1.5'
            />
          </mask>
          <g mask='url(#gs-i)'>
            <path
              fill='url(#gs-j)'
              d='M18 11.5c.55 0 1-.67 1-1.5s-.45-1.5-1-1.5-1 .67-1 1.5.45 1.5 1 1.5'
            />
          </g>
          <path
            fill='url(#gs-k)'
            d='M14.5 11c.55 0 1-.67 1-1.5s-.45-1.5-1-1.5-1 .67-1 1.5.45 1.5 1 1.5'
          />
          <mask id='gs-l' width='3' height='3' x='13' y='8' maskUnits='userSpaceOnUse'>
            <path
              fill='#fff'
              d='M14.5 11c.55 0 1-.67 1-1.5s-.45-1.5-1-1.5-1 .67-1 1.5.45 1.5 1 1.5'
            />
          </mask>
          <g mask='url(#gs-l)'>
            <path
              fill='url(#gs-m)'
              d='M15 11.5c.55 0 1-.67 1-1.5s-.45-1.5-1-1.5-1 .67-1 1.5.45 1.5 1 1.5'
            />
          </g>
          <path
            fill='url(#gs-n)'
            fillRule='evenodd'
            d='M16.5 12.5c.83.5 1.5.28 1.5 0s-.67-.5-1.5-.5-1.5.22-1.5.5.67.5 1.5 0'
            clipRule='evenodd'
          />
          <path fill='url(#gs-o)' d='M18.5 6.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2' />
          <path fill='url(#gs-p)' d='M16.5 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2' />
          <path fill='url(#gs-q)' d='M16.5 4.75a1 1 0 1 0 0-2 1 1 0 0 0 0 2' />
          <path fill='url(#gs-r)' d='M16.5 12.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2' />
          <path fill='url(#gs-s)' d='M14.5 6.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2' />
          <path fill='url(#gs-t)' d='M15 7.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2' />
          <path fill='url(#gs-u)' d='M18 7.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2' />
          <path fill='url(#gs-v)' d='M19 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2' />
          <path
            fill='url(#gs-w)'
            fillRule='evenodd'
            d='m16 7.5-.5.5h2l-.5-.5.5-1.5s-.45-1-1-1-1 1-1 1z'
            clipRule='evenodd'
          />
          <path
            fill='#5d0543'
            fillRule='evenodd'
            d='M16.5 6.5s.5-.11.5-.38L16.5 6l-.5.12c0 .27.5.38.5.38'
            clipRule='evenodd'
          />
          <path
            fill='url(#gs-x)'
            d='M15 8.5c0-.27.22-.5.5-.5h2c.28 0 .5.23.5.5l.03 1.75c0 .14-.1.32-.2.39l-1.1.72a.4.4 0 0 1-.42 0l-1.07-.72a.5.5 0 0 1-.21-.39z'
          />
          <mask id='gs-y' width='4' height='4' x='15' y='8' maskUnits='userSpaceOnUse'>
            <path
              fill='#fff'
              d='M15 8.5c0-.27.22-.5.5-.5h2c.28 0 .5.23.5.5l.03 1.75c0 .14-.1.32-.2.39l-1.1.72a.4.4 0 0 1-.42 0l-1.07-.72a.5.5 0 0 1-.21-.39z'
            />
          </mask>
          <g mask='url(#gs-y)'>
            <path fill='#225da4' d='M17.5 11.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2' />
          </g>
          <mask id='gs-z' width='4' height='4' x='15' y='8' maskUnits='userSpaceOnUse'>
            <path
              fill='#fff'
              d='M15 8.5c0-.27.22-.5.5-.5h2c.28 0 .5.23.5.5l.03 1.75c0 .14-.1.32-.2.39l-1.1.72a.4.4 0 0 1-.42 0l-1.07-.72a.5.5 0 0 1-.21-.39z'
            />
          </mask>
          <g mask='url(#gs-z)'>
            <path fill='#225da4' d='M15.5 10.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2' />
          </g>
          <mask id='gs-A' width='4' height='4' x='15' y='8' maskUnits='userSpaceOnUse'>
            <path
              fill='#fff'
              d='M15 8.5c0-.27.22-.5.5-.5h2c.28 0 .5.23.5.5l.03 1.75c0 .14-.1.32-.2.39l-1.1.72a.4.4 0 0 1-.42 0l-1.07-.72a.5.5 0 0 1-.21-.39z'
            />
          </mask>
          <g mask='url(#gs-A)'>
            <path fill='url(#gs-B)' fillRule='evenodd' d='M15 8h3l-1.5 3z' clipRule='evenodd' />
          </g>
          <mask id='gs-C' width='4' height='4' x='15' y='8' maskUnits='userSpaceOnUse'>
            <path
              fill='#fff'
              d='M15 8.5c0-.27.22-.5.5-.5h2c.28 0 .5.23.5.5l.03 1.75c0 .14-.1.32-.2.39l-1.1.72a.4.4 0 0 1-.42 0l-1.07-.72a.5.5 0 0 1-.21-.39z'
            />
          </mask>
          <g mask='url(#gs-C)'>
            <path fill='url(#gs-D)' d='M16.5 10.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2' />
          </g>
        </g>
      </g>
    </svg>
  )
}
