import type { FlagIcon } from './types'

export const IconFlagFJ: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'FJ',
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
      data-slot='icon-flag-fj'
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
            id='fj-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='fj-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#79cff6' />
            <stop offset='1' stopColor='#68bfe6' />
          </linearGradient>
          <linearGradient id='fj-d' x1='4.5' x2='4.5' y1='0' y2='7' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#042c90' />
            <stop offset='1' stopColor='#00247e' />
          </linearGradient>
          <linearGradient
            id='fj-e'
            x1='15.5'
            x2='15.5'
            y1='4'
            y2='11'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='fj-h'
            x1='15.5'
            x2='15.5'
            y1='4'
            y2='11'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#eb1d43' />
            <stop offset='1' stopColor='#d21034' />
          </linearGradient>
          <linearGradient id='fj-i' x1='4.5' x2='4.5' y1='0' y2='7' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#db1e36' />
            <stop offset='1' stopColor='#d51931' />
          </linearGradient>
          <linearGradient
            id='fj-j'
            x1='4.75'
            x2='4.75'
            y1='0'
            y2='7.5'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient id='fj-k' x1='4.5' x2='4.5' y1='0' y2='7' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#db1e36' />
            <stop offset='1' stopColor='#d51931' />
          </linearGradient>
          <clipPath id='fj-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='fj-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#fj-clip)'>
        <g clipPath='url(#fj-a)'>
          <path fill='url(#fj-b)' d='M21 0H0v15h21z' />
          <path fill='url(#fj-c)' d='M21 0H0v15h21z' />
          <path fill='url(#fj-d)' d='M9 0H0v7h9z' />
          <path fill='url(#fj-e)' d='M13 7.5V4h5v3.5c0 2.5-2.5 3.5-2.5 3.5S13 10 13 7.5' />
          <mask
            id='fj-f'
            width='5'
            height='7'
            x='13'
            y='4'
            maskUnits='userSpaceOnUse'
            style={{ maskType: 'luminance' }}>
            <path fill='#fff' d='M13 7.5V4h5v3.5c0 2.5-2.5 3.5-2.5 3.5S13 10 13 7.5' />
          </mask>
          <g mask='url(#fj-f)'>
            <path
              fill='#2a915c'
              fillRule='evenodd'
              d='M14 6.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m3 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1'
              clipRule='evenodd'
            />
          </g>
          <mask
            id='fj-g'
            width='5'
            height='7'
            x='13'
            y='4'
            maskUnits='userSpaceOnUse'
            style={{ maskType: 'luminance' }}>
            <path fill='#fff' d='M13 7.5V4h5v3.5c0 2.5-2.5 3.5-2.5 3.5S13 10 13 7.5' />
          </mask>
          <g mask='url(#fj-g)'>
            <path
              fill='url(#fj-h)'
              fillRule='evenodd'
              d='M13 4h5v1h-2v2h2v1h-2v3h-1V8h-2V7h2V5h-2z'
              clipRule='evenodd'
            />
          </g>
          <path
            fill='url(#fj-i)'
            d='M3.5 3 0 0h.5L4 2.5h1L9 0v.25c0 .14-.09.31-.2.4L5.5 3v1l3.31 2.84q.14.15-.06.16a1 1 0 0 1-.46-.15L5 4.5H4L0 7v-.5L3.5 4z'
          />
          <path
            stroke='#fff'
            strokeWidth='.5'
            d='M3.25 3.11-.68-.25H.5l.15.05 3.43 2.45h.85l4.32-2.7v.7a.8.8 0 0 1-.31.6L5.75 3.13v.75l3.22 2.77c.29.24.14.6-.22.6-.2 0-.44-.08-.6-.2l-3.23-2.3h-.85l-4.32 2.7V6.37l3.5-2.5z'
          />
          <path
            fill='url(#fj-j)'
            fillRule='evenodd'
            d='M0 2.5v2h3.5V7c0 .28.21.5.5.5h1a.5.5 0 0 0 .5-.5V4.5h3.51c.27 0 .49-.21.49-.5V3a.5.5 0 0 0-.49-.5H5.5V0h-2v2.5z'
            clipRule='evenodd'
          />
          <path
            fill='url(#fj-k)'
            fillRule='evenodd'
            d='M0 3h4V0h1v3h4v1H5v3H4V4H0z'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}
