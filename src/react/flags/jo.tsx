import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagJO: FlagIcon = ({
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
      <title>JO</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='jo-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='jo-linearGradient-2'>
          <stop stopColor='#199E56' offset='0%' />
          <stop stopColor='#0F7A40' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='jo-linearGradient-3'>
          <stop stopColor='#262626' offset='0%' />
          <stop stopColor='#0D0D0D' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='jo-linearGradient-4'>
          <stop stopColor='#E6223A' offset='0%' />
          <stop stopColor='#CC162C' offset='100%' />
        </linearGradient>
      </defs>
      <g id='jo-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='jo-JO'>
          <rect
            id='jo-FlagBackground'
            fill='url(#jo-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='jo-Rectangle-2'
            fill='url(#jo-linearGradient-2)'
            x='0'
            y='10'
            width='21'
            height='5'
          />
          <rect
            id='jo-Rectangle-2'
            fill='url(#jo-linearGradient-3)'
            x='0'
            y='0'
            width='21'
            height='5'
          />
          <rect
            id='jo-Rectangle-2'
            fill='url(#jo-linearGradient-1)'
            x='0'
            y='5'
            width='21'
            height='5'
          />
          <polygon id='jo-Rectangle-83' fill='url(#jo-linearGradient-4)' points='0 0 10 7.5 0 15' />
          <polygon
            id='jo-Star-27'
            fill='url(#jo-linearGradient-1)'
            points='3.5 8.25 2.84917439 8.8514533 2.91362639 7.96761735 2.03760813 7.8337814 2.76880407 7.3331093 2.32725278 6.5647653 3.1745872 6.82427335 3.5 6 3.8254128 6.82427335 4.67274722 6.5647653 4.23119593 7.3331093 4.96239187 7.8337814 4.08637361 7.96761735 4.15082561 8.8514533'
          />
        </g>
      </g>
    </svg>
  )
}
