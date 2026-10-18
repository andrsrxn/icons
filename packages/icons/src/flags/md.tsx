import type { FlagIcon } from './types'

export const IconFlagMD: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'MD',
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
      data-slot='icon-flag-md'
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
            id='md-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='md-c'
            x1='15.5'
            x2='15.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#eb1c43' />
            <stop offset='1' stopColor='#ca1134' />
          </linearGradient>
          <linearGradient id='md-d' x1='3.5' x2='3.5' y1='0' y2='15' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#115bcb' />
            <stop offset='1' stopColor='#094aac' />
          </linearGradient>
          <linearGradient
            id='md-f'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ffd953' />
            <stop offset='1' stopColor='#ffd130' />
          </linearGradient>
          <clipPath id='md-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
          <filter
            id='md-e'
            width='7'
            height='15'
            x='7'
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
            <feBlend in2='BackgroundImageFix' result='effect1_dropShadow_799_1518' />
            <feBlend in='SourceGraphic' in2='effect1_dropShadow_799_1518' result='shape' />
          </filter>
        </defs>
        <clipPath id='md-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#md-clip)'>
        <g clipPath='url(#md-a)'>
          <path fill='url(#md-b)' d='M21 0H0v15h21z' />
          <path fill='url(#md-c)' d='M21 0H10v15h11z' />
          <path fill='url(#md-d)' d='M7 0H0v15h7z' />
          <g filter='url(#md-e)'>
            <path fill='#000' d='M14 0H7v15h7z' />
          </g>
          <path fill='url(#md-f)' d='M14 0H7v15h7z' />
          <path
            fill='#af7f59'
            fillRule='evenodd'
            d='M9 6h1l.5-1.5L11 6h1v3l-1.5 1L9 9zm1 1v1.5h1V7z'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}
