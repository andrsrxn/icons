import type { FlagIcon } from './types'

export const IconFlagFK: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'FK',
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
      data-slot='icon-flag-fk'
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
            id='fk-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='fk-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#07319c' />
            <stop offset='1' stopColor='#00247e' />
          </linearGradient>
          <linearGradient
            id='fk-d'
            x1='15.5'
            x2='15.5'
            y1='4'
            y2='11'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#1f8bde' />
            <stop offset='1' stopColor='#1075c2' />
          </linearGradient>
          <linearGradient
            id='fk-f'
            x1='15.5'
            x2='15.5'
            y1='4'
            y2='11'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='fk-h'
            x1='15.5'
            x2='15.5'
            y1='7'
            y2='8.27'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#187536' />
            <stop offset='1' stopColor='#0e5023' />
          </linearGradient>
          <linearGradient
            id='fk-j'
            x1='15.5'
            x2='15.5'
            y1='5'
            y2='7.01'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='fk-l'
            x1='15.33'
            x2='15.33'
            y1='8.95'
            y2='10.35'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='fk-n'
            x1='15.33'
            x2='15.33'
            y1='7.45'
            y2='8.85'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='fk-p'
            x1='15.33'
            x2='15.33'
            y1='10.45'
            y2='11.85'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient id='fk-q' x1='4.5' x2='4.5' y1='0' y2='7' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#db1e36' />
            <stop offset='1' stopColor='#d51931' />
          </linearGradient>
          <linearGradient
            id='fk-r'
            x1='4.75'
            x2='4.75'
            y1='0'
            y2='7.5'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient id='fk-s' x1='4.5' x2='4.5' y1='0' y2='7' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#db1e36' />
            <stop offset='1' stopColor='#d51931' />
          </linearGradient>
          <clipPath id='fk-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='fk-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#fk-clip)'>
        <g clipPath='url(#fk-a)'>
          <path fill='url(#fk-b)' d='M21 0H0v15h21z' />
          <path fill='url(#fk-c)' d='M21 0H0v15h21z' />
          <path
            fill='url(#fk-d)'
            d='M13 7.5V4.51a.5.5 0 0 1 .5-.51h4c.28 0 .5.23.5.51V7.5c0 2.5-2.5 3.5-2.5 3.5S13 10 13 7.5'
          />
          <mask id='fk-e' width='5' height='7' x='13' y='4' maskUnits='userSpaceOnUse'>
            <path
              fill='#fff'
              d='M13 7.5V4.51a.5.5 0 0 1 .5-.51h4c.28 0 .5.23.5.51V7.5c0 2.5-2.5 3.5-2.5 3.5S13 10 13 7.5'
            />
          </mask>
          <g mask='url(#fk-e)'>
            <path
              fill='url(#fk-f)'
              d='M13 7.5V4.51a.5.5 0 0 1 .5-.51h4c.28 0 .5.23.5.51V7.5c0 2.5-2.5 3.5-2.5 3.5S13 10 13 7.5m2.64 2.87q.4-.22.78-.55A3 3 0 0 0 17.5 7.5V4.51l-4-.01v3c0 .94.4 1.7 1.08 2.32a4 4 0 0 0 .92.63z'
            />
          </g>
          <mask id='fk-g' width='5' height='7' x='13' y='4' maskUnits='userSpaceOnUse'>
            <path
              fill='#fff'
              d='M13 7.5V4.51a.5.5 0 0 1 .5-.51h4c.28 0 .5.23.5.51V7.5c0 2.5-2.5 3.5-2.5 3.5S13 10 13 7.5'
            />
          </mask>
          <g mask='url(#fk-g)'>
            <path
              fill='url(#fk-h)'
              fillRule='evenodd'
              d='M14.16 7.47c-.09-.26.06-.47.34-.47h2c.28 0 .43.2.34.47l-.18.56c-.09.26-.3.3-.53.13 0 0 .1-.16-.63-.16-.72 0-.63.16-.63.16-.2.19-.44.13-.53-.13z'
              clipRule='evenodd'
            />
          </g>
          <mask id='fk-i' width='5' height='7' x='13' y='4' maskUnits='userSpaceOnUse'>
            <path
              fill='#fff'
              d='M13 7.5V4.51a.5.5 0 0 1 .5-.51h4c.28 0 .5.23.5.51V7.5c0 2.5-2.5 3.5-2.5 3.5S13 10 13 7.5'
            />
          </mask>
          <g mask='url(#fk-i)'>
            <path
              fill='url(#fk-j)'
              fillRule='evenodd'
              d='M14.5 7c.27.05.6-.5 1-.5.44 0 .73.57 1 .5.25-.06.5-.74.5-1 0-.55-.67-1-1.5-1S14 5.45 14 6c0 .28.22.94.5 1'
              clipRule='evenodd'
            />
          </g>
          <mask id='fk-k' width='5' height='7' x='13' y='4' maskUnits='userSpaceOnUse'>
            <path
              fill='#fff'
              d='M13 7.5V4.51a.5.5 0 0 1 .5-.51h4c.28 0 .5.23.5.51V7.5c0 2.5-2.5 3.5-2.5 3.5S13 10 13 7.5'
            />
          </mask>
          <g mask='url(#fk-k)'>
            <path
              fill='url(#fk-l)'
              d='m12.68 10.18.35-.35.3-.3c.1-.1.25-.1.34 0l.3.3c.3.29.77.29 1.06 0l.3-.3c.1-.1.25-.1.34 0l.3.3c.3.29.77.29 1.06 0l.3-.3c.1-.1.25-.1.34 0l.3.3.18.17.35-.35-.17-.18-.3-.3a.74.74 0 0 0-1.06 0l-.3.3c-.1.1-.25.1-.34 0l-.3-.3a.74.74 0 0 0-1.06 0l-.3.3c-.1.1-.25.1-.34 0l-.3-.3a.74.74 0 0 0-1.06 0l-.3.3-.35.35-.17.18.35.35z'
            />
          </g>
          <mask id='fk-m' width='5' height='7' x='13' y='4' maskUnits='userSpaceOnUse'>
            <path
              fill='#fff'
              d='M13 7.5V4.51a.5.5 0 0 1 .5-.51h4c.28 0 .5.23.5.51V7.5c0 2.5-2.5 3.5-2.5 3.5S13 10 13 7.5'
            />
          </mask>
          <g mask='url(#fk-m)'>
            <path
              fill='url(#fk-n)'
              d='m12.68 8.68.35-.35.3-.3c.1-.1.25-.1.34 0l.3.3c.3.29.77.29 1.06 0l.3-.3c.1-.1.25-.1.34 0l.3.3c.3.29.77.29 1.06 0l.3-.3c.1-.1.25-.1.34 0l.3.3.18.17.35-.35-.17-.18-.3-.3a.74.74 0 0 0-1.06 0l-.3.3c-.1.1-.25.1-.34 0l-.3-.3a.74.74 0 0 0-1.06 0l-.3.3c-.1.1-.25.1-.34 0l-.3-.3a.74.74 0 0 0-1.06 0l-.3.3-.35.35-.17.18.35.35z'
            />
          </g>
          <mask id='fk-o' width='5' height='7' x='13' y='4' maskUnits='userSpaceOnUse'>
            <path
              fill='#fff'
              d='M13 7.5V4.51a.5.5 0 0 1 .5-.51h4c.28 0 .5.23.5.51V7.5c0 2.5-2.5 3.5-2.5 3.5S13 10 13 7.5'
            />
          </mask>
          <g mask='url(#fk-o)'>
            <path
              fill='url(#fk-p)'
              d='m12.68 11.68.35-.35.3-.3c.1-.1.25-.1.34 0l.3.3c.3.29.77.29 1.06 0l.3-.3c.1-.1.25-.1.34 0l.3.3c.3.29.77.29 1.06 0l.3-.3c.1-.1.25-.1.34 0l.3.3.18.17.35-.35-.17-.18-.3-.3a.74.74 0 0 0-1.06 0l-.3.3c-.1.1-.25.1-.34 0l-.3-.3a.74.74 0 0 0-1.06 0l-.3.3c-.1.1-.25.1-.34 0l-.3-.3a.74.74 0 0 0-1.06 0l-.3.3-.35.35-.17.18.35.35z'
            />
          </g>
          <path
            fill='url(#fk-q)'
            d='M3.5 3 0 0h.5L4 2.5h1L9 0v.25c0 .14-.09.31-.2.4L5.5 3v1l3.31 2.84q.14.15-.06.16a1 1 0 0 1-.46-.15L5 4.5H4L0 7v-.5L3.5 4z'
          />
          <path
            stroke='#fff'
            strokeWidth='.5'
            d='M3.25 3.11-.68-.25H.5l.15.05 3.43 2.45h.85l4.32-2.7v.7a.8.8 0 0 1-.31.6L5.75 3.13v.75l3.22 2.77c.29.24.14.6-.22.6-.2 0-.44-.08-.6-.2l-3.23-2.3h-.85l-4.32 2.7V6.37l3.5-2.5z'
          />
          <path
            fill='url(#fk-r)'
            fillRule='evenodd'
            d='M0 2.5v2h3.5V7c0 .28.21.5.5.5h1a.5.5 0 0 0 .5-.5V4.5h3.51c.27 0 .49-.21.49-.5V3a.5.5 0 0 0-.49-.5H5.5V0h-2v2.5z'
            clipRule='evenodd'
          />
          <path
            fill='url(#fk-s)'
            fillRule='evenodd'
            d='M0 3h4V0h1v3h4v1H5v3H4V4H0z'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}
