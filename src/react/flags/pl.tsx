import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagPL: FlagIcon = ({ className, ...props }: FlagIconProps) => {
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
      <title>PL</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='pl-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='pl-linearGradient-2'>
          <stop stopColor='#EB2A50' offset='0%' />
          <stop stopColor='#DA1B40' offset='100%' />
        </linearGradient>
      </defs>
      <g id='pl-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='pl-PL'>
          <rect
            id='pl-FlagBackground'
            fill='url(#pl-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='pl-Rectangle-2'
            fill='url(#pl-linearGradient-2)'
            x='0'
            y='7'
            width='21'
            height='8'
          />
          <rect
            id='pl-Rectangle-2'
            fill='url(#pl-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='7'
          />
        </g>
      </g>
    </svg>
  )
}
