import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagUA: FlagIcon = ({ className, ...props }: FlagIconProps) => {
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
      <title>UA</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='ua-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='ua-linearGradient-2'>
          <stop stopColor='#156DD1' offset='0%' />
          <stop stopColor='#0D5EB9' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='ua-linearGradient-3'>
          <stop stopColor='#FFD948' offset='0%' />
          <stop stopColor='#FFD430' offset='100%' />
        </linearGradient>
      </defs>
      <g id='ua-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='ua-UA'>
          <rect
            id='ua-FlagBackground'
            fill='url(#ua-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='ua-Rectangle-2'
            fill='url(#ua-linearGradient-2)'
            x='0'
            y='0'
            width='21'
            height='8'
          />
          <rect
            id='ua-Rectangle-2'
            fill='url(#ua-linearGradient-3)'
            x='0'
            y='8'
            width='21'
            height='7'
          />
        </g>
      </g>
    </svg>
  )
}
