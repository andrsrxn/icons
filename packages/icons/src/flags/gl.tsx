import type { FlagIcon } from './types'

export const IconFlagGL: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'GL',
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
      data-slot='icon-flag-gl'
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
            id='gl-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='gl-d'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='8'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='gl-e'
            x1='10.5'
            x2='10.5'
            y1='4'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#e82245' />
            <stop offset='1' stopColor='#cc1838' />
          </linearGradient>
          <linearGradient id='gl-f' x1='7' x2='7' y1='8' y2='12' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <clipPath id='gl-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
          <filter
            id='gl-c'
            width='21'
            height='8'
            x='0'
            y='0'
            colorInterpolationFilters='sRGB'
            filterUnits='userSpaceOnUse'>
            <feFlood floodOpacity='0' result='BackgroundImageFix' />
            <feColorMatrix
              in='SourceAlpha'
              result='hardAlpha'
              values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            />
            <feOffset />
            <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0' />
            <feBlend in2='BackgroundImageFix' result='effect1_dropShadow_799_927' />
            <feBlend in='SourceGraphic' in2='effect1_dropShadow_799_927' result='shape' />
          </filter>
        </defs>
        <clipPath id='gl-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#gl-clip)'>
        <g clipPath='url(#gl-a)'>
          <path fill='url(#gl-b)' d='M21 0H0v15h21z' />
          <g filter='url(#gl-c)'>
            <path fill='#000' d='M21 0H0v8h21z' />
          </g>
          <path fill='url(#gl-d)' d='M21 0H0v8h21z' />
          <path
            fill='url(#gl-e)'
            fillRule='evenodd'
            d='M3 8H0v7h21V8H11a4 4 0 1 0-8 0'
            clipRule='evenodd'
          />
          <path fill='url(#gl-f)' fillRule='evenodd' d='M3 8a4 4 0 0 0 8 0z' clipRule='evenodd' />
        </g>
      </g>
    </svg>
  )
}
