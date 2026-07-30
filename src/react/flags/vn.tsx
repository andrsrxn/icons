import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagVN: FlagIcon = ({
  className,
  size,
  width = size ?? 24,
  height = size ?? 'auto',
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
      <title>VN</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='vn-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='vn-linearGradient-2'>
          <stop stopColor='#EA403F' offset='0%' />
          <stop stopColor='#D82827' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='vn-linearGradient-3'>
          <stop stopColor='#FFFE4E' offset='0%' />
          <stop stopColor='#FFFE38' offset='100%' />
        </linearGradient>
      </defs>
      <g id='vn-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='vn-VN'>
          <rect
            id='vn-FlagBackground'
            fill='url(#vn-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='vn-Mask-Copy'
            fill='url(#vn-linearGradient-2)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <polygon
            id='vn-Star-8'
            fill='url(#vn-linearGradient-3)'
            points='10.5 9.25500007 7.85496636 11.1405765 8.83089575 8.04232485 6.22024568 6.10942353 9.46843684 6.08017512 10.5 3 11.5315632 6.08017512 14.7797543 6.10942353 12.1691043 8.04232485 13.1450336 11.1405765'
          />
        </g>
      </g>
    </svg>
  )
}
