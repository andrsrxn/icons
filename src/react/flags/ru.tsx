import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagRU: FlagIcon = ({
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
      <title>RU</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='ru-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='ru-linearGradient-2'>
          <stop stopColor='#0C47B7' offset='0%' />
          <stop stopColor='#073DA4' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='ru-linearGradient-3'>
          <stop stopColor='#E53B35' offset='0%' />
          <stop stopColor='#D32E28' offset='100%' />
        </linearGradient>
      </defs>
      <g id='ru-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='ru-RU'>
          <rect
            id='ru-FlagBackground'
            fill='url(#ru-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='ru-Rectangle-2'
            fill='url(#ru-linearGradient-2)'
            x='0'
            y='5'
            width='21'
            height='5'
          />
          <rect
            id='ru-Rectangle-2'
            fill='url(#ru-linearGradient-3)'
            x='0'
            y='10'
            width='21'
            height='5'
          />
          <rect
            id='ru-Rectangle-2'
            fill='url(#ru-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='5'
          />
        </g>
      </g>
    </svg>
  )
}
