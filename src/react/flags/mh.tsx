import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagMH: FlagIcon = ({
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
      <title>MH</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='mh-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='mh-linearGradient-2'>
          <stop stopColor='#064DAE' offset='0%' />
          <stop stopColor='#003D91' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='mh-linearGradient-3'>
          <stop stopColor='#F18D36' offset='0%' />
          <stop stopColor='#DB761E' offset='100%' />
        </linearGradient>
      </defs>
      <g id='mh-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='mh-MH'>
          <rect
            id='mh-FlagBackground'
            fill='url(#mh-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='mh-Mask-Copy'
            fill='url(#mh-linearGradient-2)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <polygon id='mh-Rectangle-253' fill='url(#mh-linearGradient-3)' points='21 0 21 4 0 15' />
          <polygon id='mh-Rectangle-253' fill='url(#mh-linearGradient-1)' points='21 8 21 4 0 15' />
          <path
            d='M4.83882103,4.3717472 L4.5,2 L4.16117897,4.3717472 L3.25,3.33493649 L3.71780952,4.71780952 L2.33493649,4.25 L3.3717472,5.16117897 L1,5.5 L3.3717472,5.83882103 L2.33493649,6.75 L3.71780952,6.28219048 L3.25,7.66506351 L4.16117897,6.6282528 L4.5,9 L4.83882103,6.6282528 L5.75,7.66506351 L5.28219048,6.28219048 L6.66506351,6.75 L5.6282528,5.83882103 L8,5.5 L5.6282528,5.16117897 L6.66506351,4.25 L5.28219048,4.71780952 L5.75,3.33493649 L4.83882103,4.3717472 Z'
            id='mh-Combined-Shape'
            fill='url(#mh-linearGradient-1)'
          />
        </g>
      </g>
    </svg>
  )
}
