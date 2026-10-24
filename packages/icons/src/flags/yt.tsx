import type { FlagIcon } from './types'

export const IconFlagYT: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'YT',
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
      data-slot='icon-flag-yt'
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
            id='yt-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='yt-e'
            x1='10.5'
            x2='10.5'
            y1='4'
            y2='7'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#1b2ca9' />
            <stop offset='1' stopColor='#132294' />
          </linearGradient>
          <linearGradient
            id='yt-h'
            x1='10.5'
            x2='10.5'
            y1='7'
            y2='11'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#e6402c' />
            <stop offset='1' stopColor='#d1321f' />
          </linearGradient>
          <linearGradient
            id='yt-i'
            x1='16'
            x2='16'
            y1='3.44'
            y2='10.72'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#d0d0d0' />
            <stop offset='1' stopColor='#c4c4c4' />
          </linearGradient>
          <linearGradient
            id='yt-j'
            x1='5'
            x2='5'
            y1='3.44'
            y2='10.72'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#d0d0d0' />
            <stop offset='1' stopColor='#c4c4c4' />
          </linearGradient>
          <linearGradient
            id='yt-k'
            x1='10.5'
            x2='10.5'
            y1='5'
            y2='6.5'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='yt-l'
            x1='10.5'
            x2='10.5'
            y1='8'
            y2='9'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#f7e04b' />
            <stop offset='1' stopColor='#ead135' />
          </linearGradient>
          <filter
            id='yt-d'
            width='5'
            height='3'
            x='8'
            y='4'
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
            <feBlend in2='BackgroundImageFix' result='effect1_dropShadow_799_2639' />
            <feBlend in='SourceGraphic' in2='effect1_dropShadow_799_2639' result='shape' />
          </filter>
          <filter
            id='yt-g'
            width='5'
            height='4'
            x='8'
            y='7'
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
            <feBlend in2='BackgroundImageFix' result='effect1_dropShadow_799_2639' />
            <feBlend in='SourceGraphic' in2='effect1_dropShadow_799_2639' result='shape' />
          </filter>
          <clipPath id='yt-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='yt-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#yt-clip)'>
        <g clipPath='url(#yt-a)'>
          <path fill='url(#yt-b)' d='M21 0H0v15h21z' />
          <path
            fill='#d8d8d8'
            d='M8 4.5c0-.28.21-.5.5-.5h4c.28 0 .5.23.5.5v5c0 .28-.22.5-.5.53 0 0-1.5-.03-2 .91-.5-.94-2-.9-2-.9A.54.54 0 0 1 8 9.5z'
          />
          <mask id='yt-c' width='5' height='7' x='8' y='4' maskUnits='userSpaceOnUse'>
            <path
              fill='#fff'
              d='M8 4.5c0-.28.21-.5.5-.5h4c.28 0 .5.23.5.5v5c0 .28-.22.5-.5.53 0 0-1.5-.03-2 .91-.5-.94-2-.9-2-.9A.54.54 0 0 1 8 9.5z'
            />
          </mask>
          <g mask='url(#yt-c)'>
            <g filter='url(#yt-d)'>
              <path fill='#000' d='M13 4H8v3h5z' />
            </g>
            <path fill='url(#yt-e)' d='M13 4H8v3h5z' />
          </g>
          <mask id='yt-f' width='5' height='7' x='8' y='4' maskUnits='userSpaceOnUse'>
            <path
              fill='#fff'
              d='M8 4.5c0-.28.21-.5.5-.5h4c.28 0 .5.23.5.5v5c0 .28-.22.5-.5.53 0 0-1.5-.03-2 .91-.5-.94-2-.9-2-.9A.54.54 0 0 1 8 9.5z'
            />
          </mask>
          <g mask='url(#yt-f)'>
            <g filter='url(#yt-g)'>
              <path fill='#000' d='M13 7H8v4h5z' />
            </g>
            <path fill='url(#yt-h)' d='M13 7H8v4h5z' />
          </g>
          <path
            fill='url(#yt-i)'
            fillRule='evenodd'
            d='M15.04 4.73v-.47L15.5 4s-.46-.56-.23-.56c.27 0 1.43.37 1.73.56s.45.42.5.85-.32.98-.32.98l-.18.42.79-.18s.13.83-.45 1.43-1.4.49-1.4.49l-.16-.49s-.53.2-.85.67c-.3.47-.4 1.28.1 1.78.52.5 1.35.46 1.75-.25 0 0 .16-.62-.21-.9-.37-.3-.62.3-.63.27-.07-.21-.16-.57.43-.57.6 0 .9.64.81 1.13s-.26.95-1.4 1.08c-1.15.13-1.44-1.32-1.44-1.32s-.3-1.36 0-2.34c.29-.98.72-1 1.6-1.54s-.53-.18-.53-.18-.67.5-.88.32c-.21-.19.5-.92.5-.92'
            clipRule='evenodd'
          />
          <path
            fill='url(#yt-j)'
            fillRule='evenodd'
            d='M5.96 4.73v-.47L5.5 4s.46-.56.23-.56c-.27 0-1.43.37-1.73.56s-.45.42-.5.85.32.98.32.98l.18.42-.79-.18s-.13.83.45 1.43 1.4.49 1.4.49l.16-.49s.53.2.85.67c.3.47.4 1.28-.1 1.78-.52.5-1.35.46-1.75-.25 0 0-.16-.62.21-.9.37-.3.62.3.63.27.07-.21.16-.57-.43-.57-.6 0-.9.64-.81 1.13s.26.95 1.4 1.08c1.15.13 1.44-1.32 1.44-1.32s.3-1.36 0-2.34c-.29-.98-.72-1-1.6-1.54s.53-.18.53-.18.67.5.88.32c.21-.19-.5-.92-.5-.92'
            clipRule='evenodd'
          />
          <path
            fill='url(#yt-k)'
            fillRule='evenodd'
            d='M9.63 5a1 1 0 1 0 1.73 0 1 1 0 0 1-1.73 0'
            clipRule='evenodd'
          />
          <path
            fill='url(#yt-l)'
            fillRule='evenodd'
            d='M9.5 9a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}
