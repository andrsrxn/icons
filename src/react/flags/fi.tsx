import type { FlagIcon, FlagIconProps } from './types'

export const IconFlagFI: FlagIcon = ({ className, ...props }: FlagIconProps) => {
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
      <title>FI</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='fi-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='fi-linearGradient-2'>
          <stop stopColor='#0848A6' offset='0%' />
          <stop stopColor='#003480' offset='100%' />
        </linearGradient>
      </defs>
      <g id='fi-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='fi-FI'>
          <rect
            id='fi-FlagBackground'
            fill='url(#fi-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <polygon
            id='fi-Rectangle-2'
            fill='url(#fi-linearGradient-2)'
            points='0 9 6 9 6 15 9 15 9 9 21 9 21 6 9 6 9 0 6 0 6 6 0 6'
          />
        </g>
      </g>
    </svg>
  )
}
