import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagAM: FlagIcon = ({ className, ...props }: FlagIconProps) => {
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
      <title>AM</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='am-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='am-linearGradient-2'>
          <stop stopColor='#1047B9' offset='0%' />
          <stop stopColor='#06379D' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='am-linearGradient-3'>
          <stop stopColor='#F01C31' offset='0%' />
          <stop stopColor='#D70A1F' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='am-linearGradient-4'>
          <stop stopColor='#F5B23E' offset='0%' />
          <stop stopColor='#F0A728' offset='100%' />
        </linearGradient>
      </defs>
      <g id='am-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='am-AM'>
          <rect
            id='am-FlagBackground'
            fill='url(#am-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='am-Rectangle-2'
            fill='url(#am-linearGradient-2)'
            x='0'
            y='5'
            width='21'
            height='5'
          />
          <rect
            id='am-Rectangle-2'
            fill='url(#am-linearGradient-3)'
            x='0'
            y='0'
            width='21'
            height='5'
          />
          <rect
            id='am-Rectangle-2'
            fill='url(#am-linearGradient-4)'
            x='0'
            y='10'
            width='21'
            height='5'
          />
        </g>
      </g>
    </svg>
  )
}
