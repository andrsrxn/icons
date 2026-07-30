import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagLU: FlagIcon = ({
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
      <title>LU</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='lu-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='lu-linearGradient-2'>
          <stop stopColor='#F14455' offset='0%' />
          <stop stopColor='#EB2D3F' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='lu-linearGradient-3'>
          <stop stopColor='#29B4EE' offset='0%' />
          <stop stopColor='#1AA3DC' offset='100%' />
        </linearGradient>
      </defs>
      <g id='lu-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='lu-LU'>
          <rect
            id='lu-FlagBackground'
            fill='url(#lu-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='lu-Rectangle-2'
            fill='url(#lu-linearGradient-2)'
            x='0'
            y='0'
            width='21'
            height='5'
          />
          <rect
            id='lu-Rectangle-2'
            fill='url(#lu-linearGradient-3)'
            x='0'
            y='10'
            width='21'
            height='5'
          />
          <rect
            id='lu-Rectangle-2'
            fill='url(#lu-linearGradient-1)'
            x='0'
            y='5'
            width='21'
            height='5'
          />
        </g>
      </g>
    </svg>
  )
}
