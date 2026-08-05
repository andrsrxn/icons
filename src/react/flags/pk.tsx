import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagPK: FlagIcon = ({
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
      <title>PK</title>

      <defs>
        <linearGradient id='pk-a' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#fff' />
          <stop offset='100%' stopColor='#f0f0f0' />
        </linearGradient>
        <linearGradient id='pk-b' x1='50%' x2='50%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#0a632f' />
          <stop offset='100%' stopColor='#05411e' />
        </linearGradient>
        <filter
          id='pk-c'
          width='105.6%'
          height='111.1%'
          x='-2.8%'
          y='-2.8%'
          filterUnits='objectBoundingBox'>
          <feOffset dy='.5' in='SourceAlpha' result='shadowOffsetOuter1' />
          <feColorMatrix
            in='shadowOffsetOuter1'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0'
          />
        </filter>
        <path
          id='pk-d'
          d='M15.978 10.878a4.18 4.18 0 0 1-2.65.95c-2.383 0-4.314-2.015-4.314-4.5 0-2.486 1.931-4.5 4.314-4.5.999 0 1.919.354 2.65.95a4.2 4.2 0 0 0-1.043-.132c-2.165 0-3.92 1.648-3.92 3.682s1.755 3.681 3.92 3.681q.543-.001 1.043-.131m.036-2.77-1.175.838.434-1.377-1.16-.86 1.443-.013.458-1.368.459 1.368 1.443.013-1.16.86.434 1.377z'
        />
        <clipPath id='pk-clip'>
          <rect x='0' y='0' width='21' height='15' />
        </clipPath>
      </defs>
      <g clipPath='url(#pk-clip)'>
        <g fill='none' fillRule='evenodd'>
          <path fill='url(#pk-a)' d='M0 0h21v15H0z' />
          <path fill='url(#pk-b)' d='M0-.002h21v15H0z' />
          <path fill='url(#pk-a)' d='M0-.002h6v15H0z' />
          <g transform='rotate(-45 13.465 7.328)'>
            <use xlinkHref='#pk-d' fill='#000' filter='url(#pk-c)' />
            <use xlinkHref='#pk-d' fill='url(#pk-a)' />
          </g>
        </g>
      </g>
    </svg>
  )
}
