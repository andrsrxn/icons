import type { FlagIcon } from './types'

export const IconFlagMZ: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'MZ',
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
      data-slot='icon-flag-mz'
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
            id='mz-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='mz-c'
            x1='10.5'
            x2='10.5'
            y1='11'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ffe547' />
            <stop offset='1' stopColor='#fce032' />
          </linearGradient>
          <linearGradient
            id='mz-d'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='4'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#118c81' />
            <stop offset='1' stopColor='#0d7168' />
          </linearGradient>
          <linearGradient
            id='mz-e'
            x1='10.5'
            x2='10.5'
            y1='4'
            y2='11'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='mz-f'
            x1='10.5'
            x2='10.5'
            y1='5'
            y2='10'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#262626' />
            <stop offset='1' stopColor='#0d0d0d' />
          </linearGradient>
          <linearGradient id='mz-g' x1='5' x2='5' y1='0' y2='15' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ef2147' />
            <stop offset='1' stopColor='#d01739' />
          </linearGradient>
          <linearGradient
            id='mz-h'
            x1='3.5'
            x2='3.5'
            y1='5'
            y2='9.52'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fde444' />
            <stop offset='1' stopColor='#fce032' />
          </linearGradient>
          <clipPath id='mz-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='mz-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#mz-clip)'>
        <g clipPath='url(#mz-a)'>
          <path fill='url(#mz-b)' d='M21 0H0v15h21z' />
          <path fill='url(#mz-c)' d='M21 11H0v4h21z' />
          <path fill='url(#mz-d)' d='M21 0H0v4h21z' />
          <path fill='url(#mz-e)' d='M21 4H0v7h21z' />
          <path fill='url(#mz-f)' d='M21 5H0v5h21z' />
          <path fill='url(#mz-g)' fillRule='evenodd' d='m0 0 10 7.5L0 15z' clipRule='evenodd' />
          <path
            fill='url(#mz-h)'
            fillRule='evenodd'
            d='M3.5 8.46 2.03 9.52 2.6 7.8 1.12 6.73h1.82L3.5 5l.56 1.73h1.82L4.4 7.8l.56 1.72z'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}
