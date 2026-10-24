import type { FlagIcon } from './types'

export const IconFlagPN: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'PN',
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
      data-slot='icon-flag-pn'
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
            id='pn-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='pn-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#07319c' />
            <stop offset='1' stopColor='#00247e' />
          </linearGradient>
          <linearGradient
            id='pn-d'
            x1='15.5'
            x2='15.5'
            y1='6'
            y2='13'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#1f8bde' />
            <stop offset='1' stopColor='#1075c2' />
          </linearGradient>
          <linearGradient
            id='pn-f'
            x1='15.5'
            x2='15.5'
            y1='6'
            y2='14'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#f7e14a' />
            <stop offset='1' stopColor='#f7de38' />
          </linearGradient>
          <linearGradient
            id='pn-h'
            x1='15.5'
            x2='15.5'
            y1='7.12'
            y2='13.5'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#4b8c36' />
            <stop offset='1' stopColor='#397127' />
          </linearGradient>
          <linearGradient
            id='pn-i'
            x1='4.07'
            x2='4.07'
            y1='-.9'
            y2='7.9'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient id='pn-j' x1='4.5' x2='4.5' y1='0' y2='7' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#db1e36' />
            <stop offset='1' stopColor='#d51931' />
          </linearGradient>
          <linearGradient
            id='pn-k'
            x1='4.75'
            x2='4.75'
            y1='0'
            y2='7.5'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient id='pn-l' x1='4.5' x2='4.5' y1='0' y2='7' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#db1e36' />
            <stop offset='1' stopColor='#d51931' />
          </linearGradient>
          <clipPath id='pn-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='pn-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#pn-clip)'>
        <g clipPath='url(#pn-a)'>
          <path fill='url(#pn-b)' d='M21 0H0v15h21z' />
          <path fill='url(#pn-c)' d='M21 0H0v15h21z' />
          <path
            fill='url(#pn-d)'
            d='M13 9.5V6.51a.5.5 0 0 1 .5-.51h4c.28 0 .5.23.5.51V9.5c0 2.5-2.5 3.5-2.5 3.5S13 12 13 9.5'
          />
          <mask id='pn-e' width='5' height='7' x='13' y='6' maskUnits='userSpaceOnUse'>
            <path
              fill='#fff'
              d='M13 9.5V6.51a.5.5 0 0 1 .5-.51h4c.28 0 .5.23.5.51V9.5c0 2.5-2.5 3.5-2.5 3.5S13 12 13 9.5'
            />
          </mask>
          <g mask='url(#pn-e)'>
            <path fill='url(#pn-f)' d='m12.5 12 3-6 3 6v2h-6z' />
          </g>
          <mask id='pn-g' width='5' height='7' x='13' y='6' maskUnits='userSpaceOnUse'>
            <path
              fill='#fff'
              d='M13 9.5V6.51a.5.5 0 0 1 .5-.51h4c.28 0 .5.23.5.51V9.5c0 2.5-2.5 3.5-2.5 3.5S13 12 13 9.5'
            />
          </mask>
          <g mask='url(#pn-g)'>
            <path fill='url(#pn-h)' d='M13 12.12v1.38h5v-1.38l-2.5-5z' />
          </g>
          <path
            fill='url(#pn-i)'
            d='M3 3.23-1.35-.5H.66L4.16 2h.7L9.5-.9V.25c0 .3-.17.63-.42.8L6 3.26v.52l3.14 2.69c.46.4.2 1.04-.39 1.04-.25 0-.54-.1-.75-.24L4.84 5h-.7L-.5 7.9V6.24L3 3.74z'
          />
          <path
            fill='url(#pn-j)'
            fillRule='evenodd'
            d='M3.5 3 0 0h.5L4 2.5h1L9 0v.25c0 .14-.09.31-.2.4L5.5 3v1l3.31 2.84q.14.15-.06.16a1 1 0 0 1-.46-.15L5 4.5H4L0 7v-.5L3.5 4z'
            clipRule='evenodd'
          />
          <path
            fill='url(#pn-k)'
            fillRule='evenodd'
            d='M0 2.5v2h3.5V7c0 .28.21.5.5.5h1a.5.5 0 0 0 .5-.5V4.5h3.51c.27 0 .49-.21.49-.5V3a.5.5 0 0 0-.49-.5H5.5V0h-2v2.5z'
            clipRule='evenodd'
          />
          <path
            fill='url(#pn-l)'
            fillRule='evenodd'
            d='M0 3h4V0h1v3h4v1H5v3H4V4H0z'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}
