import type { FlagIcon } from './types'

export const IconFlagZW: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'ZW',
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
      data-slot='icon-flag-zw'
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
            id='zw-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='zw-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='2'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#369d0c' />
            <stop offset='1' stopColor='#319209' />
          </linearGradient>
          <linearGradient
            id='zw-d'
            x1='10.5'
            x2='10.5'
            y1='13'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#369d0c' />
            <stop offset='1' stopColor='#319209' />
          </linearGradient>
          <linearGradient
            id='zw-e'
            x1='10.5'
            x2='10.5'
            y1='4'
            y2='6'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#369d0c' />
            <stop offset='1' stopColor='#319209' />
          </linearGradient>
          <linearGradient
            id='zw-f'
            x1='10.5'
            x2='10.5'
            y1='9'
            y2='11'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#369d0c' />
            <stop offset='1' stopColor='#319209' />
          </linearGradient>
          <linearGradient
            id='zw-g'
            x1='10.5'
            x2='10.5'
            y1='6'
            y2='9'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#262626' />
            <stop offset='1' stopColor='#0d0d0d' />
          </linearGradient>
          <linearGradient
            id='zw-h'
            x1='10.5'
            x2='10.5'
            y1='2'
            y2='4'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ffd40e' />
            <stop offset='1' stopColor='#ffd201' />
          </linearGradient>
          <linearGradient
            id='zw-i'
            x1='10.5'
            x2='10.5'
            y1='11'
            y2='13'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ffd40e' />
            <stop offset='1' stopColor='#ffd201' />
          </linearGradient>
          <linearGradient id='zw-j' x1='4.5' x2='4.5' y1='0' y2='15' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#262626' />
            <stop offset='1' stopColor='#0d0d0d' />
          </linearGradient>
          <linearGradient
            id='zw-k'
            x1='4.17'
            x2='4.17'
            y1='1.25'
            y2='13.75'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient id='zw-l' x1='3' x2='3' y1='5' y2='9.52' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#f12f1f' />
            <stop offset='1' stopColor='#de2010' />
          </linearGradient>
          <clipPath id='zw-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='zw-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#zw-clip)'>
        <g clipPath='url(#zw-a)'>
          <path fill='url(#zw-b)' d='M21 0H0v15h21z' />
          <path fill='url(#zw-c)' d='M21 0H0v2h21z' />
          <path fill='url(#zw-d)' d='M21 13H0v2h21z' />
          <path fill='url(#zw-e)' d='M21 4H0v2h21z' />
          <path fill='url(#zw-f)' d='M21 9H0v2h21z' />
          <path fill='url(#zw-g)' d='M21 6H0v3h21z' />
          <path fill='url(#zw-h)' d='M21 2H0v2h21z' />
          <path fill='url(#zw-i)' d='M21 11H0v2h21z' />
          <path fill='url(#zw-j)' d='M-1 15V0h1l10 7.5L0 15z' />
          <path fill='url(#zw-k)' d='M0 13.75 8.33 7.5 0 1.25z' />
          <path
            fill='url(#zw-l)'
            fillRule='evenodd'
            d='M3 8.48 1.53 9.52l.54-1.72L.62 6.73l1.8-.02L3 5l.57 1.71 1.8.02L3.94 7.8l.54 1.72z'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}
