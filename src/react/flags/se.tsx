import type { FlagIcon, FlagIconProps } from '../types'

export const IconFlagSE: FlagIcon = ({ className, ...props }: FlagIconProps) => {
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
      <title>SE</title>

      <defs>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='se-linearGradient-1'>
          <stop stopColor='#FFFFFF' offset='0%' />
          <stop stopColor='#F0F0F0' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='se-linearGradient-2'>
          <stop stopColor='#157CBB' offset='0%' />
          <stop stopColor='#0E6CA5' offset='100%' />
        </linearGradient>
        <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='se-linearGradient-3'>
          <stop stopColor='#FFD34D' offset='0%' />
          <stop stopColor='#FECB2F' offset='100%' />
        </linearGradient>
      </defs>
      <g id='se-Symbols' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='se-SE'>
          <rect
            id='se-FlagBackground'
            fill='url(#se-linearGradient-1)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <rect
            id='se-Mask-Copy'
            fill='url(#se-linearGradient-2)'
            x='0'
            y='0'
            width='21'
            height='15'
          />
          <polygon
            id='se-Rectangle-2'
            fill='url(#se-linearGradient-3)'
            points='0 9 6 9 6 15 9 15 9 9 21 9 21 6 9 6 9 0 6 0 6 6 0 6'
          />
        </g>
      </g>
    </svg>
  )
}
