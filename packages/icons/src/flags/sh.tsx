import type { FlagIcon } from './types'

export const IconFlagSH: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'SH',
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
      data-slot='icon-flag-sh'
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
            id='sh-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='sh-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#07319c' />
            <stop offset='1' stopColor='#00247e' />
          </linearGradient>
          <linearGradient
            id='sh-d'
            x1='15.5'
            x2='15.5'
            y1='6'
            y2='12'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#a7d2ff' />
            <stop offset='1' stopColor='#91c6fd' />
          </linearGradient>
          <linearGradient
            id='sh-f'
            x1='13.25'
            x2='13.25'
            y1='8.5'
            y2='12.5'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ee7b2d' />
            <stop offset='1' stopColor='#cc621a' />
          </linearGradient>
          <linearGradient
            id='sh-j'
            x1='15.5'
            x2='15.5'
            y1='6'
            y2='8'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fffc4b' />
            <stop offset='1' stopColor='#fffc38' />
          </linearGradient>
          <linearGradient
            id='sh-k'
            x1='4.07'
            x2='4.07'
            y1='-.9'
            y2='7.9'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient id='sh-l' x1='4.5' x2='4.5' y1='0' y2='7' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#db1e36' />
            <stop offset='1' stopColor='#d51931' />
          </linearGradient>
          <linearGradient
            id='sh-m'
            x1='4.75'
            x2='4.75'
            y1='0'
            y2='7.5'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient id='sh-n' x1='4.5' x2='4.5' y1='0' y2='7' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#db1e36' />
            <stop offset='1' stopColor='#d51931' />
          </linearGradient>
          <clipPath id='sh-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='sh-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#sh-clip)'>
        <g clipPath='url(#sh-a)'>
          <path fill='url(#sh-b)' d='M21 0H0v15h21z' />
          <path fill='url(#sh-c)' d='M21 0H0v15h21z' />
          <path
            fill='url(#sh-d)'
            d='M13 9.5V6.51a.5.5 0 0 1 .5-.51h4c.28 0 .5.23.5.51V9.5c0 2-2.5 2.5-2.5 2.5S13 11.5 13 9.5'
          />
          <mask id='sh-e' width='5' height='6' x='13' y='6' maskUnits='userSpaceOnUse'>
            <path
              fill='#fff'
              d='M13 9.5V6.51a.5.5 0 0 1 .5-.51h4c.28 0 .5.23.5.51V9.5c0 2-2.5 2.5-2.5 2.5S13 11.5 13 9.5'
            />
          </mask>
          <g mask='url(#sh-e)'>
            <path
              fill='url(#sh-f)'
              fillRule='evenodd'
              d='M13.5 12.5c.83 0 1-1.4 1-2.5s-.17-1.5-1-1.5S12 8.9 12 10s.67 2.5 1.5 2.5'
              clipRule='evenodd'
            />
          </g>
          <mask id='sh-g' width='5' height='6' x='13' y='6' maskUnits='userSpaceOnUse'>
            <path
              fill='#fff'
              d='M13 9.5V6.51a.5.5 0 0 1 .5-.51h4c.28 0 .5.23.5.51V9.5c0 2-2.5 2.5-2.5 2.5S13 11.5 13 9.5'
            />
          </mask>
          <g mask='url(#sh-g)'>
            <path
              fill='#a75113'
              d='M15.5 11.5c.83 0 1.5-.45 1.5-1s-.67-1-1.5-1-1.5.45-1.5 1 .67 1 1.5 1'
            />
          </g>
          <mask id='sh-h' width='5' height='6' x='13' y='6' maskUnits='userSpaceOnUse'>
            <path
              fill='#fff'
              d='M13 9.5V6.51a.5.5 0 0 1 .5-.51h4c.28 0 .5.23.5.51V9.5c0 2-2.5 2.5-2.5 2.5S13 11.5 13 9.5'
            />
          </mask>
          <g mask='url(#sh-h)'>
            <path fill='#fff' d='M15.5 10.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2' />
          </g>
          <mask id='sh-i' width='5' height='6' x='13' y='6' maskUnits='userSpaceOnUse'>
            <path
              fill='#fff'
              d='M13 9.5V6.51a.5.5 0 0 1 .5-.51h4c.28 0 .5.23.5.51V9.5c0 2-2.5 2.5-2.5 2.5S13 11.5 13 9.5'
            />
          </mask>
          <g mask='url(#sh-i)'>
            <path fill='url(#sh-j)' d='M18 6h-5v2h5z' />
          </g>
          <path
            fill='url(#sh-k)'
            d='M3 3.23-1.35-.5H.66L4.16 2h.7L9.5-.9V.25c0 .3-.17.63-.42.8L6 3.26v.52l3.14 2.69c.46.4.2 1.04-.39 1.04-.25 0-.54-.1-.75-.24L4.84 5h-.7L-.5 7.9V6.24L3 3.74z'
          />
          <path
            fill='url(#sh-l)'
            fillRule='evenodd'
            d='M3.5 3 0 0h.5L4 2.5h1L9 0v.25c0 .14-.09.31-.2.4L5.5 3v1l3.31 2.84q.14.15-.06.16a1 1 0 0 1-.46-.15L5 4.5H4L0 7v-.5L3.5 4z'
            clipRule='evenodd'
          />
          <path
            fill='url(#sh-m)'
            fillRule='evenodd'
            d='M0 2.5v2h3.5V7c0 .28.21.5.5.5h1a.5.5 0 0 0 .5-.5V4.5h3.51c.27 0 .49-.21.49-.5V3a.5.5 0 0 0-.49-.5H5.5V0h-2v2.5z'
            clipRule='evenodd'
          />
          <path
            fill='url(#sh-n)'
            fillRule='evenodd'
            d='M0 3h4V0h1v3h4v1H5v3H4V4H0z'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}
