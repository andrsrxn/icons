import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagBW: FlagIcon = ({
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
      <title>BW</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='bw-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='bw-linearGradient-2'>
          <stop stopColor='#8BBDEA' offset='0%' />
          <stop stopColor='#78ABDA' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='bw-linearGradient-3'>
          <stop stopColor='#262626' offset='0%' />
          <stop stopColor='#0D0D0D' offset='100%' />
        </linearGradient>
      </defs>
      <g id='bw-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='bw-BW'>
          <rect
            id='bw-FlagBackground'
            fill='url(#bw-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='bw-Rectangle-2'
            fill='url(#bw-linearGradient-2)'
            x='0'
            y='0'
            width='21'
            height='5'
          />
          <rect
            id='bw-Rectangle-2'
            fill='url(#bw-linearGradient-2)'
            x='0'
            y='10'
            width='21'
            height='5'
          />
          <rect
            id='bw-Rectangle-2'
            fill='url(#bw-linearGradient-1)'
            x='0'
            y='5'
            width='21'
            height='5'
          />
          <rect
            id='bw-Rectangle-2-Copy-4'
            fill='url(#bw-linearGradient-3)'
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
