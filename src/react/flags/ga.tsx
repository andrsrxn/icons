import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagGA: FlagIcon = ({
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
      <title>GA</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='ga-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='ga-linearGradient-2'>
          <stop stopColor='#09B470' offset='0%' />
          <stop stopColor='#019F60' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='ga-linearGradient-3'>
          <stop stopColor='#508CDE' offset='0%' />
          <stop stopColor='#3A75C5' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='ga-linearGradient-4'>
          <stop stopColor='#FFD935' offset='0%' />
          <stop stopColor='#FDD216' offset='100%' />
        </linearGradient>
      </defs>
      <g id='ga-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='ga-GA'>
          <rect
            id='ga-FlagBackground'
            fill='url(#ga-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='ga-Rectangle-2'
            fill='url(#ga-linearGradient-2)'
            x='0'
            y='0'
            width='21'
            height='5'
          />
          <rect
            id='ga-Rectangle-2'
            fill='url(#ga-linearGradient-3)'
            x='0'
            y='10'
            width='21'
            height='5'
          />
          <rect
            id='ga-Rectangle-2'
            fill='url(#ga-linearGradient-4)'
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
