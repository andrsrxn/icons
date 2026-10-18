import type { FlagIcon } from './types'

export const IconFlagTZ: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'TZ',
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
      data-slot='icon-flag-tz'
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
            id='tz-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='tz-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='10'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#33cc4d' />
            <stop offset='1' stopColor='#2ab441' />
          </linearGradient>
          <linearGradient
            id='tz-d'
            x1='10.5'
            x2='10.5'
            y1='5'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#2dafe4' />
            <stop offset='1' stopColor='#1ba4dc' />
          </linearGradient>
          <linearGradient
            id='tz-e'
            x1='10.5'
            x2='10.5'
            y1='-2'
            y2='17'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ffd84f' />
            <stop offset='1' stopColor='#fcd036' />
          </linearGradient>
          <linearGradient
            id='tz-f'
            x1='10.5'
            x2='10.5'
            y1='-2.3'
            y2='17.31'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#262626' />
            <stop offset='1' stopColor='#0d0d0d' />
          </linearGradient>
          <clipPath id='tz-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='tz-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#tz-clip)'>
        <g clipPath='url(#tz-a)'>
          <path fill='url(#tz-b)' d='M21 0H0v15h21z' />
          <path fill='url(#tz-c)' fillRule='evenodd' d='M0 10 21 0H0z' clipRule='evenodd' />
          <path fill='url(#tz-d)' fillRule='evenodd' d='M0 15h21V5z' clipRule='evenodd' />
          <path
            fill='url(#tz-e)'
            fillRule='evenodd'
            d='M2.31 17 22.63 4.3 18.69-2-1.63 10.7z'
            clipRule='evenodd'
          />
          <path
            fill='url(#tz-f)'
            fillRule='evenodd'
            d='m-.47 17.3 24.6-15.36-2.66-4.24-24.59 15.37z'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}
