import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagBJ: FlagIcon = ({ className, ...props }: FlagIconProps) => {
  return (
    <svg
      width='21px'
      height='15px'
      viewBox='0 0 21 15'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      role='img'
      className={`ui-icon-flag ${className ?? ''}`}
      {...props}>
      <title>BJ</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='bj-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='bj-linearGradient-2'>
          <stop stopColor='#F12641' offset='0%' />
          <stop stopColor='#E71834' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='bj-linearGradient-3'>
          <stop stopColor='#FFD648' offset='0%' />
          <stop stopColor='#FCD036' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='bj-linearGradient-4'>
          <stop stopColor='#17A668' offset='0%' />
          <stop stopColor='#118653' offset='100%' />
        </linearGradient>
      </defs>
      <g id='bj-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='bj-BJ'>
          <rect
            id='bj-FlagBackground'
            fill='url(#bj-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='bj-Rectangle-2'
            fill='url(#bj-linearGradient-2)'
            x='0'
            y='7'
            width='21'
            height='8'
          />
          <rect
            id='bj-Rectangle-2'
            fill='url(#bj-linearGradient-3)'
            x='0'
            y='0'
            width='21'
            height='7'
          />
          <rect
            id='bj-Rectangle-2'
            fill='url(#bj-linearGradient-4)'
            x='0'
            y='0'
            width='8'
            height='15'
          />
        </g>
      </g>
    </svg>
  )
}
