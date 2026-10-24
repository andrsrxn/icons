import type { FlagIcon } from './types'

export const IconFlagAI: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'AI',
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
      data-slot='icon-flag-ai'
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
            id='ai-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='ai-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#0a17a7' />
            <stop offset='1' stopColor='#030e88' />
          </linearGradient>
          <linearGradient
            id='ai-d'
            x1='4.07'
            x2='4.07'
            y1='-.9'
            y2='7.9'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient id='ai-e' x1='4.5' x2='4.5' y1='0' y2='7' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#db1e36' />
            <stop offset='1' stopColor='#d51931' />
          </linearGradient>
          <linearGradient
            id='ai-f'
            x1='4.75'
            x2='4.75'
            y1='0'
            y2='7.5'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient id='ai-g' x1='4.5' x2='4.5' y1='0' y2='7' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#db1e36' />
            <stop offset='1' stopColor='#d51931' />
          </linearGradient>
          <linearGradient id='ai-i' x1='15' x2='15' y1='5' y2='10' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient id='ai-l' x1='15' x2='15' y1='6' y2='8' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#ffa51b' />
            <stop offset='1' stopColor='#ff9a00' />
          </linearGradient>
          <clipPath id='ai-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
          <filter
            id='ai-h'
            width='4'
            height='5.5'
            x='13'
            y='5'
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
            <feBlend in2='BackgroundImageFix' result='effect1_dropShadow_799_83' />
            <feBlend in='SourceGraphic' in2='effect1_dropShadow_799_83' result='shape' />
          </filter>
        </defs>
        <clipPath id='ai-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#ai-clip)'>
        <g clipPath='url(#ai-a)'>
          <path fill='url(#ai-b)' d='M21 0H0v15h21z' />
          <path fill='url(#ai-c)' d='M21 0H0v15h21z' />
          <path
            fill='url(#ai-d)'
            d='M3 3.23-1.35-.5H.66L4.16 2h.7L9.5-.9V.25c0 .3-.17.63-.42.8L6 3.26v.52l3.14 2.69c.46.4.2 1.04-.39 1.04-.25 0-.54-.1-.75-.24L4.84 5h-.7L-.5 7.9V6.24L3 3.74z'
          />
          <path
            fill='url(#ai-e)'
            fillRule='evenodd'
            d='M3.5 3 0 0h.5L4 2.5h1L9 0v.25c0 .14-.09.31-.2.4L5.5 3v1l3.31 2.84q.14.15-.06.16a1 1 0 0 1-.46-.15L5 4.5H4L0 7v-.5L3.5 4z'
            clipRule='evenodd'
          />
          <path
            fill='url(#ai-f)'
            fillRule='evenodd'
            d='M0 2.5v2h3.5V7c0 .28.21.5.5.5h1a.5.5 0 0 0 .5-.5V4.5h3.51c.27 0 .49-.21.49-.5V3a.5.5 0 0 0-.49-.5H5.5V0h-2v2.5z'
            clipRule='evenodd'
          />
          <path
            fill='url(#ai-g)'
            fillRule='evenodd'
            d='M0 3h4V0h1v3h4v1H5v3H4V4H0z'
            clipRule='evenodd'
          />
          <g filter='url(#ai-h)'>
            <path fill='#000' d='M13 7.5V5l1 .5 1-.5 1 .5 1-.5v2.5C17 9 15 10 15 10s-2-1-2-2.5' />
          </g>
          <path
            fill='url(#ai-i)'
            d='M13 7.5V5l1 .5 1-.5 1 .5 1-.5v2.5C17 9 15 10 15 10s-2-1-2-2.5'
          />
          <mask id='ai-j' width='4' height='5' x='13' y='5' maskUnits='userSpaceOnUse'>
            <path fill='#fff' d='M13 7.5V5l1 .5 1-.5 1 .5 1-.5v2.5C17 9 15 10 15 10s-2-1-2-2.5' />
          </mask>
          <g mask='url(#ai-j)'>
            <path fill='#9accff' d='M17 9h-4v1h4z' />
          </g>
          <mask id='ai-k' width='4' height='5' x='13' y='5' maskUnits='userSpaceOnUse'>
            <path fill='#fff' d='M13 7.5V5l1 .5 1-.5 1 .5 1-.5v2.5C17 9 15 10 15 10s-2-1-2-2.5' />
          </mask>
          <g mask='url(#ai-k)'>
            <path
              fill='url(#ai-l)'
              fillRule='evenodd'
              d='M15 7a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m-1 1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1'
              clipRule='evenodd'
            />
          </g>
        </g>
      </g>
    </svg>
  )
}
