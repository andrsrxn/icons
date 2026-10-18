import type { FlagIcon } from './types'

export const IconFlagPK: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'PK',
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
      data-slot='icon-flag-pk'
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
            id='pk-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='pk-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#0a632f' />
            <stop offset='1' stopColor='#05411e' />
          </linearGradient>
          <linearGradient id='pk-d' x1='3' x2='3' y1='0' y2='15' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='pk-f'
            x1='10.28'
            x2='16.65'
            y1='4.15'
            y2='10.51'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <clipPath id='pk-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
          <filter
            id='pk-e'
            width='8.79'
            height='9.29'
            x='8.96'
            y='3.04'
            colorInterpolationFilters='sRGB'
            filterUnits='userSpaceOnUse'>
            <feFlood floodOpacity='0' result='BackgroundImageFix' />
            <feColorMatrix
              in='SourceAlpha'
              result='hardAlpha'
              values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            />
            <feOffset dy='.5' />
            <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0' />
            <feBlend in2='BackgroundImageFix' result='effect1_dropShadow_799_1900' />
            <feBlend in='SourceGraphic' in2='effect1_dropShadow_799_1900' result='shape' />
          </filter>
        </defs>
        <clipPath id='pk-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#pk-clip)'>
        <g clipPath='url(#pk-a)'>
          <path fill='url(#pk-b)' d='M21 0H0v15h21z' />
          <path fill='url(#pk-c)' d='M21 0H0v15h21z' />
          <path fill='url(#pk-d)' d='M6 0H0v15h6z' />
          <g filter='url(#pk-e)'>
            <path
              fill='#000'
              d='M17.75 8.06c-.1.94-.5 1.84-1.2 2.55a4.4 4.4 0 0 1-6.23-.14 4.4 4.4 0 0 1-.13-6.23c.7-.7 1.6-1.1 2.54-1.2q-.45.26-.83.64c-1.53 1.54-1.6 3.94-.17 5.38s3.85 1.36 5.38-.17q.38-.38.64-.83m-1.93-1.98-.24 1.42-.67-1.28-1.42.21 1-1.03-.64-1.29 1.3.64 1.03-1-.22 1.42 1.28.67z'
            />
          </g>
          <path
            fill='url(#pk-f)'
            d='M17.75 8.06c-.1.94-.5 1.84-1.2 2.55a4.4 4.4 0 0 1-6.23-.14 4.4 4.4 0 0 1-.13-6.23c.7-.7 1.6-1.1 2.54-1.2q-.45.26-.83.64c-1.53 1.54-1.6 3.94-.17 5.38s3.85 1.36 5.38-.17q.38-.38.64-.83m-1.93-1.98-.24 1.42-.67-1.28-1.42.21 1-1.03-.64-1.29 1.3.64 1.03-1-.22 1.42 1.28.67z'
          />
        </g>
      </g>
    </svg>
  )
}
