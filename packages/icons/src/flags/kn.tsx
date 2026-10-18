import type { FlagIcon } from './types'

export const IconFlagKN: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'KN',
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
      data-slot='icon-flag-kn'
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
            id='kn-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='kn-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='10'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#1ec160' />
            <stop offset='1' stopColor='#169e4d' />
          </linearGradient>
          <linearGradient
            id='kn-d'
            x1='10.5'
            x2='10.5'
            y1='5'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#df2a40' />
            <stop offset='1' stopColor='#cc162c' />
          </linearGradient>
          <linearGradient
            id='kn-e'
            x1='10.5'
            x2='10.5'
            y1='-.15'
            y2='14.96'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ffd956' />
            <stop offset='1' stopColor='#fcd036' />
          </linearGradient>
          <linearGradient
            id='kn-f'
            x1='10.5'
            x2='10.5'
            y1='-2.3'
            y2='17.3'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#262626' />
            <stop offset='1' stopColor='#0d0d0d' />
          </linearGradient>
          <linearGradient
            id='kn-g'
            x1='14.67'
            x2='14.67'
            y1='3.25'
            y2='6.97'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='kn-h'
            x1='6.67'
            x2='6.67'
            y1='8.1'
            y2='11.82'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <clipPath id='kn-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='kn-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#kn-clip)'>
        <g clipPath='url(#kn-a)'>
          <path fill='url(#kn-b)' d='M21 0H0v15h21z' />
          <path fill='url(#kn-c)' fillRule='evenodd' d='M0 10 21 0H0z' clipRule='evenodd' />
          <path fill='url(#kn-d)' fillRule='evenodd' d='M0 15h21V5z' clipRule='evenodd' />
          <path
            fill='url(#kn-e)'
            fillRule='evenodd'
            d='m.59 19 24.6-15.37L20.4-4-4.18 11.37z'
            clipRule='evenodd'
          />
          <path
            fill='url(#kn-f)'
            fillRule='evenodd'
            d='m-.47 17.3 24.6-15.36-2.66-4.24-24.59 15.36z'
            clipRule='evenodd'
          />
          <path
            fill='url(#kn-g)'
            fillRule='evenodd'
            d='m15.23 5.85-.7 1.12-.47-1.24-1.28-.33 1.04-.82-.09-1.33 1.1.74 1.24-.5-.36 1.28.85 1.03z'
            clipRule='evenodd'
          />
          <path
            fill='url(#kn-h)'
            fillRule='evenodd'
            d='m7.23 10.7-.7 1.12-.47-1.24-1.28-.33 1.04-.82-.09-1.33 1.1.74 1.24-.5-.36 1.28.85 1.03z'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}
