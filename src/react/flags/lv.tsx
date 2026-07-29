import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagLV: FlagIcon = ({ className, ...props }: FlagIconProps) => {
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
      <title>LV</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='lv-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='lv-linearGradient-2'>
          <stop stopColor='#B9414B' offset='0%' />
          <stop stopColor='#9D323B' offset='100%' />
        </linearGradient>
      </defs>
      <g id='lv-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='lv-LV'>
          <rect
            id='lv-FlagBackground'
            fill='url(#lv-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='lv-Rectangle-2'
            fill='url(#lv-linearGradient-2)'
            x='0'
            y='0'
            width='21'
            height='6'
          />
          <rect
            id='lv-Rectangle-2'
            fill='url(#lv-linearGradient-2)'
            x='0'
            y='9'
            width='21'
            height='6'
          />
          <rect
            id='lv-Rectangle-2'
            fill='url(#lv-linearGradient-1)'
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
