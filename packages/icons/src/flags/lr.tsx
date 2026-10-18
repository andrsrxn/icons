import type { FlagIcon } from './types'

export const IconFlagLR: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'LR',
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
      data-slot='icon-flag-lr'
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
            id='lr-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='lr-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='14'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#e1244a' />
            <stop offset='1' stopColor='#be1134' />
          </linearGradient>
          <linearGradient id='lr-d' x1='5' x2='5' y1='0' y2='10' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#0c3f8e' />
            <stop offset='1' stopColor='#032a67' />
          </linearGradient>
          <linearGradient id='lr-f' x1='5' x2='5' y1='2' y2='7.43' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <clipPath id='lr-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
          <filter
            id='lr-e'
            width='5.71'
            height='5.93'
            x='2.15'
            y='2'
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
            <feBlend in2='BackgroundImageFix' result='effect1_dropShadow_799_1458' />
            <feBlend in='SourceGraphic' in2='effect1_dropShadow_799_1458' result='shape' />
          </filter>
        </defs>
        <clipPath id='lr-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#lr-clip)'>
        <g clipPath='url(#lr-a)'>
          <path fill='url(#lr-b)' d='M21 0H0v15h21z' />
          <path
            fill='url(#lr-c)'
            fillRule='evenodd'
            d='M10 0h11v2H10zm0 4h11v2H10zm0 4h11v2H10zM0 12h21v2H0z'
            clipRule='evenodd'
          />
          <path fill='url(#lr-d)' d='M10 0H0v10h10z' />
          <g filter='url(#lr-e)'>
            <path
              fill='#000'
              d='M5 6.17 3.24 7.43l.65-2.07-1.74-1.29 2.16-.02L5 2l.69 2.05 2.16.02-1.74 1.3.65 2.06z'
            />
          </g>
          <path
            fill='url(#lr-f)'
            d='M5 6.17 3.24 7.43l.65-2.07-1.74-1.29 2.16-.02L5 2l.69 2.05 2.16.02-1.74 1.3.65 2.06z'
          />
        </g>
      </g>
    </svg>
  )
}
