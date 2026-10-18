import type { FlagIcon } from './types'

export const IconFlagTC: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'TC',
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
      data-slot='icon-flag-tc'
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
            id='tc-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='tc-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#07319c' />
            <stop offset='1' stopColor='#00247e' />
          </linearGradient>
          <linearGradient
            id='tc-d'
            x1='15.5'
            x2='15.5'
            y1='4'
            y2='11'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='tc-e'
            x1='15.5'
            x2='15.5'
            y1='4.5'
            y2='10.45'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ffd033' />
            <stop offset='1' stopColor='#fec403' />
          </linearGradient>
          <linearGradient
            id='tc-f'
            x1='4.07'
            x2='4.07'
            y1='-.9'
            y2='7.9'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient id='tc-g' x1='4.5' x2='4.5' y1='0' y2='7' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#db1e36' />
            <stop offset='1' stopColor='#d51931' />
          </linearGradient>
          <linearGradient
            id='tc-h'
            x1='4.75'
            x2='4.75'
            y1='0'
            y2='7.5'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient id='tc-i' x1='4.5' x2='4.5' y1='0' y2='7' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#db1e36' />
            <stop offset='1' stopColor='#d51931' />
          </linearGradient>
          <clipPath id='tc-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='tc-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#tc-clip)'>
        <g clipPath='url(#tc-a)'>
          <path fill='url(#tc-b)' d='M21 0H0v15h21z' />
          <path fill='url(#tc-c)' d='M21 0H0v15h21z' />
          <path
            fill='url(#tc-d)'
            d='M13 7.5V5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v2.5c0 2.5-2.5 3.5-2.5 3.5S13 10 13 7.5'
          />
          <path
            fill='url(#tc-e)'
            d='M15.64 10.37q.4-.22.78-.55A3 3 0 0 0 17.5 7.5V5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v2.5c0 .94.4 1.7 1.08 2.32a4 4 0 0 0 .92.63z'
          />
          <path fill='#ba5b1f' d='M16.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2' />
          <path fill='#ff9f3e' d='M14.65 6.97a1 1 0 1 0-.68-1.88 1 1 0 0 0 .68 1.88' />
          <path fill='#ff937f' d='M14.29 6.95a1 1 0 1 0 .84-1.81 1 1 0 0 0-.84 1.81' />
          <path fill='#01a827' fillRule='evenodd' d='m15 8 .5-1 .5 1v1h-1z' clipRule='evenodd' />
          <path
            fill='url(#tc-f)'
            d='M3 3.23-1.35-.5H.66L4.16 2h.7L9.5-.9V.25c0 .3-.17.63-.42.8L6 3.26v.52l3.14 2.69c.46.4.2 1.04-.39 1.04-.25 0-.54-.1-.75-.24L4.84 5h-.7L-.5 7.9V6.24L3 3.74z'
          />
          <path
            fill='url(#tc-g)'
            fillRule='evenodd'
            d='M3.5 3 0 0h.5L4 2.5h1L9 0v.25c0 .14-.09.31-.2.4L5.5 3v1l3.31 2.84q.14.15-.06.16a1 1 0 0 1-.46-.15L5 4.5H4L0 7v-.5L3.5 4z'
            clipRule='evenodd'
          />
          <path
            fill='url(#tc-h)'
            fillRule='evenodd'
            d='M0 2.5v2h3.5V7c0 .28.21.5.5.5h1a.5.5 0 0 0 .5-.5V4.5h3.51c.27 0 .49-.21.49-.5V3a.5.5 0 0 0-.49-.5H5.5V0h-2v2.5z'
            clipRule='evenodd'
          />
          <path
            fill='url(#tc-i)'
            fillRule='evenodd'
            d='M0 3h4V0h1v3h4v1H5v3H4V4H0z'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}
