import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagGW: FlagIcon = ({ className, ...props }: FlagIconProps) => {
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
      <title>GW</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='gw-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='gw-linearGradient-2'>
          <stop stopColor='#1AB558' offset='0%' />
          <stop stopColor='#169E4D' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='gw-linearGradient-3'>
          <stop stopColor='#FFD952' offset='0%' />
          <stop stopColor='#FCD036' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='gw-linearGradient-4'>
          <stop stopColor='#E72B42' offset='0%' />
          <stop stopColor='#CC162C' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='gw-linearGradient-5'>
          <stop stopColor='#262626' offset='0%' />
          <stop stopColor='#0D0D0D' offset='100%' />
        </linearGradient>
      </defs>
      <g id='gw-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='gw-GW'>
          <rect
            id='gw-FlagBackground'
            fill='url(#gw-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='gw-Rectangle-2'
            fill='url(#gw-linearGradient-2)'
            x='0'
            y='7'
            width='21'
            height='8'
          />
          <rect
            id='gw-Rectangle-2'
            fill='url(#gw-linearGradient-3)'
            x='0'
            y='0'
            width='21'
            height='7'
          />
          <rect
            id='gw-Rectangle-2'
            fill='url(#gw-linearGradient-4)'
            x='0'
            y='0'
            width='8'
            height='15'
          />
          <polygon
            id='gw-Star-53'
            fill='url(#gw-linearGradient-5)'
            points='4 8.45877033 2.53053687 9.52254249 3.08815523 7.79627633 1.62235871 6.72745751 3.43644894 6.72433851 4 5 4.56355106 6.72433851 6.37764129 6.72745751 4.91184477 7.79627633 5.46946313 9.52254249'
          />
        </g>
      </g>
    </svg>
  )
}
