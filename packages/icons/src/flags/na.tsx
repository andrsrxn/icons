import type { FlagIcon } from './types'

export const IconFlagNA: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'NA',
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
      data-slot='icon-flag-na'
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
            id='na-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='na-d'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='10'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#0c4799' />
            <stop offset='1' stopColor='#05387e' />
          </linearGradient>
          <linearGradient
            id='na-f'
            x1='3.5'
            x2='3.5'
            y1='1.66'
            y2='5.35'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ffd243' />
            <stop offset='1' stopColor='#ffcd2f' />
          </linearGradient>
          <linearGradient
            id='na-h'
            x1='10.5'
            x2='10.5'
            y1='5'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#1bac55' />
            <stop offset='1' stopColor='#149447' />
          </linearGradient>
          <linearGradient
            id='na-j'
            x1='10.5'
            x2='10.5'
            y1='-2'
            y2='17'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='na-k'
            x1='10.5'
            x2='10.5'
            y1='-2.3'
            y2='17.31'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#e52347' />
            <stop offset='1' stopColor='#d01739' />
          </linearGradient>
          <filter
            id='na-c'
            width='21'
            height='10'
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
            <feBlend in2='BackgroundImageFix' result='effect1_dropShadow_799_1705' />
            <feBlend in='SourceGraphic' in2='effect1_dropShadow_799_1705' result='shape' />
          </filter>
          <filter
            id='na-e'
            width='3.7'
            height='4.2'
            x='1.65'
            y='1.66'
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
            <feBlend in2='BackgroundImageFix' result='effect1_dropShadow_799_1705' />
            <feBlend in='SourceGraphic' in2='effect1_dropShadow_799_1705' result='shape' />
          </filter>
          <filter
            id='na-g'
            width='21'
            height='10'
            x='0'
            y='5'
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
            <feBlend in2='BackgroundImageFix' result='effect1_dropShadow_799_1705' />
            <feBlend in='SourceGraphic' in2='effect1_dropShadow_799_1705' result='shape' />
          </filter>
          <filter
            id='na-i'
            width='24.26'
            height='19'
            x='-1.63'
            y='-2'
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
            <feBlend in2='BackgroundImageFix' result='effect1_dropShadow_799_1705' />
            <feBlend in='SourceGraphic' in2='effect1_dropShadow_799_1705' result='shape' />
          </filter>
          <clipPath id='na-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='na-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#na-clip)'>
        <g clipPath='url(#na-a)'>
          <path fill='url(#na-b)' d='M21 0H0v15h21z' />
          <g filter='url(#na-c)'>
            <path fill='#000' d='M0 10 21 0H0z' />
          </g>
          <path fill='url(#na-d)' d='M0 10 21 0H0z' />
          <g filter='url(#na-e)'>
            <path
              fill='#000'
              d='m3.5 4.5-.76.85.05-1.14-1.14.06.85-.77-.85-.76 1.14.06-.05-1.14.76.84.77-.84L4.2 2.8l1.14-.06-.85.76.85.77L4.2 4.2l.06 1.14z'
            />
          </g>
          <path
            fill='url(#na-f)'
            d='m3.5 4.5-.76.85.05-1.14-1.14.06.85-.77-.85-.76 1.14.06-.05-1.14.76.84.77-.84L4.2 2.8l1.14-.06-.85.76.85.77L4.2 4.2l.06 1.14z'
          />
          <g filter='url(#na-g)'>
            <path fill='#000' d='M0 15h21V5z' />
          </g>
          <path fill='url(#na-h)' d='M0 15h21V5z' />
          <g filter='url(#na-i)'>
            <path fill='#000' d='M2.31 17 22.63 4.3 18.69-2-1.63 10.7z' />
          </g>
          <path fill='url(#na-j)' d='M2.31 17 22.63 4.3 18.69-2-1.63 10.7z' />
          <path
            fill='url(#na-k)'
            fillRule='evenodd'
            d='m-.47 17.3 24.6-15.36-2.66-4.24-24.59 15.37z'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}
