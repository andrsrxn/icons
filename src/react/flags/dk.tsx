import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagDK: FlagIcon = ({
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
      <title>DK</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='dk-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='dk-linearGradient-2'>
          <stop stopColor='#EF264D' offset='0%' />
          <stop stopColor='#E1143C' offset='100%' />
        </linearGradient>
      </defs>
      <g id='dk-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='dk-DK'>
          <rect
            id='dk-FlagBackground'
            fill='url(#dk-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='dk-Mask-Copy'
            fill='url(#dk-linearGradient-2)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <polygon
            id='dk-Rectangle-2'
            fill='url(#dk-linearGradient-1)'
            points='0 9 6 9 6 15 9 15 9 9 21 9 21 6 9 6 9 0 6 0 6 6 0 6'
          />
        </g>
      </g>
    </svg>
  )
}
