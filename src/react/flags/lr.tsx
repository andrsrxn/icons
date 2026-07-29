import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagLR: FlagIcon = ({ className, ...props }: FlagIconProps) => {
  return (
    <svg
      width='21px'
      height='15px'
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      role='img'
      className={`ui-icon-flag ${className ?? ''}`}
      {...props}>
      <title>LR</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='lr-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='lr-linearGradient-2'>
          <stop stopColor='#E1244A' offset='0%' />
          <stop stopColor='#BE1134' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='lr-linearGradient-3'>
          <stop stopColor='#0C3F8E' offset='0%' />
          <stop stopColor='#032A67' offset='100%' />
        </linearGradient>
        <polygon
          id='lr-path-4'
          points='5 6.17000005 3.23664424 7.42705098 3.88726383 5.3615499 2.14683045 4.07294902 4.31229123 4.05345008 5 2 5.68770877 4.05345008 7.85316955 4.07294902 6.11273617 5.3615499 6.76335576 7.42705098'
        />
        <filter
          x='-4.2%'
          y='-4.2%'
          width='108.3%'
          height='116.7%'
          filterUnits='objectBoundingBox'
          id='lr-filter-5'>
          <feOffset dx='0' dy='0.5' in='SourceAlpha' result='shadowOffsetOuter1' />
          <feColorMatrix
            values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.06 0'
            type='matrix'
            in='shadowOffsetOuter1'
          />
        </filter>
      </defs>
      <g id='lr-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='lr-LR'>
          <rect
            id='lr-FlagBackground'
            fill='url(#lr-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <path
            d='M10,0 L21,0 L21,2 L10,2 L10,0 Z M10,4 L21,4 L21,6 L10,6 L10,4 Z M10,8 L21,8 L21,10 L10,10 L10,8 Z M0,12 L21,12 L21,14 L0,14 L0,12 Z'
            id='lr-Rectangle-537'
            fill='url(#lr-linearGradient-2)'
          />
          <rect
            id='lr-Rectangle-1568'
            fill='url(#lr-linearGradient-3)'
            x='0'
            y='0'
            width='10'
            height='10'
          />
          <g id='lr-Star-8'>
            <use fill='black' fillOpacity='1' filter='url(#lr-filter-5)' xlinkHref='#lr-path-4' />
            <use fill='url(#lr-linearGradient-1)' fillRule='evenodd' xlinkHref='#lr-path-4' />
          </g>
        </g>
      </g>
    </svg>
  )
}
