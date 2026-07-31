import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagTL: FlagIcon = ({
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
      <title>TL</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='tl-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='tl-linearGradient-2'>
          <stop stopColor='#FF323E' offset='0%' />
          <stop stopColor='#FD0D1B' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='tl-linearGradient-3'>
          <stop stopColor='#FFCC51' offset='0%' />
          <stop stopColor='#FFC63C' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='tl-linearGradient-4'>
          <stop stopColor='#262626' offset='0%' />
          <stop stopColor='#0D0D0D' offset='100%' />
        </linearGradient>
      </defs>
      <g id='tl-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='tl-TL'>
          <rect
            id='tl-FlagBackground'
            fill='url(#tl-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='tl-Mask-Copy'
            fill='url(#tl-linearGradient-2)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <polygon id='tl-Rectangle-83' fill='url(#tl-linearGradient-3)' points='0 0 13 7.5 0 15' />
          <polygon id='tl-Rectangle-83' fill='url(#tl-linearGradient-4)' points='0 0 9 7.5 0 15' />
          <polygon
            id='tl-Star-8'
            fill='url(#tl-linearGradient-1)'
            transform='translate(3.920454, 7.187336) rotate(-30.000000) translate(-3.920454, -7.187336) '
            points='3.92045417 8.26230472 2.61898766 9.1900867 3.09918549 7.6656181 1.81463712 6.7145503 3.41288221 6.70015886 3.92045417 5.18458466 4.42802612 6.70015886 6.02627121 6.7145503 4.74172284 7.6656181 5.22192067 9.1900867'
          />
        </g>
      </g>
    </svg>
  )
}
