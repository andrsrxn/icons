import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagBV: FlagIcon = ({ className, ...props }: FlagIconProps) => {
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
      <title>BV</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='bv-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='bv-linearGradient-2'>
          <stop stopColor='#F14247' offset='0%' />
          <stop stopColor='#ED2F35' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='bv-linearGradient-3'>
          <stop stopColor='#0A3A85' offset='0%' />
          <stop stopColor='#032A67' offset='100%' />
        </linearGradient>
      </defs>
      <g id='bv-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='bv-BV'>
          <rect
            id='bv-FlagBackground'
            fill='url(#bv-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='bv-Mask-Copy'
            fill='url(#bv-linearGradient-2)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <polygon
            id='bv-Rectangle-2'
            fill='url(#bv-linearGradient-1)'
            points='0 9 6 9 6 15 9 15 9 9 21 9 21 6 9 6 9 0 6 0 6 6 0 6'
          />
          <polygon
            id='bv-Rectangle-2'
            fill='url(#bv-linearGradient-3)'
            points='0 8 7 8 7 15 8 15 8 8 21 8 21 7 8 7 8 0 7 0 7 7 0 7'
          />
        </g>
      </g>
    </svg>
  )
}
