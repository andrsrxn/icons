import type { FlagIcon } from './types'

export const IconFlagTM: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  'aria-label': ariaLabel = 'TM',
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
      data-slot='icon-flag-tm'
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
            id='tm-b'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='tm-c'
            x1='10.5'
            x2='10.5'
            y1='0'
            y2='15'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#30c375' />
            <stop offset='1' stopColor='#28ae67' />
          </linearGradient>
          <linearGradient id='tm-d' x1='4.5' x2='4.5' y1='0' y2='15' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#de414f' />
            <stop offset='1' stopColor='#ca3745' />
          </linearGradient>
          <linearGradient id='tm-o' x1='10' x2='10' y1='2' y2='6' gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <linearGradient
            id='tm-p'
            x1='11.24'
            x2='11.24'
            y1='2.46'
            y2='7.98'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor='#fff' />
            <stop offset='1' stopColor='#f0f0f0' />
          </linearGradient>
          <clipPath id='tm-a'>
            <path fill='#fff' d='M0 0h21v15H0z' />
          </clipPath>
        </defs>
        <clipPath id='tm-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#tm-clip)'>
        <g clipPath='url(#tm-a)'>
          <path fill='url(#tm-b)' d='M21 0H0v15h21z' />
          <path fill='url(#tm-c)' d='M21 0H0v15h21z' />
          <path fill='url(#tm-d)' d='M6 0H3v15h3z' />
          <path fill='#fff' d='M4.5 3C5.33 3 6 2.55 6 2s-.67-1-1.5-1S3 1.45 3 2s.67 1 1.5 1' />
          <mask
            id='tm-e'
            width='3'
            height='2'
            x='3'
            y='1'
            maskUnits='userSpaceOnUse'
            style={{ maskType: 'luminance' }}>
            <path fill='#fff' d='M4.5 3C5.33 3 6 2.55 6 2s-.67-1-1.5-1S3 1.45 3 2s.67 1 1.5 1' />
          </mask>
          <g mask='url(#tm-e)'>
            <path fill='#dd404f' d='M4.5 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2' />
          </g>
          <mask
            id='tm-f'
            width='3'
            height='2'
            x='3'
            y='1'
            maskUnits='userSpaceOnUse'
            style={{ maskType: 'luminance' }}>
            <path fill='#fff' d='M4.5 3C5.33 3 6 2.55 6 2s-.67-1-1.5-1S3 1.45 3 2s.67 1 1.5 1' />
          </mask>
          <g mask='url(#tm-f)'>
            <path fill='#fbaf29' d='M4.5 1H3v1h1.5z' />
          </g>
          <mask
            id='tm-g'
            width='3'
            height='2'
            x='3'
            y='1'
            maskUnits='userSpaceOnUse'
            style={{ maskType: 'luminance' }}>
            <path fill='#fff' d='M4.5 3C5.33 3 6 2.55 6 2s-.67-1-1.5-1S3 1.45 3 2s.67 1 1.5 1' />
          </mask>
          <g mask='url(#tm-g)'>
            <path fill='#fbaf29' d='M6 2H4.5v1H6z' />
          </g>
          <path fill='#fff' d='M4.5 14c.83 0 1.5-.45 1.5-1s-.67-1-1.5-1-1.5.45-1.5 1 .67 1 1.5 1' />
          <mask
            id='tm-h'
            width='3'
            height='2'
            x='3'
            y='12'
            maskUnits='userSpaceOnUse'
            style={{ maskType: 'luminance' }}>
            <path
              fill='#fff'
              d='M4.5 14c.83 0 1.5-.45 1.5-1s-.67-1-1.5-1-1.5.45-1.5 1 .67 1 1.5 1'
            />
          </mask>
          <g mask='url(#tm-h)'>
            <path fill='#dd404f' d='M4.5 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2' />
          </g>
          <mask
            id='tm-i'
            width='3'
            height='2'
            x='3'
            y='12'
            maskUnits='userSpaceOnUse'
            style={{ maskType: 'luminance' }}>
            <path
              fill='#fff'
              d='M4.5 14c.83 0 1.5-.45 1.5-1s-.67-1-1.5-1-1.5.45-1.5 1 .67 1 1.5 1'
            />
          </mask>
          <g mask='url(#tm-i)'>
            <path fill='#fbaf29' d='M4.5 12H3v1h1.5z' />
          </g>
          <mask
            id='tm-j'
            width='3'
            height='2'
            x='3'
            y='12'
            maskUnits='userSpaceOnUse'
            style={{ maskType: 'luminance' }}>
            <path
              fill='#fff'
              d='M4.5 14c.83 0 1.5-.45 1.5-1s-.67-1-1.5-1-1.5.45-1.5 1 .67 1 1.5 1'
            />
          </mask>
          <g mask='url(#tm-j)'>
            <path fill='#fbaf29' d='M6 13H4.5v1H6z' />
          </g>
          <path fill='#28ae67' d='M4.5 9C5.33 9 6 8.55 6 8s-.67-1-1.5-1S3 7.45 3 8s.67 1 1.5 1' />
          <mask
            id='tm-k'
            width='3'
            height='2'
            x='3'
            y='7'
            maskUnits='userSpaceOnUse'
            style={{ maskType: 'luminance' }}>
            <path fill='#fff' d='M4.5 9C5.33 9 6 8.55 6 8s-.67-1-1.5-1S3 7.45 3 8s.67 1 1.5 1' />
          </mask>
          <g mask='url(#tm-k)'>
            <path fill='#dd404f' d='M4.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2' />
          </g>
          <path
            fill='#28ae67'
            d='M4.5 11.5c.83 0 1.5-.45 1.5-1s-.67-1-1.5-1-1.5.45-1.5 1 .67 1 1.5 1'
          />
          <path fill='#fbaf29' d='M4.5 6C5.33 6 6 5.55 6 5s-.67-1-1.5-1S3 4.45 3 5s.67 1 1.5 1' />
          <mask
            id='tm-l'
            width='3'
            height='2'
            x='3'
            y='4'
            maskUnits='userSpaceOnUse'
            style={{ maskType: 'luminance' }}>
            <path fill='#fff' d='M4.5 6C5.33 6 6 5.55 6 5s-.67-1-1.5-1S3 4.45 3 5s.67 1 1.5 1' />
          </mask>
          <g mask='url(#tm-l)'>
            <path fill='#dd404f' d='M4.5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2' />
          </g>
          <mask
            id='tm-m'
            width='3'
            height='2'
            x='3'
            y='4'
            maskUnits='userSpaceOnUse'
            style={{ maskType: 'luminance' }}>
            <path fill='#fff' d='M4.5 6C5.33 6 6 5.55 6 5s-.67-1-1.5-1S3 4.45 3 5s.67 1 1.5 1' />
          </mask>
          <g mask='url(#tm-m)'>
            <path fill='#28ae67' d='M4 4H3v2h1z' />
          </g>
          <mask
            id='tm-n'
            width='3'
            height='2'
            x='3'
            y='4'
            maskUnits='userSpaceOnUse'
            style={{ maskType: 'luminance' }}>
            <path fill='#fff' d='M4.5 6C5.33 6 6 5.55 6 5s-.67-1-1.5-1S3 4.45 3 5s.67 1 1.5 1' />
          </mask>
          <g mask='url(#tm-n)'>
            <path fill='#28ae67' d='M6 4H5v2h1z' />
          </g>
          <path
            fill='url(#tm-o)'
            fillRule='evenodd'
            d='M11.12 3.18a.5.5 0 1 0 .76.64.5.5 0 0 0-.76-.64m-1.3 1.94a.5.5 0 1 0-.64.76.5.5 0 0 0 .64-.76m-1-1a.5.5 0 1 0-.64.76.5.5 0 0 0 .64-.76m2-2a.5.5 0 1 0-.64.76.5.5 0 0 0 .64-.76m-.5 1.5a.5.5 0 1 0-.64.76.5.5 0 0 0 .64-.76'
            clipRule='evenodd'
          />
          <path
            fill='url(#tm-p)'
            fillRule='evenodd'
            d='M13.1 7.09a3.05 3.05 0 0 1-4.62-.37 3.05 3.05 0 0 0 4.26-4.26l.37.31a3.05 3.05 0 0 1 0 4.32'
            clipRule='evenodd'
          />
        </g>
      </g>
    </svg>
  )
}
