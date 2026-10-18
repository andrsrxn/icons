import type { FlagIcon } from './types'

export const IconFlagKE: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'KE',
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
      data-slot='icon-flag-ke'
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
            id='ke-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='ke-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='4'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#262626' />
            <stop offset='1' stopColor='#0d0d0d' />
          </linearGradient>
          <linearGradient
            id='ke-d'
            x1='10.5'
            x2='10.5'
            y1='11'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#018301' />
            <stop offset='1' stopColor='#006700' />
          </linearGradient>
          <linearGradient
            id='ke-e'
            x1='10.5'
            x2='10.5'
            y1='4'
            y2='11'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='ke-f'
            x1='10.5'
            x2='10.5'
            y1='5'
            y2='10'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#dc0808' />
            <stop offset='1' stopColor='#bc0000' />
          </linearGradient>
          <linearGradient id='ke-h' x1='6.5' x2='6.5' y1='2' y2='13' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#262626' />
            <stop offset='1' stopColor='#0d0d0d' />
          </linearGradient>
          <linearGradient
            id='ke-j'
            x1='14.5'
            x2='14.5'
            y1='2'
            y2='13'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#262626' />
            <stop offset='1' stopColor='#0d0d0d' />
          </linearGradient>
          <linearGradient
            id='ke-l'
            x1='10.5'
            x2='10.5'
            y1='2'
            y2='13'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <clipPath id='ke-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='ke-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#ke-clip)'>
        <g clipPath='url(#ke-a)'>
          <path fill='url(#ke-b)' d='M21 0H0v15h21z' />
          <path fill='url(#ke-c)' d='M21 0H0v4h21z' />
          <path fill='url(#ke-d)' d='M21 11H0v4h21z' />
          <path fill='url(#ke-e)' d='M21 4H0v7h21z' />
          <path fill='url(#ke-f)' d='M21 5H0v5h21z' />
          <path
            fill='#bc0000'
            d='M10.5 12.5c1 0 2.5-1.96 2.5-5s-1.5-5-2.5-5S8 4.46 8 7.5s1.5 5 2.5 5'
          />
          <mask
            id='ke-g'
            width='5'
            height='11'
            x='8'
            y='2'
            maskUnits='userSpaceOnUse'
            style={{ maskType: 'luminance' }}>
            <path
              fill='#fff'
              d='M10.5 12.5c1 0 2.5-1.96 2.5-5s-1.5-5-2.5-5S8 4.46 8 7.5s1.5 5 2.5 5'
            />
          </mask>
          <g mask='url(#ke-g)'>
            <path
              fill='url(#ke-h)'
              d='M6.5 13C7.88 13 9 10.54 9 7.5S7.88 2 6.5 2 4 4.46 4 7.5 5.12 13 6.5 13'
            />
          </g>
          <mask
            id='ke-i'
            width='5'
            height='11'
            x='8'
            y='2'
            maskUnits='userSpaceOnUse'
            style={{ maskType: 'luminance' }}>
            <path
              fill='#fff'
              d='M10.5 12.5c1 0 2.5-1.96 2.5-5s-1.5-5-2.5-5S8 4.46 8 7.5s1.5 5 2.5 5'
            />
          </mask>
          <g mask='url(#ke-i)'>
            <path
              fill='url(#ke-j)'
              d='M14.5 13c1.38 0 2.5-2.46 2.5-5.5S15.88 2 14.5 2 12 4.46 12 7.5s1.12 5.5 2.5 5.5'
            />
          </g>
          <mask
            id='ke-k'
            width='5'
            height='11'
            x='8'
            y='2'
            maskUnits='userSpaceOnUse'
            style={{ maskType: 'luminance' }}>
            <path
              fill='#fff'
              d='M10.5 12.5c1 0 2.5-1.96 2.5-5s-1.5-5-2.5-5S8 4.46 8 7.5s1.5 5 2.5 5'
            />
          </mask>
          <g mask='url(#ke-k)'>
            <path
              fill='url(#ke-l)'
              fillRule='evenodd'
              d='M10.5 9c-.28 0-.5-.67-.5-1.5s.22-1.5.5-1.5.5.67.5 1.5-.22 1.5-.5 1.5m0-3c-.28 0-.5-.9-.5-2s.22-2 .5-2 .5.9.5 2-.22 2-.5 2m0 7c-.28 0-.5-.9-.5-2s.22-2 .5-2 .5.9.5 2-.22 2-.5 2'
              clipRule='evenodd'
            />
          </g>
        </g>
      </g>
    </svg>
  )
}
