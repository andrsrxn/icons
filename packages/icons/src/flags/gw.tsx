import type { FlagIcon } from './types'

export const IconFlagGW: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'GW',
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
      data-slot='icon-flag-gw'
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
            id='gw-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='gw-c'
            x1='10.5'
            x2='10.5'
            y1='7'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#1ab558' />
            <stop offset='1' stopColor='#169e4d' />
          </linearGradient>
          <linearGradient
            id='gw-d'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='7'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ffd952' />
            <stop offset='1' stopColor='#fcd036' />
          </linearGradient>
          <linearGradient id='gw-e' x1='4' x2='4' y1='0' y2='15' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#e72b42' />
            <stop offset='1' stopColor='#cc162c' />
          </linearGradient>
          <linearGradient id='gw-f' x1='4' x2='4' y1='5' y2='9.52' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#262626' />
            <stop offset='1' stopColor='#0d0d0d' />
          </linearGradient>
          <clipPath id='gw-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='gw-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#gw-clip)'>
        <g clipPath='url(#gw-a)'>
          <path fill='url(#gw-b)' d='M21 0H0v15h21z' />
          <path fill='url(#gw-c)' d='M21 7H0v8h21z' />
          <path fill='url(#gw-d)' d='M21 0H0v7h21z' />
          <path fill='url(#gw-e)' d='M8 0H0v15h8z' />
          <path
            fill='url(#gw-f)'
            fillRule='evenodd'
            d='M4 8.46 2.53 9.52 3.1 7.8 1.62 6.73h1.82L4 5l.56 1.72h1.82L4.9 7.8l.56 1.72z'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}
