import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagRW: FlagIcon = ({
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
      <title>RW</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='rw-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='rw-linearGradient-2'>
          <stop stopColor='#2D754D' offset='0%' />
          <stop stopColor='#235F3E' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='rw-linearGradient-3'>
          <stop stopColor='#25B1EB' offset='0%' />
          <stop stopColor='#1AA3DC' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='rw-linearGradient-4'>
          <stop stopColor='#FAD546' offset='0%' />
          <stop stopColor='#FAD12F' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='rw-linearGradient-5'>
          <stop stopColor='#EDC738' offset='0%' />
          <stop stopColor='#E5BE2A' offset='100%' />
        </linearGradient>
      </defs>
      <g id='rw-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='rw-RW'>
          <rect
            id='rw-FlagBackground'
            fill='url(#rw-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='rw-Rectangle-2'
            fill='url(#rw-linearGradient-2)'
            x='0'
            y='11'
            width='21'
            height='4'
          />
          <rect
            id='rw-Rectangle-2'
            fill='url(#rw-linearGradient-3)'
            x='0'
            y='0'
            width='21'
            height='7'
          />
          <rect
            id='rw-Rectangle-2'
            fill='url(#rw-linearGradient-4)'
            x='0'
            y='7'
            width='21'
            height='4'
          />
          <polygon
            id='rw-Star-31'
            fill='url(#rw-linearGradient-5)'
            points='16 4.5 15.2346331 5.34775907 15.2928932 4.20710678 14.1522409 4.26536686 15 3.5 14.1522409 2.73463314 15.2928932 2.79289322 15.2346331 1.65224093 16 2.5 16.7653669 1.65224093 16.7071068 2.79289322 17.8477591 2.73463314 17 3.5 17.8477591 4.26536686 16.7071068 4.20710678 16.7653669 5.34775907'
          />
        </g>
      </g>
    </svg>
  )
}
