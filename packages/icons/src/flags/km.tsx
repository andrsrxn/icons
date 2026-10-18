import type { FlagIcon } from './types'

export const IconFlagKM: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'KM',
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
      data-slot='icon-flag-km'
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
            id='km-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='km-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='4'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ffcb49' />
            <stop offset='1' stopColor='#ffc638' />
          </linearGradient>
          <linearGradient
            id='km-d'
            x1='10.5'
            x2='10.5'
            y1='7'
            y2='11'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#dc1d34' />
            <stop offset='1' stopColor='#cc162c' />
          </linearGradient>
          <linearGradient
            id='km-e'
            x1='10.5'
            x2='10.5'
            y1='11'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#4985d4' />
            <stop offset='1' stopColor='#3d77c2' />
          </linearGradient>
          <linearGradient
            id='km-f'
            x1='10.5'
            x2='10.5'
            y1='4'
            y2='7'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient id='km-g' x1='5' x2='5' y1='0' y2='15' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#4ba343' />
            <stop offset='1' stopColor='#408d39' />
          </linearGradient>
          <linearGradient
            id='km-h'
            x1='3.5'
            x2='3.5'
            y1='4.5'
            y2='10.5'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <clipPath id='km-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='km-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#km-clip)'>
        <g clipPath='url(#km-a)'>
          <path fill='url(#km-b)' d='M21 0H0v15h21z' />
          <path fill='url(#km-c)' d='M21 0H0v4h21z' />
          <path fill='url(#km-d)' d='M21 7H0v4h21z' />
          <path fill='url(#km-e)' d='M21 11H0v4h21z' />
          <path fill='url(#km-f)' d='M21 4H0v3h21z' />
          <path fill='url(#km-g)' fillRule='evenodd' d='m0 15 10-7.5L0 0z' clipRule='evenodd' />
          <path
            fill='url(#km-h)'
            fillRule='evenodd'
            d='M4.75 4.6a3 3 0 1 0 0 5.8 3 3 0 0 1 0-5.8M5.5 6a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m0 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m0 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}
