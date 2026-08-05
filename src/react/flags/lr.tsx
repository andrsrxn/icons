import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagLR: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size,
  ...props
}: FlagIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      role='img'
      className={`ui-icon-flag ${className ?? ''}`}
      {...props}>
      <title>LR</title>

      <defs>
        <linearGradient id='lr-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='lr-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#e1244a' />
          <stop offset='100%' stopColor='#be1134' />
        </linearGradient>
        <linearGradient id='lr-c' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#0c3f8e' />
          <stop offset='100%' stopColor='#032a67' />
        </linearGradient>
        <filter
          id='lr-d'
          width='108.3%'
          height='116.7%'
          x='-4.2%'
          y='-4.2%'
          filterUnits='objectBoundingBox'>
          <feOffset dy='.5' in='SourceAlpha' result='shadowOffsetOuter1' />
          <feColorMatrix
            in='shadowOffsetOuter1'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0'
          />
        </filter>
        <path
          id='lr-e'
          d='M5 6.17 3.237 7.427l.65-2.065-1.74-1.29 2.165-.019L5 2l.688 2.053 2.165.02-1.74 1.289.65 2.065z'
        />
        <clipPath id='lr-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#lr-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#lr-a)' d='M0 0h21v15H0z' />
          <path fill='url(#lr-b)' d='M10 0h11v2H10zm0 4h11v2H10zm0 4h11v2H10zM0 12h21v2H0z' />
          <path fill='url(#lr-c)' d='M0 0h10v10H0z' />
          <use xlinkHref='#lr-e' fill='#000' filter='url(#lr-d)' />
          <use xlinkHref='#lr-e' fill='url(#lr-a)' />
        </g>
      </g>
    </svg>
  )
}
