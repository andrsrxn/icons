import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagMM: FlagIcon = ({ className, ...props }: FlagIconProps) => {
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
      <title>MM</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='mm-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='mm-linearGradient-2'>
          <stop stopColor='#F13D4F' offset='0%' />
          <stop stopColor='#E92C3F' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='mm-linearGradient-3'>
          <stop stopColor='#4AC94B' offset='0%' />
          <stop stopColor='#3BB13C' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='mm-linearGradient-4'>
          <stop stopColor='#FFD043' offset='0%' />
          <stop stopColor='#FECA2F' offset='100%' />
        </linearGradient>
      </defs>
      <g id='mm-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='mm-MM'>
          <rect
            id='mm-FlagBackground'
            fill='url(#mm-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='mm-Rectangle-2'
            fill='url(#mm-linearGradient-2)'
            x='0'
            y='10'
            width='21'
            height='5'
          />
          <rect
            id='mm-Rectangle-2'
            fill='url(#mm-linearGradient-3)'
            x='0'
            y='5'
            width='21'
            height='5'
          />
          <rect
            id='mm-Rectangle-2'
            fill='url(#mm-linearGradient-4)'
            x='0'
            y='0'
            width='21'
            height='5'
          />
          <polygon
            id='mm-Star-8'
            fill='url(#mm-linearGradient-1)'
            points='10.5 9.25500007 7.85496636 11.1405765 8.83089575 8.04232485 6.22024568 6.10942353 9.46843684 6.08017512 10.5 3 11.5315632 6.08017512 14.7797543 6.10942353 12.1691043 8.04232485 13.1450336 11.1405765'
          />
        </g>
      </g>
    </svg>
  )
}
