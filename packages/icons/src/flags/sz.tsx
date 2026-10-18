import type { FlagIcon } from './types'

export const IconFlagSZ: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'SZ',
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
      data-slot='icon-flag-sz'
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
            id='sz-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='sz-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='3'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#486bca' />
            <stop offset='1' stopColor='#3e5fba' />
          </linearGradient>
          <linearGradient
            id='sz-d'
            x1='10.5'
            x2='10.5'
            y1='12'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#486bca' />
            <stop offset='1' stopColor='#3e5fba' />
          </linearGradient>
          <linearGradient
            id='sz-e'
            x1='10.5'
            x2='10.5'
            y1='3'
            y2='12'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ffdf20' />
            <stop offset='1' stopColor='#ffda00' />
          </linearGradient>
          <linearGradient
            id='sz-f'
            x1='10.5'
            x2='10.5'
            y1='4'
            y2='11'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#cf1615' />
            <stop offset='1' stopColor='#b20d0c' />
          </linearGradient>
          <linearGradient
            id='sz-g'
            x1='10.5'
            x2='10.5'
            y1='5'
            y2='10'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient id='sz-i' x1='8.5' x2='8.5' y1='5' y2='10' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#262626' />
            <stop offset='1' stopColor='#0d0d0d' />
          </linearGradient>
          <clipPath id='sz-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='sz-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#sz-clip)'>
        <g clipPath='url(#sz-a)'>
          <path fill='url(#sz-b)' d='M21 0H0v15h21z' />
          <path fill='url(#sz-c)' d='M21 0H0v3h21z' />
          <path fill='url(#sz-d)' d='M21 12H0v3h21z' />
          <path fill='url(#sz-e)' d='M21 3H0v9h21z' />
          <path fill='url(#sz-f)' d='M21 4H0v7h21z' />
          <path
            fill='url(#sz-g)'
            d='M10.5 10c2.49 0 4.5-1.12 4.5-2.5S12.99 5 10.5 5 6 6.12 6 7.5 8.01 10 10.5 10'
          />
          <mask
            id='sz-h'
            width='9'
            height='5'
            x='6'
            y='5'
            maskUnits='userSpaceOnUse'
            style={{ maskType: 'luminance' }}>
            <path
              fill='#fff'
              d='M10.5 10c2.49 0 4.5-1.12 4.5-2.5S12.99 5 10.5 5 6 6.12 6 7.5 8.01 10 10.5 10'
            />
          </mask>
          <g mask='url(#sz-h)'>
            <path fill='url(#sz-i)' fillRule='evenodd' d='M11 5H6v5h4z' clipRule='evenodd' />
          </g>
          <mask
            id='sz-j'
            width='9'
            height='5'
            x='6'
            y='5'
            maskUnits='userSpaceOnUse'
            style={{ maskType: 'luminance' }}>
            <path
              fill='#fff'
              d='M10.5 10c2.49 0 4.5-1.12 4.5-2.5S12.99 5 10.5 5 6 6.12 6 7.5 8.01 10 10.5 10'
            />
          </mask>
          <g mask='url(#sz-j)'>
            <path fill='#1a1a1a' d='M11.5 8.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2' />
          </g>
          <mask
            id='sz-k'
            width='9'
            height='5'
            x='6'
            y='5'
            maskUnits='userSpaceOnUse'
            style={{ maskType: 'luminance' }}>
            <path
              fill='#fff'
              d='M10.5 10c2.49 0 4.5-1.12 4.5-2.5S12.99 5 10.5 5 6 6.12 6 7.5 8.01 10 10.5 10'
            />
          </mask>
          <g mask='url(#sz-k)'>
            <path fill='#f6f6f6' d='M9.5 8.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2' />
          </g>
        </g>
      </g>
    </svg>
  )
}
