import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagDJ: FlagIcon = ({
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
      <title>DJ</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='dj-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='dj-linearGradient-2'>
          <stop stopColor='#1DC837' offset='0%' />
          <stop stopColor='#13AD2B' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='dj-linearGradient-3'>
          <stop stopColor='#82C5F5' offset='0%' />
          <stop stopColor='#6AB3E8' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='dj-linearGradient-4'>
          <stop stopColor='#E21C21' offset='0%' />
          <stop stopColor='#D7151A' offset='100%' />
        </linearGradient>
      </defs>
      <g id='dj-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='dj-DJ'>
          <rect
            id='dj-FlagBackground'
            fill='url(#dj-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='dj-Rectangle-2'
            fill='url(#dj-linearGradient-2)'
            x='0'
            y='7'
            width='21'
            height='8'
          />
          <rect
            id='dj-Rectangle-2'
            fill='url(#dj-linearGradient-3)'
            x='0'
            y='0'
            width='21'
            height='7'
          />
          <polygon id='dj-Rectangle-83' fill='url(#dj-linearGradient-1)' points='0 0 10 7.5 0 15' />
          <polygon
            id='dj-Star-8'
            fill='url(#dj-linearGradient-4)'
            points='3.5 8.47500004 2.03053687 9.52254249 2.57271986 7.80129158 1.12235871 6.72745751 2.92690936 6.7112084 3.5 5 4.07309064 6.7112084 5.87764129 6.72745751 4.42728014 7.80129158 4.96946313 9.52254249'
          />
        </g>
      </g>
    </svg>
  )
}
