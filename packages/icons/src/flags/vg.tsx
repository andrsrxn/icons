import type { FlagIcon } from './types'

export const IconFlagVG: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'VG',
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
      data-slot='icon-flag-vg'
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
            id='vg-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='vg-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#07319c' />
            <stop offset='1' stopColor='#00247e' />
          </linearGradient>
          <linearGradient
            id='vg-d'
            x1='15.5'
            x2='15.5'
            y1='4'
            y2='11'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#008339' />
            <stop offset='1' stopColor='#00612a' />
          </linearGradient>
          <linearGradient
            id='vg-e'
            x1='15.5'
            x2='15.5'
            y1='5'
            y2='9'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ffd033' />
            <stop offset='1' stopColor='#fec403' />
          </linearGradient>
          <linearGradient
            id='vg-f'
            x1='15.5'
            x2='15.5'
            y1='5.5'
            y2='8.5'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='vg-g'
            x1='15.5'
            x2='15.5'
            y1='9.5'
            y2='11.5'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ffd033' />
            <stop offset='1' stopColor='#fec403' />
          </linearGradient>
          <linearGradient
            id='vg-h'
            x1='4.07'
            x2='4.07'
            y1='-.9'
            y2='7.9'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient id='vg-i' x1='4.5' x2='4.5' y1='0' y2='7' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#db1e36' />
            <stop offset='1' stopColor='#d51931' />
          </linearGradient>
          <linearGradient
            id='vg-j'
            x1='4.75'
            x2='4.75'
            y1='0'
            y2='7.5'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient id='vg-k' x1='4.5' x2='4.5' y1='0' y2='7' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#db1e36' />
            <stop offset='1' stopColor='#d51931' />
          </linearGradient>
          <clipPath id='vg-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='vg-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#vg-clip)'>
        <g clipPath='url(#vg-a)'>
          <path fill='url(#vg-b)' d='M21 0H0v15h21z' />
          <path fill='url(#vg-c)' d='M21 0H0v15h21z' />
          <path
            fill='url(#vg-d)'
            fillRule='evenodd'
            d='M13 7.5V5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v2.5c0 2.5-2.5 3.5-2.5 3.5S13 10 13 7.5'
            clipRule='evenodd'
          />
          <path
            fill='url(#vg-e)'
            fillRule='evenodd'
            d='M14.5 6a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m0 1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m0 1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m0 1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m0-1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m0-1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m0-1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1'
            clipRule='evenodd'
          />
          <path
            fill='url(#vg-f)'
            d='M15.5 8.5c.55 0 1-.67 1-1.5s-.45-1.5-1-1.5-1 .67-1 1.5.45 1.5 1 1.5'
          />
          <path
            fill='url(#vg-g)'
            d='M12.5 10c0 .95 1.37 1.5 3 1.5s3-.55 3-1.5a.5.5 0 0 0-1 0c0 .01-.12.12-.42.24-.4.16-.97.26-1.58.26s-1.18-.1-1.58-.26a1 1 0 0 1-.42-.24.5.5 0 0 0-1 0'
          />
          <path
            fill='url(#vg-h)'
            d='M3 3.23-1.35-.5H.66L4.16 2h.7L9.5-.9V.25c0 .3-.17.63-.42.8L6 3.26v.52l3.14 2.69c.46.4.2 1.04-.39 1.04-.25 0-.54-.1-.75-.24L4.84 5h-.7L-.5 7.9V6.24L3 3.74z'
          />
          <path
            fill='url(#vg-i)'
            fillRule='evenodd'
            d='M3.5 3 0 0h.5L4 2.5h1L9 0v.25c0 .14-.09.31-.2.4L5.5 3v1l3.31 2.84q.14.15-.06.16a1 1 0 0 1-.46-.15L5 4.5H4L0 7v-.5L3.5 4z'
            clipRule='evenodd'
          />
          <path
            fill='url(#vg-j)'
            fillRule='evenodd'
            d='M0 2.5v2h3.5V7c0 .28.21.5.5.5h1a.5.5 0 0 0 .5-.5V4.5h3.51c.27 0 .49-.21.49-.5V3a.5.5 0 0 0-.49-.5H5.5V0h-2v2.5z'
            clipRule='evenodd'
          />
          <path
            fill='url(#vg-k)'
            fillRule='evenodd'
            d='M0 3h4V0h1v3h4v1H5v3H4V4H0z'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}
