import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagGM: FlagIcon = ({ className, ...props }: FlagIconProps) => {
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
      <title>GM</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='gm-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='gm-linearGradient-2'>
          <stop stopColor='#DF2237' offset='0%' />
          <stop stopColor='#CE1126' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='gm-linearGradient-3'>
          <stop stopColor='#4B9334' offset='0%' />
          <stop stopColor='#3B7828' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='gm-linearGradient-4'>
          <stop stopColor='#1526A7' offset='0%' />
          <stop stopColor='#0C1B8D' offset='100%' />
        </linearGradient>
      </defs>
      <g id='gm-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='gm-GM'>
          <rect
            id='gm-FlagBackground'
            fill='url(#gm-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='gm-Rectangle-2'
            fill='url(#gm-linearGradient-2)'
            x='0'
            y='0'
            width='21'
            height='5'
          />
          <rect
            id='gm-Rectangle-2'
            fill='url(#gm-linearGradient-3)'
            x='0'
            y='10'
            width='21'
            height='5'
          />
          <rect
            id='gm-Rectangle-2'
            fill='url(#gm-linearGradient-1)'
            x='0'
            y='5'
            width='21'
            height='5'
          />
          <rect
            id='gm-Rectangle-2-Copy-4'
            fill='url(#gm-linearGradient-4)'
            x='0'
            y='6'
            width='21'
            height='3'
          />
        </g>
      </g>
    </svg>
  )
}
