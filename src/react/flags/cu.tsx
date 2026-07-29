import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagCU: FlagIcon = ({ className, ...props }: FlagIconProps) => {
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
      <title>CU</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='cu-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='cu-linearGradient-2'>
          <stop stopColor='#0B389F' offset='0%' />
          <stop stopColor='#052E8D' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='cu-linearGradient-3'>
          <stop stopColor='#E12A43' offset='0%' />
          <stop stopColor='#CD1931' offset='100%' />
        </linearGradient>
      </defs>
      <g id='cu-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='cu-CU'>
          <rect
            id='cu-FlagBackground'
            fill='url(#cu-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='cu-Rectangle-2'
            fill='url(#cu-linearGradient-2)'
            x='0'
            y='0'
            width='21'
            height='3'
          />
          <rect
            id='cu-Rectangle-2'
            fill='url(#cu-linearGradient-2)'
            x='0'
            y='6'
            width='21'
            height='3'
          />
          <rect
            id='cu-Rectangle-2'
            fill='url(#cu-linearGradient-1)'
            x='0'
            y='3'
            width='21'
            height='3'
          />
          <rect
            id='cu-Rectangle-2'
            fill='url(#cu-linearGradient-2)'
            x='0'
            y='12'
            width='21'
            height='3'
          />
          <rect
            id='cu-Rectangle-2'
            fill='url(#cu-linearGradient-1)'
            x='0'
            y='9'
            width='21'
            height='3'
          />
          <polygon id='cu-Rectangle-83' fill='url(#cu-linearGradient-3)' points='0 0 10 7.5 0 15' />
          <polygon
            id='cu-Star-53'
            fill='url(#cu-linearGradient-1)'
            points='3.5 8.26701627 2.3244295 9.11803399 2.77052418 7.73702106 1.59788697 6.88196601 3.04915915 6.8794708 3.5 5.5 3.95084085 6.8794708 5.40211303 6.88196601 4.22947582 7.73702106 4.6755705 9.11803399'
          />
        </g>
      </g>
    </svg>
  )
}
