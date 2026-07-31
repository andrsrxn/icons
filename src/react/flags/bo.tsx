import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagBO: FlagIcon = ({
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
      <title>BO</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='bo-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='bo-linearGradient-2'>
          <stop stopColor='#058C3F' offset='0%' />
          <stop stopColor='#007A34' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='bo-linearGradient-3'>
          <stop stopColor='#E63426' offset='0%' />
          <stop stopColor='#D52B1E' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='bo-linearGradient-4'>
          <stop stopColor='#FFEB1F' offset='0%' />
          <stop stopColor='#FAE400' offset='100%' />
        </linearGradient>
      </defs>
      <g id='bo-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='bo-BO'>
          <rect
            id='bo-FlagBackground'
            fill='url(#bo-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='bo-Rectangle-2'
            fill='url(#bo-linearGradient-2)'
            x='0'
            y='10'
            width='21'
            height='5'
          />
          <rect
            id='bo-Rectangle-2'
            fill='url(#bo-linearGradient-3)'
            x='0'
            y='0'
            width='21'
            height='5'
          />
          <rect
            id='bo-Rectangle-2'
            fill='url(#bo-linearGradient-4)'
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
