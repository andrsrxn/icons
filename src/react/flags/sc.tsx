import type { FlagIcon, FlagIconProps } from '../types'

export const IconFlagSC: FlagIcon = ({ className, ...props }: FlagIconProps) => {
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
      <title>SC</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='sc-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='sc-linearGradient-2'>
          <stop stopColor='#1DBE4F' offset='0%' />
          <stop stopColor='#159B3F' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='sc-linearGradient-3'>
          <stop stopColor='#0858B4' offset='0%' />
          <stop stopColor='#013F87' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='sc-linearGradient-4'>
          <stop stopColor='#ED3535' offset='0%' />
          <stop stopColor='#D62828' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='sc-linearGradient-5'>
          <stop stopColor='#08964F' offset='0%' />
          <stop stopColor='#017B3E' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='sc-linearGradient-6'>
          <stop stopColor='#FFDD67' offset='0%' />
          <stop stopColor='#FDD856' offset='100%' />
        </linearGradient>
      </defs>
      <g id='sc-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='sc-SC'>
          <rect
            id='sc-FlagBackground'
            fill='url(#sc-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='sc-Mask-Copy'
            fill='url(#sc-linearGradient-2)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <polygon id='sc-Rectangle-253' fill='url(#sc-linearGradient-3)' points='0 0 7 0 0 15' />
          <polygon
            id='sc-Rectangle-253'
            fill='url(#sc-linearGradient-4)'
            points='14 0 21 0 21 5 0 15'
          />
          <polygon
            id='sc-Rectangle-253'
            fill='url(#sc-linearGradient-5)'
            points='21 15 21 10 0 15'
          />
          <polygon id='sc-Rectangle-253' fill='url(#sc-linearGradient-6)' points='7 0 14 0 0 15' />
          <polygon
            id='sc-Rectangle-253'
            fill='url(#sc-linearGradient-1)'
            points='21 10 21 5 0 15'
          />
        </g>
      </g>
    </svg>
  )
}
